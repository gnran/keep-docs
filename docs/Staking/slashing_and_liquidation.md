--- 
order: 4
---

# Slashing and Liquidation

Slashing in the Keep and tBTC systems is not designed to be punitive, and is rather to protect the security of the network from malicious behaviors.

## What is Slashing?

A **slash** is a penalty for signing group misbehavior. It results in the removal of a portion of your delegated KEEP tokens (usually one minimum stake). If you’re using a staking provider, you shouldn’t need to worry about slashing.

Slashing vectors are kept minimal, and only seriously punitive in nature if malicious behavior is suspected. As long as a Random Beacon group (64 members) produces an entry, you won't be slashed if you had down time and were part of the group selected to produce an entry. 

Slashing exposure as it relates to uptime is correlated to the number of keeps or signing groups each operator (running client) is a part of.

## Keep Slashing Vectors

Slashing vectors are minimal and are designed to protect the security of the network from malicious behaviors.

### Example Scenario

Say you have 500,000 KEEP. You can put all your eggs (KEEP) in one basket (operator/running client). This means that any signing group you’re selected for is assigned to this client. In this scenario, you’re exposing all of your 500,000 KEEP to a single client being up. 

Let’s say your client goes down, it’s part of 10 signing groups and 3 of those groups get called while you’re down. Relay entry is not produced in those instances, and you get slashed your minimum stake 3 times.

Now, as Matt likes to point out… say you have your eggs (KEEP) spread across many baskets (operators/running clients) at an amount of minimum stake (90,000 KEEP) for each client. Now you’re in a situation where the keeps or signing groups you're participating in are spread across 5 unique clients on the network. This should reduce the probability that you are penalized for being down because of the keep or signing group distribution across several clients.

If there’s a data center outage, all your clients are down and you’re still in trouble in the spirit of the first scenario in this post.

There’s also a component of operational capabilities playing a role in how many clients you can/should run. If you’re running keep clients as part of a pet project and you’re a 1 person show with 1M KEEP, it may be more trouble than it’s worth running 10 keep clients at minimum stake. Maybe you run a couple clients at a time with minimum stake and top them up if something goes sideways and you get slashed.

## tBTC Slashing Vectors

In tBTC, slashing only occurs in the case of malicious behavior, ie. if the signers walk away with the Bitcoin. There are penalties however for non-availability.

There are timeouts around requested operations like redemption that can lead to bond seizure and liquidation. In the Keep system you lose 1 minimum KEEP stake if enough of your signing group is unavailable to produce an entry when selected. In tBTC, you lose your whole ETH bond if you're not available when needed. 

The risks of staking ETH on tBTC are mostly FX related risks. Compared to staking with the random beacon client, tBTC’s t-ECDSA has some additional off-chain things that require management. The primary scenario here is preventing a fall into liquidation if the ETH price takes a massive dip comparable to BTC. If ETH to BTC takes a big drop, you need to be prepared to redeem your deposit and participate in any auctions to avoid slippage We have some internal scripts to do that, and are working on publishing maintainer proofs of concept after mainnet. This will be  solved before the June 8th stakedrop, but a few bigger ETH signers are working with us in the meantime to make sure scripts are in a good spot here. 

“Slashing” of an ETH bond is called liquidation in the tBTC system, and there are many warnings and opportunities to prevent liquidation long before the auction begins. 

### Courtesy Calls & Liquidation

tBTC liquidation in such a case happens as a slow long falling price auction. Liquidation is triggered early and intentionally as a way to allow you to exit the auction without much slippage. So the biggest risk in tBTC liquidation would be losing a few basis points on the slippage. (You can also write a contract to automate this auction piece for you.) 

When there’s a liquidation ‘courtesy call', once your bond becomes undercollateralized at 125%, the system isn’t designed for stakers to come and top off their bonds with more ETH. Instead, any one of the signers in a set has the ability to and pull out and close the deposit. You’ll want to set maintainer scripts to get alerts when BTC/ETH collateralization hits this ‘courtesy call’, please reach out to the Keep team for support if needed. This liquidation/auction process will be all automated by the June 8th 2020 stakedrop. 

Slashing for downtime in the tBTC system is quite lenient and effectively inconsequential for an advanced staker. We’ve built the down-time slashing parameters in human time, and it’s really more accurately described as availability parameters. If you happen to go down and not be available at the exact moment you get a ping for a signature request, you have between 6 and 24 hours to complete that request before you’re slashed.  

Other risks? If the key material gets lost you get as extremely slashed as possible. Keeping Bitcoin safe from malicious behavior is the function of the system, so that’s why it’s the only truly punitive slashing parameter.

### Closing out a tBTC Deposit

All deposit closing flows result in 1 TBTC going to the TDT owner. All minted TBTC comes from TDTs that are owned by the vending machine contract. The vending machine contract burns all TBTC it receives. So in redemption, you pay to redeem a deposit. The cost is 1 TBTC + signer fees (it's more complicated than that, but simplifies to this). That 1 TBTC goes to the TDT holder (unless the TDT holder is redeeming). 

Similarly, in liquidation, bonds are used to buy 1 TBTC. That TBTC is sent to the TDT holder. If the TDT is backing TBTC, that TDT is owned by the vending machine (by definition---this is the only way to mint TBTC), and the vending machine will burn the TBTC sent for redemption or liquidation, thus balancing the supply peg.