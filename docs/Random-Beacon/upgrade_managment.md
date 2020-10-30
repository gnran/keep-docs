--- 
order: 4
---

# Upgrade management

The system has been designed to facilitate upgrades without exposing stakers to vulnerabilities commonly found in upgradeable smart contracts. For this purpose, smart contracts in the system are divided into different categories based on their purpose and functionality, and strict security boundaries are maintained in the design.

Furthermore, the authority to take various actions in the system has been divided into a number of roles where each role has a specific purpose and domain. The roles and their authorizations are designed to limit the impact of single key compromise. Severely harmful actions such as stealing participants' stakes should require the compromise of multiple independent actors wherever feasible.

## Contract structure

### Overview

------

**Token contract**

KEEP is an ERC20 token defined by the _token contract_. The token contract is hard-coded in the operator and staking contracts, but the design of the overall system makes it possible to later migrate to a new version of the token contract without disrupting customer experience.

**Staking contract**

Owners of KEEP tokens can use a _staking contract_ to _stake_ them and use them as collateral for _operators_ who perform useful work in the Keep Network. Staked tokens are transferred to the staking contract and _delegated_ to an operator address. The staking contract makes the tokens available to _operator contracts_ that have been _authorized_ to punish the operator in case of misbehavior, while protecting them from unauthorized operator contracts.

**Operator contracts**

Operators interact with _operator contracts_ to perform useful work for customers. Operator contracts handle operations that are critical for the proper incentives of individual operators. They reward operators for correct behavior, and are authorized to punish misbehavior.

**Service contracts**

_Service contracts_ provide higher-level services to the public using work performed by one or more operator contracts. Service contracts do not interact directly with operators nor do they need to be aware of the KEEP tokens or the staking contract. Operator contracts can be upgraded without disrupting customer experience by deploying a new version and adding it to the service contract.

**Registry**

The addresses of contracts approved by Keep Org are kept in the _registry_. Token contracts, staking contracts, operator contracts and service contracts are all tracked separately in the registry. The addresses and statuses of various contracts can be queried from the registry.

------

### Operator contracts

Operator contracts coordinate the work performed by network operators, and provide services to other "customer" contracts. Operator contracts handle all operations that may have an impact on staked tokens. Conversely, operators performing work for the network only need to interact with operator contracts.

The customer contract is treated as untrusted and the operator contract must maintain correctness and the safety of the operators' stakes regardless of the customer contract’s input. Each operator contract is an independent "microservice", keeping its own state on security-critical data.

When a customer contract requests an operator contract to perform a service, it must pay the operator contract for the service provided. The payment is distributed to contributing operators according to the operator contract’s own rules. An operator contract can either provide services to any contract that makes a valid request and pays the correct fee, or it can be owned by a specific contract and only serve its owner. In the random beacon the service contract is the only "customer" of the operator contracts, and operator contracts only provide services to the random beacon. Future operator contracts may provide services directly to the public.

If one or more participant operators misbehave or fail to perform promised work, the operator contract tells the staking contract to punish the guilty parties and optionally reward a tattletale that proved the misbehavior. To punish misbehaving operators, an operator contract must be authorized by the operator’s authorizer. Once an operator contract has been authorized by some address, it can never be deauthorized by that address.

### Service contracts

Service contracts use the basic functionality performed by operator contracts, to provide useful services to the public. In contrast to operator contracts, service contracts don’t interact directly with operators and a failure in a service contract cannot risk operators' stakes.

Service contracts receive requests for their services from customers, and provide the requested services. Elements that are critical for operators' security and incentives are delegated to an operator contract, while other parts of the work are performed in the service contract. The service contract keeps shared state which is not security-critical.

Service contracts can use multiple different versions of operator contracts to perform the operator contract functions. To permit system upgrades, the list of used operator contracts can be updated with proper authorization.

## Roles and authorizations

### Roles

--------

**Governance**

Governance is the final arbiter of authority in the Keep Network. The role of Governance is to enable recovery from key compromise by rekeying other roles. Governance has the authority to change the addresses of the _Registry Keeper_, _Panic Button_, and the service contracts' _Operator Contract Upgraders_. The rekeying process is currently unspecified.

**Registry Keeper**

The Registry Keeper maintains the global _registry_ of approved contracts. Each operator contract must be approved by the Registry Keeper before it can be authorized to punish operators or used by a service contract. The Registry Keeper can be rekeyed by _Governance_.

**Panic Button**

The Panic Button can disable malicious or malfunctioning contracts that have been previously approved by the Registry Keeper. When a contract is disabled by the Panic Button, its status on the _registry_ changes to reflect this, and it becomes ineligible to penalize operators. Contracts disabled by the Panic Button can not be reactivated. The Panic Button can be rekeyed by _Governance_.

**Operator Contract Upgrader**

Each service contract has an Operator Contract Upgrader whose purpose is to manage operator contracts for that service contract. The Operator Contract Upgrader can add new operator contracts to the service contract, and deprecate old ones. The Operator Contract Upgraders can be rekeyed by _Governance_.

