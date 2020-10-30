--- 
order: 1
---

# Overview

:::warning
The official documentantion and the source code of this section: [Keep Random Beacon](https://docs.keep.network/random-beacon) and [GitHub](https://github.com/keep-network/keep-core)
:::

The Keep Network requires a trusted source of randomness for the process of trustless group election. While the network requires that randomness to function correctly, the source of randomness is itself broadly applicable. This trusted source of randomness takes the form of a BLS Threshold Relay.

The threshold relay described in this section is a way of generating verifiable randomness that is resistant to bad actors both in the relay network and on the anchoring blockchain, assumed here to be Ethereum. The basic functioning of the relay is:

* Some number of groups exist in the relay.

* An arbitrary seed value counts as the first entry in the relay.

* A request is dispatched to the chain for a new entry.

* The previous entry is used to choose a group to produce the response to the request.

* The previous entry is signed by at least a subset of the chosen group members, and the resulting signature is the entry generated in response to the request. It is published to the anchoring blockchain as the new entry.

* The new entry may trigger the formation of a new group from the set of all members in the relay.

* A group expires after a certain amount of time.

## Prior Work

Dfinity has described their implementation of a random beacon backed by a threshold relay in their [consensus whitepaper](https://dfinity.org/pdf-viewer/library/dfinity-consensus.pdf). The relay described in this paper is heavily based on the one devised by the Dfinity team, with certain adjustments for implementation on an existing blockchain. The key distinction between the Dfinity implementation and the Keep implementation is that Keep has to contend with blockchains that do not implement the same primitives as the in-house Dfinity chain targeted in their paper. Concerns such as transaction costs and payment for beacon entries are therefore a core part of the incentive system built around the Keep random beacon.

As described in the above paper, at the heart of the relay beacon is the signature scheme described by Dan Boneh, Ben Lynn, and Hovav Shacham, termed BLS. Three properties of the scheme are of particular use in this case: BLS signatures can be used in _threshold_ mode, where _k_ of _n_ participants are sufficient to produce a combined signature; BLS threshold signatures produce the same final signature irrespective of the participants; and BLS signatures are typically shorter than those of many other threshold signature schemes.

Finally, underpinning the process of generating new groups for BLS threshold signatures in the system is a distributed key generation algorithm based on work by Gennaro, Jarecki, Krawczyk, and Rabin, as also described in the Dfinity paper above. The Keep Random Beacon publishes group public keys to the anchoring blockchain and does member selection on-chain, but key generation occurs between nodes with only the final result vote occurring on-chain.

## Incentive Structure

The system generates verifiable random numbers using threshold signatures. BLS threshold signatures are deterministic, so a given signing group can only produce one valid signature for any given input. A party that knows the private key of a signing group can calculate signatures in advance, and generated entries can be influenced by preventing the selected group from producing a signature and thus forcing the beacon to select a different group.

To incentivize participants, every member of a group that produces a valid entry is rewarded. Participants that perform costly but necessary actions are reimbursed for the costs and further rewarded.

Each participant is required to _stake_ a number of tokens that are held as collateral against misbehavior. Participants staking a greater number of tokens have a correspondingly greater opportunity to earn rewards. In the event that a group fails to produce a signature when requested or its private key is provably abused, each member of the group is punished by _slashing_ their stake; taking away some or all of their staked tokens.

In some cases, misbehavior is proven with the help of a third party _"tattletale"_ who notifies the beacon of the misbehavior, and if necessary, provides the required proof. If the misbehavior occurred as claimed, the tattletale is rewarded with a fraction of the slashed tokens.

## System Details

The system has two high-level modes of operation:

* Group formation, consisting of group member selection and distributed key generation.

* Threshold signing, triggered by a beacon request and producing a new entry in the relay (which in turn also triggers the formation of a new group). signing also involves selecting the appropriate price for a new relay entry.

To learn more about these modes, please, follow [Group formation](https://docs.keep.network/random-beacon/index.html#_group_formation) and [Random Beacon Signing](https://docs.keep.network/random-beacon/index.html#_random_beacon_signing) sections in official documentantion.

## Related Links

* [The Keep Random Beacon: An Implementation of a Threshold Relay](https://docs.keep.network/random-beacon)

* [What’s in a beacon?](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078)

* [Source code](https://github.com/keep-network/keep-core)




