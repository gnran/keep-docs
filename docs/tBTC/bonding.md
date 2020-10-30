--- 
order: 3
---

# Bonding

Because signers are able to collude to censor withdrawals or abscond with funds, a bond is required per deposit from each backing signer.

Unlike the staked work tokens used to choose signers, signer bonds need to be a liquid asset with a large market cap. This restriction increases the cost of market-based attacks, where the price of bonded collateral can be pushed up or down by market manipulation.

Bonded signers offer depositors recourse in the case of colluding signers interfering with operation. A signing group that doesn’t provide a requested redemption signature within a timeout (the redemption signature timeout) forfeits their bond. Similarly, a signing group that provably signs unauthorized material forfeits their bond, and additionally risks their work token stake.

## Acceptable collateral

Two tokens present themselves as obvious choices for signing bond collateral—TBTC and the underlying work token. During the bootstrap phase of the network, neither is an appropriate candidate due to low liquidity.

Since signer bonds need to be denominated in a widely traded asset to avoid market manipulation, the next most obvious pick for bonding is the host chain’s native token. For tBTC v1, that means ETH. As the ecosystem matures, other bond collateral options might become feasible at the expense of a more complex implementation.

## Measuring security

Clearly, security concerns require signing bonds that are proportional to the lot size of a deposit. To maintain a negative expected value from signers colluding, the amount forfeited by misbehaving signers must be strictly greater than the amount they have to gain. Assuming a lot size of 1 BTC, constant exchange rate between BTC and the bonded asset, and a M-of-N group of signers backing a deposit, the minimum collateral for each signer is (1 BTC)/M, denominated in the asset being bonded (ETH in the base case).

::: warning
Consider a 1 BTC deposit backed by a 3-of-5 group of signers. In the worst case, 3 of the signers can be malicious and try to steal the deposit, which would net them each 1/3 BTC. As a result, all 5 signers must bond 0.33 BTC each, denominated in ETH.
:::

