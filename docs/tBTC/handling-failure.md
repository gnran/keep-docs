--- 
order: 8
---

# Handling Failure

## Aborts / Liveness

The system requires that critical actions like funding and redemption occur within a fixed time after request. Failure to do so is treated as an "abort." Where [fraud](/tBTC/handling-failure.md#fraud) indicates proof positive of forbidden behavior, an abort typically represents a liveness failure from some participant. As such, while aborts are still punished, and may still result in liquidation, they are not punished as severely as fraud. For example, should the signers fail to produce a redemption signature in a timely manner, their bonds are liquidated to protect the supply peg, but any remainder is returned to them once the liquidation initiator is rewarded.

### Fraud

The system recognizes one type of fraud proof, ECDSA fraud proofs, in which the signing group produces a signature on a message which was not explicitly requested. When fraud is detected, the system penalizes the signers by seizing their bonds and starting the [liquidation](/tBTC/bonding.md#liquidation) process.

#### ECDSA Fraud Proofs

The signers collectively control an ECDSA keypair. By cooperating, they can produce signatures under the public key. Signers are charged with producing certain signatures (e.g. on a redemption transaction during the redemption process). Any valid signature under the signers' public key, but not specifically requested by the system is considered fraud.

An ECDSA fraud proof is simply a signature under the signers' public key, the signed message digest, and the preimage of that digest. From there we perform regular ECDSA verification. If the preimage matches the digest and the signature on the digest is valid but the digest was not explicitly requested by the system, then we can be sure that the signer set is no longer reliable. It is worth noting here, that verification of the preimage-digest relationship may not be skipped. Given any public key, it is possible to construct a signature under that public key and select a digest that matches it. Which is to say, anyone can produce an apparently valid signature on any unknown message. Only direct verification of the preimage’s existence (via checking its relationship to the signed digest) prevents this attack as the attacker would have to invert the hash function to forge this relationship.

Notionally, the system can verify any signature the signers produce. However, the capabilities of the host chain set practical limitations. For instance, on Ethereum, only certain digest functions are available, so we cannot verify signatures on digests produced by unsupported hash functions. As a practical example, this precludes verification of Decred signatures, which use blake256. Signers in an Ethereum-hosted system can produce signatures on Decred transactions with no possibility of punishment.

All host chains impose costs on argument size, therefore cost of verification scales with the length of the preimage. This means that it may not be economically feasible to verify signatures on very long preimages, or that attempting to do so will exceed resource-use limitations (e.g. Ethereum’s block gas limit). Fortunately, Bitcoin’s signature hash algorithm uses double-sha256, which makes the preimage of a signature the result of the first sha256. This means that the preimage to the signed digest is always 32 bytes, meaning verification costs never scale with transaction size, and even very large transactions cannot evade ECDSA fraud verification.