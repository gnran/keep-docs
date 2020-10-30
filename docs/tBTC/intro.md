--- 
order: 1
---

# Introduction

::: warning
Full documentation can be found [here](https://docs.keep.network/tbtc/index.html)
:::

The tBTC system is a design for a decentralized, 1-to-1 redeemable token supply-pegged to BTC - in other words, a sidechain. The design can be implemented on a smart-contract-enabled host chain that supports custom tokens and a subset of functionality needed to prove certain properties of Bitcoin transactions. This spec in particular assumes the host chain is Ethereum. The peg is implemented using an approach dubbed a bonded, multifederated peg, in which a randomly chosen subset of a larger network of signing nodes is chosen to back individual deposits requested by users wishing to mint TBTC tokens on the host chain. The chosen signers use a threshold ECDSA protocol to generate a Bitcoin wallet without any single signer having access to the corresponding private key, and bond an amount of the host chain’s native token (ETH for Ethereum) that ensures their behavior in the system remains honest, at risk of losing their bond in case of dishonesty or undercollateralization. A smart contract on the host chain mediates the deposit’s lifecycle, including opening deposits, collateralization, signer fraud, and redemption. Redemption allows for a deposit to have its held BTC withdrawn on the Bitcoin chain, and pays signers. Additional mechanisms are described to properly incentivize a fixed term for deposits to ensure signer compensation and to allow signer exit in case of impending undercollateralization.


## Design Goals

The goal of tBTC is the creation an ERC-20 token that maintains the most important property of Bitcoin- its status as "hard money".

To maintain the "hard money" status of its backing BTC deposits, tBTC must remain

* Censorship and seizure resistant, across friendly and unfriendly jurisdictions

* Inflation-resistant. TBTC may only be minted after proof is provided of a backing BTC deposit.

* Leverage-resistant. The existence of tBTC shouldn’t allow cross-chain "printing" of additional synthetic Bitcoin. We can’t stop someone from launching a synthetic, but artificially expanding the Bitcoin supply is not a goal of the project.

* Without middlemen, in the same sense as Bitcoin. The only rent extraction should be from the minimal participation of signers required to secure the network, similar to miners on the Bitcoin network.

* Redeemable. The ability to trade scrip for its backing deposit freely is what distinguishes a backed currency from fiat money. The supply of tBTC is always backed by an equal number of reserved BTC. This means for every token in circulation, 1 BTC has been removed from circulation.

Together, these properties ensure a strong supply peg across chains, and the closest to "hard money" status that a Bitcoin-pegged asset can achieve.

Notably, these properties don’t require an artificial price peg as is common in stable coin projects — they instead require a supply peg across chains.

## System Architecture

The rest of this section specifies a protocol that provides a robust BTC-backed bearer asset on Ethereum.

At a high level, that means the protocol must

* have a multi-wallet architecture

* with many geographically distributed signers

* that removes single points of failure

This protocol must also counter the secondary effects of these requirements, including multi-signer payment, a more complex bonding system, an approach for detecting and dealing with undercollateralized signers, a Bitcoin proof system, and robust handling of failures on both chains.

## Related Links

* [tBTC Network](https://tbtc.network/) - Official tBTC Website
* [tBTC Docs](https://docs.keep.network/tbtc/index.html) - Full tBTC documentantion
* [Keep Network](https://keep.network/) - Official Keep Network Website

