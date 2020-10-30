--- 
order: 4
---

# Manage Stake

## Operations in the Token Dashboard

The operations page in the token dashboard allows an operator to view their total balance of KEEP tokens, undelegate tokens they have been delegated, and to view any slashed tokens.

An **operator** handles the day-to-day participation in the network operations. The operator provides services in the network by following the protocols of authorized operator contracts.

### Where can I see slashed tokens?

A **slash** is a penalty for signing group misbehavior. It results in the removal of a portion of your delegated KEEP tokens (usually one minimum stake). If you’re using a staking provider, you shouldn’t need to worry about slashing. You can see slashed tokens on the Operations page.

![img](/dashboard/d11.png)

## Using a Staking Provider

If you’re not staking in-house, you’ll need to assign the operator role to your [staking provider](/Staking/staking_providers.md) when you delegate your KEEP tokens.

Note that both the owner and the operator roles are able to undelegate stake, from the token overview page and the operations page respectively. 

If you’ve got a ‘set it and forget it’ approach to staking, you’ll only need to check back in to the Token Dashboard to claim rewards or if you want to undelegate your stake. Learn more about claiming staking rewards in the [Claim Rewards](/Staking/Dashboard/claim_rewards.md) section.

## Staking In-House

You can find robust and well-maintained GitHub documentation about how to get the Random Beacon client up and running [here](/Development/Keep-Core/local_keep_network.md).

### Availability Requirements & Risks

There are timeouts around requested operations like redemption that can lead to bond seizure and liquidation. In the Keep system you lose 1 minimum KEEP stake if enough of your signing group is unavailable to produce an entry when selected. In tBTC, you lose your whole ETH bond if you're not available when needed. 

The risks of staking ETH on tBTC are mostly FX related risks. Compared to staking with the random beacon client, tBTC’s t-ECDSA has some additional off-chain things that require management. The primary scenario here is preventing a fall into liquidation if the ETH price takes a massive dip comparable to BTC. See the Slashing and Liquidation section for more details.