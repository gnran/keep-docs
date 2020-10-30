(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{576:function(t,e,r){"use strict";r.r(e);var a=r(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"upgrade-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-management"}},[t._v("#")]),t._v(" Upgrade management")]),t._v(" "),r("p",[t._v("The system has been designed to facilitate upgrades without exposing stakers to vulnerabilities commonly found in upgradeable smart contracts. For this purpose, smart contracts in the system are divided into different categories based on their purpose and functionality, and strict security boundaries are maintained in the design.")]),t._v(" "),r("p",[t._v("Furthermore, the authority to take various actions in the system has been divided into a number of roles where each role has a specific purpose and domain. The roles and their authorizations are designed to limit the impact of single key compromise. Severely harmful actions such as stealing participants' stakes should require the compromise of multiple independent actors wherever feasible.")]),t._v(" "),r("h2",{attrs:{id:"contract-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contract-structure"}},[t._v("#")]),t._v(" Contract structure")]),t._v(" "),r("h3",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("Token contract")])]),t._v(" "),r("p",[t._v("KEEP is an ERC20 token defined by the "),r("em",[t._v("token contract")]),t._v(". The token contract is hard-coded in the operator and staking contracts, but the design of the overall system makes it possible to later migrate to a new version of the token contract without disrupting customer experience.")]),t._v(" "),r("p",[r("strong",[t._v("Staking contract")])]),t._v(" "),r("p",[t._v("Owners of KEEP tokens can use a "),r("em",[t._v("staking contract")]),t._v(" to "),r("em",[t._v("stake")]),t._v(" them and use them as collateral for "),r("em",[t._v("operators")]),t._v(" who perform useful work in the Keep Network. Staked tokens are transferred to the staking contract and "),r("em",[t._v("delegated")]),t._v(" to an operator address. The staking contract makes the tokens available to "),r("em",[t._v("operator contracts")]),t._v(" that have been "),r("em",[t._v("authorized")]),t._v(" to punish the operator in case of misbehavior, while protecting them from unauthorized operator contracts.")]),t._v(" "),r("p",[r("strong",[t._v("Operator contracts")])]),t._v(" "),r("p",[t._v("Operators interact with "),r("em",[t._v("operator contracts")]),t._v(" to perform useful work for customers. Operator contracts handle operations that are critical for the proper incentives of individual operators. They reward operators for correct behavior, and are authorized to punish misbehavior.")]),t._v(" "),r("p",[r("strong",[t._v("Service contracts")])]),t._v(" "),r("p",[r("em",[t._v("Service contracts")]),t._v(" provide higher-level services to the public using work performed by one or more operator contracts. Service contracts do not interact directly with operators nor do they need to be aware of the KEEP tokens or the staking contract. Operator contracts can be upgraded without disrupting customer experience by deploying a new version and adding it to the service contract.")]),t._v(" "),r("p",[r("strong",[t._v("Registry")])]),t._v(" "),r("p",[t._v("The addresses of contracts approved by Keep Org are kept in the "),r("em",[t._v("registry")]),t._v(". Token contracts, staking contracts, operator contracts and service contracts are all tracked separately in the registry. The addresses and statuses of various contracts can be queried from the registry.")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"operator-contracts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-contracts"}},[t._v("#")]),t._v(" Operator contracts")]),t._v(" "),r("p",[t._v('Operator contracts coordinate the work performed by network operators, and provide services to other "customer" contracts. Operator contracts handle all operations that may have an impact on staked tokens. Conversely, operators performing work for the network only need to interact with operator contracts.')]),t._v(" "),r("p",[t._v('The customer contract is treated as untrusted and the operator contract must maintain correctness and the safety of the operators\' stakes regardless of the customer contract’s input. Each operator contract is an independent "microservice", keeping its own state on security-critical data.')]),t._v(" "),r("p",[t._v('When a customer contract requests an operator contract to perform a service, it must pay the operator contract for the service provided. The payment is distributed to contributing operators according to the operator contract’s own rules. An operator contract can either provide services to any contract that makes a valid request and pays the correct fee, or it can be owned by a specific contract and only serve its owner. In the random beacon the service contract is the only "customer" of the operator contracts, and operator contracts only provide services to the random beacon. Future operator contracts may provide services directly to the public.')]),t._v(" "),r("p",[t._v("If one or more participant operators misbehave or fail to perform promised work, the operator contract tells the staking contract to punish the guilty parties and optionally reward a tattletale that proved the misbehavior. To punish misbehaving operators, an operator contract must be authorized by the operator’s authorizer. Once an operator contract has been authorized by some address, it can never be deauthorized by that address.")]),t._v(" "),r("h3",{attrs:{id:"service-contracts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-contracts"}},[t._v("#")]),t._v(" Service contracts")]),t._v(" "),r("p",[t._v("Service contracts use the basic functionality performed by operator contracts, to provide useful services to the public. In contrast to operator contracts, service contracts don’t interact directly with operators and a failure in a service contract cannot risk operators' stakes.")]),t._v(" "),r("p",[t._v("Service contracts receive requests for their services from customers, and provide the requested services. Elements that are critical for operators' security and incentives are delegated to an operator contract, while other parts of the work are performed in the service contract. The service contract keeps shared state which is not security-critical.")]),t._v(" "),r("p",[t._v("Service contracts can use multiple different versions of operator contracts to perform the operator contract functions. To permit system upgrades, the list of used operator contracts can be updated with proper authorization.")]),t._v(" "),r("h2",{attrs:{id:"roles-and-authorizations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roles-and-authorizations"}},[t._v("#")]),t._v(" Roles and authorizations")]),t._v(" "),r("h3",{attrs:{id:"roles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("Governance")])]),t._v(" "),r("p",[t._v("Governance is the final arbiter of authority in the Keep Network. The role of Governance is to enable recovery from key compromise by rekeying other roles. Governance has the authority to change the addresses of the "),r("em",[t._v("Registry Keeper")]),t._v(", "),r("em",[t._v("Panic Button")]),t._v(", and the service contracts' "),r("em",[t._v("Operator Contract Upgraders")]),t._v(". The rekeying process is currently unspecified.")]),t._v(" "),r("p",[r("strong",[t._v("Registry Keeper")])]),t._v(" "),r("p",[t._v("The Registry Keeper maintains the global "),r("em",[t._v("registry")]),t._v(" of approved contracts. Each operator contract must be approved by the Registry Keeper before it can be authorized to punish operators or used by a service contract. The Registry Keeper can be rekeyed by "),r("em",[t._v("Governance")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Panic Button")])]),t._v(" "),r("p",[t._v("The Panic Button can disable malicious or malfunctioning contracts that have been previously approved by the Registry Keeper. When a contract is disabled by the Panic Button, its status on the "),r("em",[t._v("registry")]),t._v(" changes to reflect this, and it becomes ineligible to penalize operators. Contracts disabled by the Panic Button can not be reactivated. The Panic Button can be rekeyed by "),r("em",[t._v("Governance")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Operator Contract Upgrader")])]),t._v(" "),r("p",[t._v("Each service contract has an Operator Contract Upgrader whose purpose is to manage operator contracts for that service contract. The Operator Contract Upgrader can add new operator contracts to the service contract, and deprecate old ones. The Operator Contract Upgraders can be rekeyed by "),r("em",[t._v("Governance")]),t._v(".")]),t._v(" "),r("p",[r("strong",[t._v("Authorizer")])]),t._v(" "),r("p",[t._v("Each operator has an Authorizer whose purpose is to determine which operator contracts may punish the operator for misbehavior. The operator can only perform work for authorized operator contracts. The Authorizer cannot be rekeyed except by undelegating and redelegating.")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"authorizations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authorizations"}},[t._v("#")]),t._v(" Authorizations")]),t._v(" "),r("h4",{attrs:{id:"the-registry-and-panic-button"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-registry-and-panic-button"}},[t._v("#")]),t._v(" The Registry and Panic Button")]),t._v(" "),r("p",[t._v("The registry tracks all Keep Org -approved contracts. Operator contracts have a special status on the registry, reflecting the ability of the Panic Button to disable them.")]),t._v(" "),r("p",[t._v("Each operator contract’s status may be "),r("code",[t._v("NULL")]),t._v(", "),r("code",[t._v("APPROVED")]),t._v(" or "),r("code",[t._v("DISABLED")]),t._v(".")]),t._v(" "),r("p",[t._v("A status of "),r("code",[t._v("NULL")]),t._v(" is the default and means that the operator contract has not been approved by the "),r("em",[t._v("Registry Keeper")]),t._v(".")]),t._v(" "),r("p",[t._v("When the "),r("em",[t._v("Registry Keeper")]),t._v(" approves a operator contract, its status switches to "),r("code",[t._v("APPROVED")]),t._v(" in the registry. Approved operator contracts can be authorized to punish operators, and service contracts may utilize them.")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Panic Button")]),t._v(" can be used to set the status of an "),r("code",[t._v("APPROVED")]),t._v(" contract to "),r("code",[t._v("DISABLED")]),t._v(". Operator Contracts disabled with the "),r("em",[t._v("Panic Button")]),t._v(" cannot be re-enabled, and disabled contracts may not punish operators nor be selected by service contracts to perform work.")]),t._v(" "),r("h4",{attrs:{id:"staking-contracts-authorized-operator-contracts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#staking-contracts-authorized-operator-contracts"}},[t._v("#")]),t._v(" Staking contracts: authorized operator contracts")]),t._v(" "),r("p",[t._v("Staking contracts hold staked tokens, enforce staking rules, and punish misbehaving operators on behalf of authorized operator contracts. For this purpose, each staking contract tracks which operator contracts have been authorized by which addresses.")]),t._v(" "),r("p",[t._v("The status of a contract may be either "),r("code",[t._v("NULL")]),t._v(" or "),r("code",[t._v("AUTHORIZED")]),t._v(". A status of "),r("code",[t._v("NULL")]),t._v(" is the default and means the operator contract is not authorized. A status of "),r("code",[t._v("AUTHORIZED")]),t._v(" means that the operator contract may impose punishments on those operators who have assigned that "),r("code",[t._v("authorizer")]),t._v(" as their "),r("em",[t._v("Authorizer")]),t._v(".")]),t._v(" "),r("p",[t._v("To authorize an operator contract on a staking contract, the operator contract must have been "),r("code",[t._v("APPROVED")]),t._v(" on the "),r("em",[t._v("registry")]),t._v(". Once a operator contract has been authorized, authorization cannot be withdrawn by the authorizer. However, a operator contract that has been "),r("code",[t._v("DISABLED")]),t._v(" by the "),r("em",[t._v("Panic Button")]),t._v(" may not punish stakers.")]),t._v(" "),r("h4",{attrs:{id:"service-contracts-used-operator-contracts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-contracts-used-operator-contracts"}},[t._v("#")]),t._v(" Service contracts: used operator contracts")]),t._v(" "),r("p",[t._v("Service contracts use the basic functionality performed by operator contracts, to provide useful services to the public. Service contracts can use multiple different versions of operator contracts to perform the operator contract functions. To permit system upgrades, the list of used operator contracts can be updated with proper authorization.")]),t._v(" "),r("p",[t._v("A service contract is deployed with zero operator contracts, rendering the service contract inactive until at least one operator contract is activated.")]),t._v(" "),r("p",[t._v("Each service contract has its own "),r("em",[t._v("Operator Contract Upgrader")]),t._v(" who can add used operator contracts. To add a used operator contract, the operator contract must have been "),r("code",[t._v("APPROVED")]),t._v(" on the "),r("em",[t._v("registry")]),t._v(", and the interface it claims to implement must match what the service contract expects.")]),t._v(" "),r("p",[t._v("If an operator contract has been "),r("code",[t._v("DISABLED")]),t._v(" by the "),r("em",[t._v("Panic Button")]),t._v(", the service contract must not use its functionality. This must be checked when the service contract selects an operator contract.")]),t._v(" "),r("h2",{attrs:{id:"upgrade-processes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-processes"}},[t._v("#")]),t._v(" Upgrade processes")]),t._v(" "),r("h3",{attrs:{id:"operator-contract-upgrade"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operator-contract-upgrade"}},[t._v("#")]),t._v(" Operator contract upgrade")]),t._v(" "),r("p",[t._v("Operator contracts are immutable, and are upgraded by deploying a new version in a separate contract. The "),r("em",[t._v("Registry Keeper")]),t._v(" then approves the new contract on the "),r("em",[t._v("registry")]),t._v(", and operators are able to authorize it. Once authorized by a sufficient number of stakers, the contract can be added into the used operator contracts of a service contract.")]),t._v(" "),r("p",[t._v("Operator contracts can be upgraded without losing service contract state, but critical state is held within the operator contract and cannot be migrated.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Deploy the new operator contract")])]),t._v(" "),r("li",[r("p",[t._v("Approve the operator contract on the registry")])]),t._v(" "),r("li",[r("p",[t._v("Wait for stakers to authorize the operator contract")])]),t._v(" "),r("li",[r("p",[t._v("Activate the operator contract on the relevant service contracts")])])]),t._v(" "),r("h3",{attrs:{id:"service-contract-upgrade"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-contract-upgrade"}},[t._v("#")]),t._v(" Service contract upgrade")]),t._v(" "),r("p",[t._v("Because service contracts don’t impact the security of staked tokens, they can be upgraded in-place without migrating to a new address.")]),t._v(" "),r("h3",{attrs:{id:"new-service-contract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-service-contract"}},[t._v("#")]),t._v(" New service contract")]),t._v(" "),r("p",[t._v("A new service contract is deployed on-chain and listed on the "),r("em",[t._v("registry")]),t._v(".")]),t._v(" "),r("p",[t._v("If the service contract doesn’t rely on an operator contract exclusive to itself, it can be deployed after the operator contracts it uses are in place.")]),t._v(" "),r("p",[t._v("Otherwise the service contract must be deployed first, inactive because it has no operator contracts it uses. Once the address of the service contract is determined, the operator contract is deployed, approved on the registry, and authorized by stakers. The operator contract can now be activated on the service contract, making it ready to provide services.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Deploy the new service contract")])]),t._v(" "),r("li",[r("p",[t._v("Deploy a new operator contract serving the new service contract")])]),t._v(" "),r("li",[r("p",[t._v("Approve the operator contract on the registry")])]),t._v(" "),r("li",[r("p",[t._v("Wait for stakers to authorize the operator contract")])]),t._v(" "),r("li",[r("p",[t._v("Activate the operator contract on the service contract")])])]),t._v(" "),r("h3",{attrs:{id:"staking-contract-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#staking-contract-upgrades"}},[t._v("#")]),t._v(" Staking contract upgrades")]),t._v(" "),r("p",[t._v("Staking contracts can be upgraded by deploying a new version, and waiting for stakers to migrate by withdrawing their stakes on the old contract and staking them again on the new contract. While stakers are migrating, new operator contracts using the new staking contract should be deployed. Once stakers have migrated and approved the new operator contracts, the contracts can be activated on service contracts.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Deploy the new staking contract")])]),t._v(" "),r("li",[r("p",[t._v("Deploy new operator contracts recognizing the new staking contract")])]),t._v(" "),r("li",[r("p",[t._v("Approve the operator contracts on the registry")])]),t._v(" "),r("li",[r("p",[t._v("Wait for stakers to migrate to the new staking contract")])]),t._v(" "),r("li",[r("p",[t._v("Wait for stakers to authorize the new operator contracts")])]),t._v(" "),r("li",[r("p",[t._v("Activate the operator contracts on the service contracts")])])]),t._v(" "),r("h3",{attrs:{id:"token-upgrade"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#token-upgrade"}},[t._v("#")]),t._v(" Token upgrade")]),t._v(" "),r("p",[t._v("The upgrade process makes it possible to even hard-fork the token without disrupting service contract user experience:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Deploy the new token contract")])]),t._v(" "),r("li",[r("p",[t._v("Deploy a migration contract that lets holders convert old tokens to new tokens")])]),t._v(" "),r("li",[r("p",[t._v("Deploy a new staking contract for the new tokens")])]),t._v(" "),r("li",[r("p",[t._v("Deploy new operator contracts recognizing the new token and staking contract")])]),t._v(" "),r("li",[r("p",[t._v("Approve the operator contracts on the registry")])]),t._v(" "),r("li",[r("p",[t._v("Wait for stakers to convert their tokens, stake on the new contract and authorize the new operator contracts")])]),t._v(" "),r("li",[r("p",[t._v("Activate the operator contracts on the service contracts")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);