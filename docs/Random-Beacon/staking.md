--- 
order: 1
---

# Staking

The Keep network uses staking of tokens to enforce correct behavior.

## Basic description

Anyone with tokens can stake them, setting them aside as collateral for network operations. Staked tokens are delegated to an _operator_ address who performs work for _operator contracts_. Operators can earn rewards from contributing to the network, but if they misbehave their collateral can be taken away (_stake slashing_) as punishment.

### Stakers and roles

A token owner may wish to stake in a variety of different ways, for security or efficiency reasons. To support different ways of staking, the network uses a single abstraction of a _staker_ comprised of multiple separate _roles_:

-------

**owner**

Provides the tokens for the staker

**operator**

Handles the day-to-day participation in the network operations

**beneficiary**

Collects any rewards earned by the staker

**authorizer**

Authorizes contracts to protect against buggy or compromised upgrades

**staker**

An abstraction representing the owner, operator, beneficiary and authorizer each performing their respective roles.

-----

The different roles can all be performed by the same address; they may be divided between different addresses controlled by the same person; or they may be different parties entirely, executing a sophisticated scheme of cold storage and third-party delegation. As far as the network is concerned, any of these arrangements simply forms a _staker_.

Stakers are identified by their operator address.

### Initiating staking

Staking is initiated by the owner choosing the amount of tokens to stake, and the _operator_, _beneficiary_ and _authorizer_ addresses. The owner then authorizes the _staking contract_ to claim a number of tokens, and calls the staking contract to stake the tokens. The _staking contract_ processes the call, claims the tokens to itself, and records the information. The addresses of the roles cannot be changed after delegation.

## Contract authorization

Before the staker can participate in the network, the _authorizer_ must _authorize_ each _operator contract_ the staker wishes to use. It is necessary to introduce new functionality and to upgrade old contracts, but buggy or malicious _operator contracts_ could be used to steal or destroy tokens by _slashing_ well-behaved stakers. The requirement for _authorization_ ensures that the owner’s tokens are safe even if a contract upgrade is compromised, as long as the _authorizer_ denies authorization to such contracts.

Once a contract has been authorized, the authorization cannot be revoked.

### Operation

The _operator_ provides _services_ in the network by following the protocols of authorized operator contracts.

Any number of operations may be active at once regardless of the _staked amount_.

#### Rewards

Stakers that provide services in the network will be rewarded at certain points. Rewards may be either tokens or the currency used to pay for network services. Rewards earned by a staker will be sent to the staker’s _beneficiary_ address.

### Slashing

If a staker violates the protocol of an operation in a way which can be proven on-chain, they will be penalized by having their stakes _slashed_.

If a staker has joined multiple operations at once, they may accrue more punishments than their stake can cover. If a staker’s remaining stake falls to zero, the staker is terminated and may not continue any operations. Any remaining penalties are nullified.

#### Tattletales

Some misbehavior cannot be caught by a contract alone and requires the cooperation of a third party _tattletale_. If a _tattletale_ presents proof of misbehavior by a staker, a part of the penalty will be awarded to the tattletale as a _tattletale reward_.

### Unstaking

When staking, the tokens used as collateral are locked until the staker announces their intention to stop staking, and for a period of time afterwards. The purpose of this _unstaking_ period is to give operations time to finish before the collateral can be moved away. No new operations can be started or joined within the _unstaking period_ but the staker is required to continue participating in any unfinished operations.

:::warning
You can read more about staking in [this section](https://docs.keep.network/random-beacon/index.html#_staking) in official documentation
:::



