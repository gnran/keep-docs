--- 
order: 5
---

# Minting

## Overview

The process of minting TBTC is distinct from the process of depositing Bitcoin.

By splitting minting into two phases—a zero-confirmation deposit creation yielding a non-fungible token, and an additional proof enabling trade-in of the non-fungible token for fungible TBTC—we can balance strong security against reorgs with a better user experience and more flexible use cases.

A simplified view of the deposit creation, minting, and redemption flows is in this diagram:

![basic-deposit-lifecycle](/basic-deposit-lifecycle.svg)

Note that the above diagram skips a few additional possibilities explained below in this spec, including how pre- vs at-term deposits behave differently, liquidation-related changes, as well as how a depositor might keep their TDT without minting TBTC.

## Minting the non-fungible tBTC Deposit Token

After a deposit has been requested and a signing group formed, a depositor immediately receives a non-fungible token unique to the deposit called the `tBTC Deposit Token`, or `TDT`, granting them ownership of the deposit. This ownership comes with the exclusive right to redeem the deposit from the moment it is funded until the deposit term is reached, unless there is an undecollateralization issue that transitions the deposit into its "courtesy call" state.

Once the deposit is fully `qualified` by submitting sufficient proof of the funding Bitcoin transaction, the holder of the TDT can request redemption, and, after paying any outstanding signing fees, the holder is guaranteed the same UTXO backing the deposit. The holder of the TDT is also guaranteed compensation in TBTC via the signing group’s bonded collateral in case of fraud or collateralization issues (see [liquidation](/tBTC/bonding.md#liquidation)), and compensation in TBTC (minus signer fees) if the deposit is redeemed by another account after it reaches term (see the section on [at-term redemption](/tBTC/redemption.md#deposit-terms-and-redemption)) or if the deposit is courtesy called.

### Implications

There are a few non-obvious implications to a UTXO-specific non-fungible token.

1. Any attacks against the deposit backing a TDT should only impact the token holder, rather than the entire supply-pegged currency. Attacks against a particular deposit might include Bitcoin reorgs / double spends, DoS attacks, malicious signers, or deposit undercollateralization.

2. Any recipient of a TDT will need to evaluate the risk of the token themselves. Different tokens might represent different likelihoods of reorgs. Deposit owners are free to transfer their TDT, trading it or perhaps using it as collateral elsewhere, caveat emptor.

3. TDTs are an ideal target for secret fixed-size "notes" or other financial privacy improvements on the host chain.

4. This construction allows delegation of accumulated work SPV proofs to third parties. With this functionality, depositors wouldn’t necessarily need to monitor the Bitcoin blockchain.

## Minting fungible TBTC

Once a deposit has accumulated enough work, it is eligible to be traded for fungible TBTC. The contract managing this is called the "vending machine".

### The TBTC vending machine

The TBTC vending machine is a contract on the host chain that is responsible for minting TBTC.

Any TDT representing a qualified deposit can be exchanged. Qualified deposits are determined by the accumulated work of their proofs. In tBTC v1, deposits are qualified by a fixed work requirement proven via an SPV proof, set at 6 blocks of accumulated work.

A TDT representing a qualified deposit is also eligible for minting fungible TBTC. Minting TBTC is optional; depositors can stick with their TDTs, which will be valid for the lifetime of a maintained deposit. Note that if a holder of the TDT wants to make a transaction with a different value than the lot size, they must mint TBTC, since the tBTC Deposit Token itself is non fungible.

The holder of a qualified TDT may exchange that TDT for newly minted TBTC equivalent to the deposit’s lot size (for example, 1 TBTC), less the requisite signing fee (for example, 0.005 TBTC). To reflect the reduced guarantee of the TDT holder’s interest in redeeming the specific deposit, the signing fee is sent to the deposit to be held in escrow at the time of TBTC minting.

By exchanging and escrowing, the TDT holder waives their right to exclusive redemption. As such, they also receive a non-fungible `Fee Rebate Token`, or FRT. This token grants the right to a fee rebate if and when the pre-term deposit is redeemed by another party. In the rare case that a TDT is used to mint TBTC, retrieved from the vending machine, and resubmitted to the vending machine prior to its term expiring, signing fees are only escrowed the first time a TDT is traded to the vending machine. Since signing fees are not escrowed the second time the TDT is traded to the vending machine, no FRT is issued at that time either; instead, the FRT issued the first time the TDT was traded to the vending machine remains valid.

### Trading TBTC for tBTC Deposit Tokens

Any TDT held by the vending machine can be obtained for its lot size in TBTC (in the above instance, the deposit could be obtained for 1 TBTC). The vending machine MUST burn any TBTC it receives, in any case where it can receive TBTC.

This mechanic has the effect of allowing "unlocked" deposits to be "locked" in advance for later redemption. In fact, TBTC minting is simply a special case of locking: a TDT used to mint TBTC is locked to the vending machine, which provides a straightforward way to transfer it to another account for the cost of the lot size in TBTC.

Burning all received TBTC allows for maintaining the supply peg not only when deposit ownership is transferred away from the vending machine, but also when the deposits that are still owned by the vending machine are liquidated or [redeemed at term](/tBTC/redemption.md#deposit-terms-and-redemption), since in these cases deposit owner compensation goes to the vending machine, which burns that compensation immediately.