**Authorizer**

Each operator has an Authorizer whose purpose is to determine which operator contracts may punish the operator for misbehavior. The operator can only perform work for authorized operator contracts. The Authorizer cannot be rekeyed except by undelegating and redelegating.

--------

### Authorizations

#### The Registry and Panic Button

The registry tracks all Keep Org -approved contracts. Operator contracts have a special status on the registry, reflecting the ability of the Panic Button to disable them.

Each operator contract’s status may be `NULL`, `APPROVED` or `DISABLED`.

A status of `NULL` is the default and means that the operator contract has not been approved by the _Registry Keeper_.

When the _Registry Keeper_ approves a operator contract, its status switches to `APPROVED` in the registry. Approved operator contracts can be authorized to punish operators, and service contracts may utilize them.

The _Panic Button_ can be used to set the status of an `APPROVED` contract to `DISABLED`. Operator Contracts disabled with the _Panic Button_ cannot be re-enabled, and disabled contracts may not punish operators nor be selected by service contracts to perform work.

#### Staking contracts: authorized operator contracts

Staking contracts hold staked tokens, enforce staking rules, and punish misbehaving operators on behalf of authorized operator contracts. For this purpose, each staking contract tracks which operator contracts have been authorized by which addresses.

The status of a contract may be either `NULL` or `AUTHORIZED`. A status of `NULL` is the default and means the operator contract is not authorized. A status of `AUTHORIZED` means that the operator contract may impose punishments on those operators who have assigned that `authorizer` as their _Authorizer_.

To authorize an operator contract on a staking contract, the operator contract must have been `APPROVED` on the _registry_. Once a operator contract has been authorized, authorization cannot be withdrawn by the authorizer. However, a operator contract that has been `DISABLED` by the _Panic Button_ may not punish stakers.

#### Service contracts: used operator contracts

Service contracts use the basic functionality performed by operator contracts, to provide useful services to the public. Service contracts can use multiple different versions of operator contracts to perform the operator contract functions. To permit system upgrades, the list of used operator contracts can be updated with proper authorization.

A service contract is deployed with zero operator contracts, rendering the service contract inactive until at least one operator contract is activated.

Each service contract has its own _Operator Contract Upgrader_ who can add used operator contracts. To add a used operator contract, the operator contract must have been `APPROVED` on the _registry_, and the interface it claims to implement must match what the service contract expects.

If an operator contract has been `DISABLED` by the _Panic Button_, the service contract must not use its functionality. This must be checked when the service contract selects an operator contract.

## Upgrade processes

### Operator contract upgrade

Operator contracts are immutable, and are upgraded by deploying a new version in a separate contract. The _Registry Keeper_ then approves the new contract on the _registry_, and operators are able to authorize it. Once authorized by a sufficient number of stakers, the contract can be added into the used operator contracts of a service contract.

Operator contracts can be upgraded without losing service contract state, but critical state is held within the operator contract and cannot be migrated.

1. Deploy the new operator contract

2. Approve the operator contract on the registry

3. Wait for stakers to authorize the operator contract

4. Activate the operator contract on the relevant service contracts

### Service contract upgrade

Because service contracts don’t impact the security of staked tokens, they can be upgraded in-place without migrating to a new address.

### New service contract

A new service contract is deployed on-chain and listed on the _registry_.

If the service contract doesn’t rely on an operator contract exclusive to itself, it can be deployed after the operator contracts it uses are in place.

Otherwise the service contract must be deployed first, inactive because it has no operator contracts it uses. Once the address of the service contract is determined, the operator contract is deployed, approved on the registry, and authorized by stakers. The operator contract can now be activated on the service contract, making it ready to provide services.

1. Deploy the new service contract

2. Deploy a new operator contract serving the new service contract

3. Approve the operator contract on the registry

4. Wait for stakers to authorize the operator contract

5. Activate the operator contract on the service contract

### Staking contract upgrades

Staking contracts can be upgraded by deploying a new version, and waiting for stakers to migrate by withdrawing their stakes on the old contract and staking them again on the new contract. While stakers are migrating, new operator contracts using the new staking contract should be deployed. Once stakers have migrated and approved the new operator contracts, the contracts can be activated on service contracts.

1. Deploy the new staking contract

2. Deploy new operator contracts recognizing the new staking contract

3. Approve the operator contracts on the registry

4. Wait for stakers to migrate to the new staking contract

5. Wait for stakers to authorize the new operator contracts

6. Activate the operator contracts on the service contracts

### Token upgrade

The upgrade process makes it possible to even hard-fork the token without disrupting service contract user experience:

1. Deploy the new token contract

2. Deploy a migration contract that lets holders convert old tokens to new tokens

3. Deploy a new staking contract for the new tokens

4. Deploy new operator contracts recognizing the new token and staking contract

5. Approve the operator contracts on the registry

6. Wait for stakers to convert their tokens, stake on the new contract and authorize the new operator contracts

7. Activate the operator contracts on the service contracts