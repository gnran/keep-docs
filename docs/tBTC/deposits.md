--- 
order: 2
---

# Deposits

## Overview

The tBTC system provides a mechanism for creating a token, TBTC, on a non-Bitcoin _host chain_ (in tBTC v1, the first host chain is Ethereum), that is 1-to-1 backed by bitcoin. Parties interested in minting TBTC [request](/tBTC/deposits.md#deposit-request) that the system provide them with a Bitcoin wallet address. The system selects a set of [signers](/tBTC/deposits.md#signer-selection), which are tasked with generating a private/public keypair and furnishing it to the system. The interested party then becomes a _depositor_ by sending bitcoin to the wallet (the amount of required bitcoin is discussed separately in the section on [lots](/tBTC/deposits.md#lots)). The deposit cannot be maintained for free, as deposits require signers to put up an ETH bond to guarantee good behavior (see the section on [deposit economics](/tBTC/deposits.md#deposit-economics)). To cover these costs, the deposit is paid for by signing fees that cover a set _term_ of deposit redemption exclusivity for the deposit owner, discussed separately in the section on the [deposit term](/tBTC/deposits.md#terms).

Each of these steps is shown in the diagram below and discussed in subsequent sections.

![initiate-deposit](/initiate-deposit.svg)

## Deposit request

The starting point for acquiring TBTC is generating a _deposit request_. This request is a transaction to a smart contract on tBTC’s host chain, and signals that the sender requires a signing group backed wallet, mediated by a _deposit_. Because signing groups have an inherent creation cost, deposit requests charge a small payment in the host chain’s native token to cover the creation of the signing group. This payment can be refunded if the signing group fails to generate and publish a public key after a timeout.

### Signer selection

Once the deposit request is received, the signing group is created by randomly selecting a set of signers to back a Bitcoin wallet. This is a multi-part process described in the diagram below.

::: tip
The tBTC system participates in fairly limited fashion here, mostly coordinating work done in a secondary system responsible for managing the secure random number generation, private data storage, and multiparty computation needed to provide the system’s relevant security properties. In this diagram, that role is fulfilled by the Keep network, described in its [whitepaper](https://backend.keep.network/whitepaper). The Keep Random Beacon is described in more detail in the [Keep Random Beacon yellowpaper](https://docs.keep.network/random-beacon/).
:::

![signing-group-creation](/signing-group-creation.svg)


When a request comes in to create a signing group, the tBTC system requests a random seed from a secure decentralized random beacon. The resulting random seed is used to randomly select signing group members from the eligible pool of signers. Finally, these signers coordinate a distributed key generation protocol that results in a public ECDSA key for the group, which is used to produce a wallet address that is then published to the host chain. This completes the signer selection phase.

::: tip
A system is only as decentralized as its most centralized component, so the beacon must be decentralized to achieve proper decentralization of the tBTC system as a whole; however, note that tBTC is designed to be resilient even if the same entity controls all signers in a signing group.
:::

#### Signer bonding

Before the selected members of a signing group can perform distributed key generation, they MUST put up a bond (the _signer bond_) in the native token of the host chain. This bond is used in a few cases:

* To liquidate deposits in case they are in danger of undercollateralization.

* To punish a signing group if it signs an unauthorized piece of data is once distributed key generation is complete.

* To punish a signing group that fails to produce a signature for the system when requested.

* To ensure a depositor is refunded if the signing group fails to form.

In all but the last case, the seized bond is auctioned for TBTC to compensate the deposit owner the amount of their deposit.

The signers must have enough bond available to back a deposit in order to be chosen for a signing group, and the bond SHOULD be acquired by the deposit in the same transaction that chooses the signers.

Bonding is described in more detail in [its own section](/tBTC/bonding.md).

#### Distributed key generation

Some small notes about the distributed key generation a signing group undergoes. The distributed key generation protocol should result in three properties:

1. The signing group as a whole should have an _ECDSA public key_, which will be shared on the host chain and will correspond to the Bitcoin wallet owned by that signing group.

2. Each member of the signing group should have a _threshold ECDSA secret key share_, which can be used to create a _threshold ECDSA signature share_ for any transactions involving the signing group’s wallet.

3. Each member of the signing group should be able to combine a threshold number of signature shares from itself and other members of the group to produce a signed version of a given transaction to be performed on behalf of the signing group.

::: tip
Threshold signatures allow a group of N signers to generate a public key and a set of private key shares, with which a subset M of the signers can create signatures on behalf of the group. For tBTC v1, signing groups are 3-of-3, meaning they are groups of 3 signers that require all 3 signers to collaborate to create signatures on behalf of the group.
:::

## Making a deposit

Once the tBTC system has a wallet address available for a given deposit request, the _depositor_ can broadcast a Bitcoin transaction sending BTC from a wallet they control to the wallet address for the signing group. Once the transaction has been sufficiently confirmed by the Bitcoin chain, the depositor has to issue a transaction to the host chain proving that the _deposit_ has been funded.

::: tip
For tBTC v1, sufficient confirmations means 6 confirmations. Confirmation numbers that are variable, particularly in response to volume of deposits that are opened, are part of the discussion for tBTC v2.
:::

The only link between the Bitcoin chain and the host chain is the tBTC system, which runs as a set of smart contracts on the host chain. As such, the Bitcoin transaction issued by the depositor has to be proven to the tBTC system before the tBTC system allows the depositor to behave as if they have successfully deposited their BTC into the signer wallet. If the signing group fails to provide a public key within a given timeout window (the _signing group formation timeout_), the _depositor_ can notify the deposit that this has occurred to receive their deposit payment back, taken out of the bonds that the signers put up as part of the signing group selection process. If a deposit proof is not received within a given timeout window (the _deposit funding timeout_), the signing group can notify the deposit that this has occurred to disband the group and return the members' bonds.

### Light Relays

To prove a deposit, the depositor submits proof that the transaction was included in a valid Bitcoin block with sufficient subsequent accumulated work. The proof is verified by a simple payment verification (SPV) smart contract on the host chain. A more complete overview of cross-chain SPV systems and their security properties is included in the [SPV appendix](https://docs.keep.network/tbtc/#spv).

Light relays are a new variant of on-chain SPV developed for tBTC. They seek to take advantage of the compact and efficient stateless SPV proofs while relaying enough information to provide each stateless proof with some additional recency guarantee. We achieve this by taking advantage of the difficulty adjustment feature of Bitcoin’s protocol. Bitcoin adjusts difficulty every 2016 blocks, based on timestamps of the first and last block in that period (due to an off-by-one error in the Satoshi client, one interblock period is excluded from the difficulty calculation). The change is deterministic and within some tolerance may be set by the miner of the last block.

A light relay does not store every block header. Instead it stores only a slice of headers around the difficulty adjustment event and records the difficulty for the current 2016-block epoch. This slice is validated by its objective proof of work, as well as verifying that its first headers' difficulty matches the current epoch difficulty, that the change occurs at an expected index in the slice, and that the new difficulty conforms to Bitcoin’s adjustment algorithm. In other words, our light relay tracks only Bitcoin’s current difficulty, and no other information about its state.

Knowing the current difficulty gives basic stateless SPV proofs additional, stronger recency assurances. Any newly-generated stateless SPV must include that difficulty in its header chain, and that difficulty is not known to any party in advance. Miners with an n-fraction (as usual, `n >= 2` due to the 51% assumption) of the hashrate have a `1/n` chance of being allowed to set the difficulty, and thus have a `1/n` chance of being able to successfully predict it 2 weeks in advance (by generating fake proofs, and then setting the difficulty such that they appear valid). Generalized, this is a `1/nt` chance of successfully predicting difficulty `t` adjustment periods (`2t` weeks) in advance. Therefore the use of the light relay provides stronger security properties to stateless SPV proofs when used as an additional validation step, as even entities with significant mining resources have a greatly reduced chance of creating fake proofs.

## Lots

When creating a deposit, the deposit’s _lot size_ must be specified. The tBTC system supports a governable set of available lot sizes (see the section on [Governance](/tBTC/governance.md) for more), guaranteeing only that at least 1 BTC lot sizes will be available. v1 will launch with six available lot sizes: 0.002 BTC, 0.01 BTC, 0.1 BTC, 0.2 BTC, 0.5 BTC, and 1 BTC. Deposit requesters may only create deposits in one of those lot sizes, and the lot sizes only allow minting their corresponding amount of TBTC. If a depositor wants to deposit more than the maximum lot size the system supports, they will need to create multiple deposit requests and fund multiple deposits.

For simplicity’s sake, the rest of this spec is written with the assumption that deposits of 1 BTC are being opened; however, anything dependent on lot size (such as signing fees) will be defined as a value proportional to the lot size.

Limited lot sizes with a max cap allow each deposit to be backed by a different signing group, both simplifying the bonding of signing groups and improving the resilience of the system to signing group failure, malicious or not.

## Mistakes making a deposit

The system is designed to function with a few predefined lot sizes for all deposits, which are given as system parameter. **Depositors should send the exact lot amount of BTC in the funding transaction, or expect loss of funds**. Since it is not possible for the system to force users into sending any specific amount, ideally the the system would gracefully handle overpayment and underpayment. The primary impact of overpayment and underpayment is on the specific deposit’s collateralization ratio. The system treats overpayment and underpayment as faulty depositor behavior, and passes on the associated costs to the depositor.

### Overpayment

Allowing overpayment on a given deposit would result in under-bonded signers. When overfunding occurs, the system accepts the funding proof, but mints TBTC according to the regular lot size.

In an efficient market, a deposit that has been overfunded in this way should be immediately redeemed by the depositor to regain the missing value. If the depositor instead chooses to mint TBTC off of it and thus unlock it (see the section on [minting](/tBTC/minting.md)), the deposit should be immediately redeemed by another actor, as the redeemer should expect to take the overfunded amount as arbitrage.

::: tip
A user providing a funding proof for 1.6 BTC for a deposit with lot size of 1 BTC mints only 1.0 TBTC. Any user that burns 1.0 TBTC is then able to claim the 1.6 BTC deposit and redeem its contained UTXO, making a profit of roughly 0.6 BTC.
:::

### Underpayment

Allowing underpayment on a given deposit, in contrast, would result in over-bonded signers. To prevent this, the system will not accept funding proofs of less than the specific deposit’s lot size. This implies that the a user that sends less than the deposit lot size in the funding transaction does not receive any TBTC, and forfeits the BTC locked in the funding transactions to the signing group. The signing group can, after the _deposit funding timeout_, notify the deposit that it has not been funded, get its funds back, and the signing group can then unlock and evenly split the funds in the transaction after the deposit is resolved on-chain.

### Multiple UTXOs

A faulty depositor may also send more than one UTXO to the signer group address, whether due to human or software error. Unfortunately, returning the funds to the depositor would impose significant on-chain complexity and gas fees, as each UTXO would need to be proven via SPV, and a signature on it explicitly authorized. In addition, we would have to develop mechanisms to economically compel signers to sign each transaction despite the fact that the total value of the UTXOs is not known. As such, the system accepts only the first UTXO greater than the deposit lot size. All other BTC sent to the signing group is forfeit. Therefore it is imperative that depositors send only a single UTXO of an appropriate value.

::: warning
As a particularly damaging example, consider a naive human depositor. If they mistakenly send half the lot size in one transaction and half in another, both UTXOs would be forfeit. **This represents a serious pitfall for depositors that must be carefully addressed by the user interface, since significant loss of funds can occur.**
:::

## Deposit economics

Signers aren’t altruists—they are paid for the service they provide.

Signer fees should always be paid or escrowed up front. To achieve this, signer fees must be [guaranteed by minting](/tBTC/minting.md), and deposits must have predictable lifetimes.

A detailed treatment of signer fees can be found in [its own section](/tBTC/signer-fees.md).

### Terms

Fixed-term deposits mean signer fees can easily be calculated per deposit. A standard term of 6 months means depositors can budget for fees, and signers will know how long their bonds will be inaccessible. To incentivize redemption at term, the system is structured such that deposits can only be redeemed by the owner of the deposit during the term, but anyone may redeem deposits once they reach term. Additionally, at-term redemptions still charge their signing fees from the deposit owner, unless fees have been escrowed by the vending machine.

Depositors that don’t need future access to their deposit might prefer to pass the costs of the system to eventual redeemers and/or want denomination beyond the BTC lot size or fungibility. These depositors can opt to receive a non-fungible Fee Rebate Token which pays a fee rebate at the time of a deposit’s (pre-term) redemption by another user. The rebate mechanism is [explained further in the discussion around minting](/tBTC/minting.md).

At the end of the deposit term, the deposit can be redeemed by anyone including the signers themselves, with signer fees owed by the deposit owner. This mechanism is discussed in more detail in the [section on redemption](/tBTC/redemption.md).

