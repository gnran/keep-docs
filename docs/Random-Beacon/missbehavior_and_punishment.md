--- 
order: 3
---

# Misbehavior and punishments

To incentivize correct behavior in the Keep network, misbehaving participants will be punished. In some situations, proving misbehavior requires cooperation from another participant, a _tattletale_. This coordination is incentivized by rewarding the _tattletale_ by granting them a fraction of the tokens taken from the misbehaving participant.

## Authorization

_Operator contracts_ are authorized to impose penalties by stakers' _authorizers_. All stakers using the same _authorizer_ share the set of authorized operator contracts. Once given, this authorization cannot be revoked by the authorizer.

When an operator wishes to join a signing group the operator contract creating the group must be authorized by the operator’s authorizer. Authorization is checked when an operator submits a ticket for validation. The operator contract queries the staking contract for the amount of stake available for it. If the operator contract is not authorized or the operator is otherwise ineligible for work selection, the staking contract will return that the operator has no available stake, leading to any submitted tickets being rejected.

## Penalties

When an operator’s misbehavior is proven on-chain the operator contract calls the staking contract to punish the operator, specifying the type and magnitude of the punishment. The staking contract checks that the operator contract is authorized to punish the operator, and if true, applies the penalty according to its own rules.

A penalty can be applied to one or more operators simultaneously. Each affected operator is penalized in the same way by the same amount. If the same address is listed multiple times among the operators to be punished, the punishment will be applied multiple times.

### Pure slashing

When misbehavior is detected without third-party input, a _pure slashing_ penalty is applied. Pure slashing means that the staking contract subtracts the applicable penalty from the operator’s stake and burns tokens equal to the penalty amount. If the operator doesn’t have enough stake for the punishment (e.g. because it has been punished earlier), the punishment is equal to the remaining stake.

### Seizing

When a tattletale proves another operator’s misbehavior, a fraction of the penalty amount is _seized_ and transferred to the tattletale, while the rest is burned.

If the full amount is transferred to the tattletale, it can be exploited to transfer staked tokens without the normal constraints. To reduce the effectiveness of this "tattletale transfer", the seized amount is limited to a maximum of 5% of the entire penalty. The tattletale reward can be set to any value between 0 and the maximum of 5% of the penalty.

To apply a seizing penalty, the operator contract includes the tattletale operator’s address in the call. The staking contract subtracts the applicable penalty from the operator’s stake and transfers the reward to the tattletale’s _beneficiar_ address. The remainder is burned.

### Penalty amounts

In later versions, penalties for misbehavior can be adjusted to match the severity of the misbehavior. However, initially the penalty for misbehaving in the random beacon will equal the minimum stake required to join a signing group.