::: tip
For tBTC v1, attributability limitations in the signing protocol mean the signer group is 3-of-3. As a result, the required per-signer bond will be 50% of the lot size per signer, for a total 150% bond (see the following section on [ETH price drop relative to BTC](/tBTC/bonding.md#eth-price-drop-relative-to-btc)). With attributability in later versions, bonds will be able to be decreased by increasing both signing group size and threshold.
:::

## Pricing currency fluctuations

The above assumes a constant exchange rate between BTC and ETH, but in truth the two currencies fluctuate relative to each other, sometimes wildly.

### ETH price drop relative to BTC

If the value of ETH drops precipitously relative to BTC, then the dollar value of the ETH bonded by the signers can be less than the dollar value of the BTC deposit they have backed, meaning signers have positive expected value if they try to steal the BTC in the deposit.

In order to avoid that, we require that the bonds are overcollateralized. For each ETH signers collateralize, they must put up an additional 50%, for a total of 150% collateralization rate.

::: tip
**Without overcollateralization**: Let 1 BTC be worth $10000, and 1 ETH be worth $200. Signers have to put up 50 ETH to back a deposit. Due to market conditions, ETH drops 25% to $150, while BTC maintains its value. The 50 ETH is worth $7500, meaning the signers can make a $2500 profit by stealing the deposit.
:::

::: tip
**With overcollateralization**: Let 1 BTC be worth $10,000, and 1 ETH be worth $200. Signers have to put up 75 ETH (150% of 50) to back a deposit. Due to market conditions, ETH drops 25% to $150, while BTC maintains its value. The 75 ETH is worth $11250, which is above the dollar value of BTC meaning the signers should maintain honest behavior since they have more to lose.
:::

In general, total overcollateralization of 150% (`3/2 * 100%`) keeps signer incentives aligned with the well-being of the system up to a 33% drop ((`1 - 2/3) * 100%`) in price of the bonded asset against the deposit’s asset. Increasing this percentage can increase the robustness of the system, at the expense of opportunity cost to the signers which should be compensated via fees.

If the value of ETH crosses a security threshold, open deposits will enter [pre-liquidation](/tBTC/bonding.md#pre-liquidation-a-courtesy-call), followed by [liquidation](/tBTC/bonding.md#liquidation).

### BTC price drop relative to ETH

Since [signer fees](/tBTC/signer-fees.md) are denominated per BTC in custody (with overcollateralization factored in), a BTC value drop against the bonded asset translates in lower fees for signers. Note that this does not create any issue for TBTC reserves, but it makes the system less attractive to signers earning fees on their assets.

Signers SHOULD buy TBTC from the markets in anticipation of such overly overcollateralized deposits and they SHOULD use it to redeem these positions where possible, thus reclaiming their ETH liquidity which can be used to back other deposits. An alternative would be to provide signers with the ability to safely rebalance their bonds back to 150%; however, that introduces implementation complexities and as a result is not the preferred solution for the initial deployment of the mechanism.

::: tip
Let 1 BTC be worth $10,000, and 1 ETH be worth $200. Signers have to put up 75 ETH to back a 1 BTC deposit. Signers are expected to make a signer fee of 5 basis points on a $10,000 deposit for $15,000 of collateral (150% of $10,000), and in return they give up the possibility of putting 75 ETH to different use. Assume that alternative use would return 5 basis points, denominated in ETH. Due to market conditions, ETH soars 25% to $250, while BTC maintains its value. The signers still get 5 basis points in TBTC, however the 5 basis points they could have been earning in ETH is now more valuable. If the deposit is unlocked and a signer has reasonable expectation that the overcollateralization will persist, a signer should redeem the deposit by paying 1.0005 TBTC, reclaiming 1 BTC and unlocking the 75 ETH which was locked by all signers. All significantly overcollateralized signers now have liquid ETH which they can use to back another deposit to mint new TBTC, now with a lower collateral requirement in ETH, or to put to different uses.
:::

## A resilient price feed

Unlike popular synthetic stablecoin schemes, the tBTC system design makes no effort to stabilize the value of TBTC relative to BTC: TBTC will be priced by the market. Instead, the goal is to ensure that the TBTC supply is strictly less than its backing BTC reserves.

For this reason, the only price relationship the system needs to understand is between the signing bond collateral and BTC.

For tBTC v1, that means the price of ETH relative to BTC. Due to only needing prices for a single pair of assets, tBTC will initially use a simple [price feed](/tBTC/price-feed.md).

## Undercollateralization

### Pre-liquidation: a courtesy call

At the first threshold of 125%, a deposit enters pre-liquidation, also referred to as “courtesy call”. In this state, a deposit can be redeemed by anyone, even if the deposit is locked (see the sections on [redemption](/tBTC/redemption.md) and [minting](/tBTC/minting.md) for more). Pre-liquidation indicates that the signers should close the deposit or face forced liquidation after a pre-liquidation period. If the deposit is not closed within 6 hours, or if the deposit collateral falls below 110% collateralization, liquidation will follow. This gives each signer an incentive to close the position before it becomes severely undercollateralized. Alternatively, if the ETHBTC ratio recovers such that the deposit becomes at least 125% collateralized during the 6 hours, the deposit is safe and is moved away from the pre-liquidation state.

In future versions of the system, more complex pre-liquidation mechanisms could be introduced. For the initial version it seems prudent to choose a simple mechanism with large penalties for ongoing undercollateralization. In addition, by incentivizing redemption of undercollateralized or significantly overcollateralized positions, signers are protected from being long ETH for long periods of time.

### Liquidation

Forced liquidation should be rare, as rational signers will redeem deposits before liquidation becomes necessary. However, the possibility of extreme punishment via liquidation is necessary to prevent dishonest behavior from signers. Liquidation may occur because because signers [didn’t produce a valid signature in response to a redemption request](/tBTC/handling-failure.md#aborts-liveness), because the value of the signing bond dropped below the liquidation threshold, because they did not respond to the courtesy call, or because the signers [produced a fraudulent signature](/tBTC/handling-failure.md#fraud).

::: tip
Fraudulent signatures are signatures not explicitly authorized by the tBTC system. The system only authorizes redemption signatures when a redemption is in progress.
:::

The primary goal of the liquidation process is to make the deposit owner whole in the face of incorrect signer behavior or external dynamics that compromise deposit safety. The secondary goal is to punish signers maximally for incorrect behavior, when such behavior can be proven.

::: tip
Note that, for deposits that have been used to back TBTC via the vending machine, the deposit owner is the vending machine itself; by making the deposit owner whole in this case, the system ensures the TBTC supply is in line with BTC custodied by TBTC-backing deposits.
:::

The most valuable asset held by the system is the signer bond. Therefore, the liquidation process seizes the signer bond and attempts to use the bonded value to purchase TBTC and compensate the deposit owner. Any signer bond left over after the deposit owner is compensated is distributed to the account responsible for reporting the misbehavior (for fraud) or between the signers and the account that triggered liquidation (for collateralization issues).

To compensate the deposit owner, the contract starts a falling-price auction with the seized signer bond. It offers 66.6667% of the signer bond in exchange for the outstanding TBTC amount. This amount assumes that the deposit is properly collateralized at 150%, which guards against price feed malfunctions that could cause a properly-collateralized deposit to otherwise be taken for an incorrectly high ETH value. The amount of bond on sale increases over time until someone chooses to purchase it, or the auction reaches 100% of the bond. The auction will remain open until a buyer is found.

TBTC received during this process is sent to the deposit owner; if the owner is the vending machine, the vending machine MUST burn the TBTC to maintain the supply peg. If any bond value is left after liquidation, one of two things occurs:

* In case of liquidation due to **undercollateralization or abort**, the remaining bond value is split 50-50 between the account which triggered the liquidation and the signers.

* In case of liquidation due to **fraud**, the remaining bond value goes to the account which triggered the liquidation by proving fraud.

At the end of liquidation, unresponsive or misbehaving signers have control of the deposited BTC. What those signers do with the BTC outside the tBTC system is for them to decide—it might be split up, stolen by a signing majority, or lost permanently.

::: tip
If a Fee Rebate Token (FRT) has been given out to mint TBTC for a deposit that is liquidated (see [the Minting section](/tBTC/minting.md)), the FRT owner is not refunded during liquidation. The fees that were escrowed in exchange for the FRT are instead used to compensate the signers, and the FRT is no longer eligible for compensation.
:::

::: warning
1. Signers guard a deposit of 1 BTC, backed by 75 ETH at 0.02 BTC/ETH (1.5 BTC in ETH, 150% collateralization ratio).

2. ETH price drops to 0.01333 BTC/ETH. 75 ETH now only collateralizes 100% of the Deposit (1 BTC / 75 ETH)

3. Liquidation is triggered and the 75 ETH is seized to buy back TBTC.

4. The deposit must use the 75 ETH to purchase 1 TBTC. In an attempt to get a discount, it auctions 66.6667% of its ETH reserves.

5. An arbitrageur burns 1 TBTC at 90% of the auction and obtains 67.5 ETH. The liquidation of the deposit is now over. The arbitrageur might do this because the price has recovered during the auction, because they intend to use the ETH to arbitrarge against a higher price later or with a different asset, or because they are arbitraging against an earlier, advantageous TBTC price at which they acquired the requisite TBTC.

6. Half of the remaining 7.5 ETH is distributed to the signers (if they had committed fraud this would be 0), and the remainder is given to the account which started the liquidation process on the Ethereum smart contract. At this point, the deposit is marked as closed. Note that the FRT holder is not refunded during liquidation..

7. Optionally, the N signers coordinate and agree on how they will distribute the 1 BTC deposit.
:::