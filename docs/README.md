---
footer:
  newsletter: false
aside: true
order: 1
---
![img](https://media.discordapp.net/attachments/727903440902291457/748953884525068388/3.jpg?width=1044&height=587)

# Introduction

The Keep Network is a privacy layer for blockchains that allows users and applications to store data privately. It features off-chain containers for private data called keeps. The network randomly assigns keeps to a system of participants, called signers, that help store and manage these data containers. Keep's core application, the [Random Beacon](/Random-Beacon/intro.md), provides this source of randomness and aims to ensure an individual signer cannot decode the information stored in the network. Each participant stakes KEEP tokens to act as a signer in exchange for a service fee.

## The KEEP

The KEEP token is a work token. Work across the network is distributed to KEEP stakers, in proportion to their staked amount, by a random beacon. Misbehaving stakers have their KEEP slashed and are removed from the network, similar to other proof of stake mechanisms.

## Keeps

The network offers application developers **keeps**, small off-chain data containers for private storage and computation that can be opened, closed, and managed by smart contracts autonomously.

Keeps are maintained by stakers, actors who run nodes and have skin in the game, and collect fees for operating the network. When a new keep is opened, the requisite number of stakers are chosen via a [BLS-based random beacon](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078) to maintain the keep, using a process called [sortition](https://en.wikipedia.org/wiki/Sortition).

The first type of keep launching with the network is the `BondedECDSAKeep`, allowing smart contracts to generate private keys and sign messages without endangering key material. ECDSA keeps mean decentralized signing, cross-chain applications, and new tools for custodial applications — from Solidity. This capability is used heavily by [tBTC](/tBTC/intro.md).

## Running a Node

In order to run a **Random Beacon** follow the [guide](/Nodes/run_random_beacon.md).

If you are looking to run an **ECDSA node** , follow this setup [guide](/Nodes/run_ecdsa.md).

## Development

All the information referring to develoment purposes can be found in the [Development section](/development/Keep-Core/intro.md).

### dApp Developers

dApp developers will be most interested in the smart contracts exposing Keep’s on-chain facilities.

The core contracts can be found in the [solidity/](https://github.com/keep-network/keep-core/blob/master/solidity) directory. They can be used to request [miner-resistant random numbers](https://github.com/keep-network/keep-core/blob/master/solidity/contracts/IRandomBeacon.sol), as well as creating and managing keeps. To generate new ECDSA key material and request signatures, the contracts can be found [here](https://github.com/keep-network/keep-ecdsa/blob/master/solidity/contracts/api/IBondedECDSAKeep.sol).

### Client Developers

Client developers will be most interested in the [reference Keep Go client](https://github.com/keep-network/keep-core/blob/master/main.go) and [CONTRIBUTION section](/development/Keep-Core/contributing.md)

## Join the Community

Have questions, comments, or new ideas? Participate in the Keep Network community through one of the following channels.

* [Keep Network Discord](https://discord.com/invite/wYezN7v)

* [Keep Network GitHub](https://github.com/keep-network/)

* [Keep Network Telegram](https://t.me/KeepNetworkOfficial/)

* [Keep Network Twitter](https://twitter.com/keep_project)

* [Keep Network Reddit](https://www.reddit.com/r/KeepNetwork/)