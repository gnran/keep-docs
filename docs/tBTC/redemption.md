--- 
order: 9
---

# Redemption

## Overview

Deposits represent real Bitcoin unspent transaction outputs ("UTXOs") and are redeemable for the BTC held there. The tBTC redemption system aims to provide access to those BTC via a publicly verifiable process.

So long as a deposit is maintained in good standing, the holder of the [non-fungible tBTC Deposit Token](/tBTC/minting.md) may [request redemption](/tBTC/redemption.md#redemption-requests), relinquishing their NFT and paying any outstanding signer fees associated with the deposit.

At this point, the redemption process may not be cancelled.

Once redemption has been requested, the signers must produce a valid Bitcoin signature sending the underlying BTC to the requested address. After a signature has been published, any actor may build and submit a redemption transaction to the Bitcoin blockchain using that signature.

### Deposit Terms and Redemption

As noted in the section on [deposit terms](/tBTC/deposits.md#terms), a deposit has a fixed term. After that term expires, the deposit becomes unlocked from the deposit owner, so that it can be redeemed by any account (including, notably, the deposit owner account). At this point, redemption costs exactly the lot size of the deposit, with no signer fee due. If the deposit has had the signer fee [escrowed during TBTC minting](/tBTC/minting.md#the-tbtc-vending-machine), the signer fee is paid from escrow and the deposit owner is sent the full lot size in TBTC. If the deposit has no escrowed fee, the owner is sent the TBTC used to redeem, less the signer fee, which is distributed to the signers.

::: tip
For the deposit owner, at term, redemption is free if there are escrowed fees, or costs the signer fee if there are not. This is subtly different from pre-term redemption, where the deposit owner must pay the signer fee _even if there are escrowed fees_. The additional difference is sent to the Fee Rebate Token holder, who is rebated the signer fee during pre-term redemptions, but not during at-term redemptions.
:::

## Redemption Requests

A redemption request can be submitted in a few cases:

* If the deposit is in good standing (has not already been redeemed, has not been accused of [fraud](/tBTC/handling-failure.md#fraud), and has not entered [signer liquidation](/tBTC/bonding.md#liquidation)), pre-term, and the requester holds the corresponding tBTC Deposit Token.

* If the deposit is in good standing and is at or past [term](/tBTC/redemption.md#deposit-terms-and-redemption), irrespective of whether the requester holds the corresponding tBTC Deopsit Token.

* If the deposit has entered [courtesy call](/tBTC/bonding.md#pre-liquidation-a-courtesy-call), an undercollateralization state designed to allow closing deposits before they become dangerously undercollateralized, irrespective of whether the requester holds the corresponding tBTC Deposit Token.

To _request redemption_, a requester makes a redemption request transaction to the smart contract on the host chain. The redemption request includes the following:

1. A Bitcoin transaction fee amount (must be >=2000 satoshi (~20 satoshi/vbyte)). 

2. A standard output script for BTC delivery (one of p2pkh, p2sh, p2wpkh, or p2wsh), prefixed by the length of the script. For security and privacy, this SHOULD be controlled by a new keypair.

3. The deposit’s [Repayment Amount](/tBTC/redemption.md#repayment-amount) in TBTC.

Upon receipt of the _redemption request_, the smart contract escrows the repayment amount (which includes the signer fee, if due), records the receipt of the request, and notifies the signers that a signature is required.

Once notified of the redemption request, the signers must wait for confirmation on the host chain. If they do not wait for confirmation, the redemption request may be dropped from the chain via a reorg, in which case any signature they produced could be used to both redeem the BTC and submit a signer fraud proof. A fraud proof created this way would appear valid to the host chain smart contract because it no longer has a record of the redemption request.

## Repayment Amount

Conceptually, the repayment amount is the deposit lot size plus the signer fee of 0.005 TBTC per 1 TBTC (50 basis points). This ensures that the signers are paid upon completing redemption, that the owner can be compensated for the redeemed deposit (in redemptions by parties other than the owner), and that the Fee Rebate Token holder can receive their fee rebase (in pre-term redemptions).

After all the math shakes out, the repayment amount can vary depending on the redeeming party, the TDT holder, the FRT holder, and the deposit’s term state. The [Deposit payment flow](https://docs.keep.network/tbtc/#deposit-payment-flow) table lists the various combinations that are possible, and the corresponding repayment amounts owed by the redeemer, assuming three possible parties, A, B, and C. It also lists out the relevant disbursal upon redemption proof.

## Redemption Transaction Format

A redemption transaction has a perfectly canonical format which is embedded in the smart contracts running on the tBTC host chain. This prevents a number of complex attacks on the tBTC system, as well as simplifying contract logic. The requester may specify only 2 aspects of the transaction: its fee and its destination. All other deposit-specific information (e.g. the outpoint and the UTXO value) is known to the deposit contract in advance.

The _redemption transaction_ has 1 input (the deposit UTXO) and 1 output (the redemption output). It does not have change outputs, or additional inputs, as none are needed. It simply transfers the underlying BTC to the sole custody of the requester. Its timelock and sequence numbers are set to 0 and its version is set to 1. Full documentation of the format and the construction of its sighash can be found [here](https://docs.keep.network/tbtc/#sighash).

Because the format is simple and canonical, any observer may use publicly available information to build it. Once a signature has been published, it is simple to add a witness to the transaction and broadcast it. So while signers have a strong incentive to broadcast the transaction as early as possible, anyone may do so if the signers do not.

## Redemption proof

A _redemption_ proof is an [SPV proof](https://docs.keep.network/tbtc/#spv) that a _redemption transaction_ was confirmed by the Bitcoin blockchain. Once a request to redeem is confirmed, the deposit smart contract expects a _redemption proof_ within 6 hours. To validate a _redemption proof_, the smart contract performs normal SPV proof verification, and additionally verifies that the recipient matches the requester’s specified output script, and the value is greater than or equal `UTXO Value - highest allowed fee` (see [Allowing for Bitcoin fee adjustment](/tBTC/redemption.md#allowing-for-bitcoin-fee-adjustment) for more details).

Once redemption proof is confirmed, the signing fee is disbursed, the FRT holder receives their escrowed funds (if the deposit was redeemed pre-term), and the TDT holder receives the remainder of the repayment amount. As with the repayment amount, the amount each of the parties receives in case of a successful redemption varies depending on the TDT holder, FRT holder, redeemer, and deposit state. The [Deposit payment flow](https://docs.keep.network/tbtc/#deposit-payment-flow) table lists the various combinations that are possible, and the corresponding repayment amounts owed by the redeemer, assuming three possible parties, A, B, and C.

## Validating a signature

After the redemption request is sufficiently confirmed on the host chain, the signers MUST [produce a signature](/tBTC/signing.md) on the redemption transaction signature hash as requested. They have 3 hours in which to produce either a signature, or a [redemption proof](/tBTC/redemption.md#redemption-proof) before being subject to penalties. Upon submission of a valid signature a redemption proof is still required, but the deadline is extended to 6 hours in total.

As discussed [earlier](/tBTC/redemption.md#redemption-transaction-format), the host chain smart contract managing the deposit has all information necessary to calculate the _redemption transaction_ signature hash. This includes the signers' threshold public key. Using the public key, the signature hash, and the redemption request the smart contract can know both the cryptographic validity of the signature and that a signature on that digest was requested as part of a redemption process.

## Allowing for Bitcoin fee adjustment

Because Bitcoin fees are determined by network congestion and other highly unpredictable factors, the requester may not select an appropriate fee. Signers are punished if no redemption proof is submitted or if they sign without explicit authorization. This could create a no-win scenario for signers, in which they could not get the requester’s transaction confirmed in the current fee climate and would eventually be punished despite honest behavior. Unfortunately, we cannot rely on the requester to stay online or update fee rates honestly. Ergo, the system requires some mechanism to fairly adjust fee rates without the requester’s explicit consent.

The simplest scheme is to allow signers to increase the fee without requester consent after a timeout. As such, we allow signers to increase fees linearly every 4 hours. Which is to say, if the fee is `f`, after 4 hours the signers may notify the deposit contract of a fee increase to `2f` and if the transaction remains unconfirmed after 8 hours, the signers may notify the contract of a fee increase to `3f`. This ensures that a redemption transaction will eventually be confirmed on the Bitcoin blockchain near the minimal fee rate given current network congestion. To prevent the signers from repeatedly requesting fee increases, they must actually provide a signature at each fee level. This ensures that each feerate is actually attempted before an increase is requested.