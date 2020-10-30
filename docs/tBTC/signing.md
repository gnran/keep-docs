--- 
order: 7
---

# Signing

All of the aforementioned mechanisms require that there is a M-of-N multisignature wallet guarding each Deposit on Bitcoin.

Bitcoin’s consensus rules restrict script size to 520 bytes (10,000 bytes for Segwit outputs), limiting the maximum size of multisignature scripts to about 80 participants (OP_CHECKMULTISIG is limited to [20 public keys](https://github.com/bitcoin/bitcoin/blob/master/src/script/script.h#L28-L29), but this can be bypassed by using `OP_CHECKSIG ADD` and `<threshold> OP_GREATERTHAN` as shown by [Nomic Labs](https://github.com/nomic-io/bitcoin-peg/blob/master/bitcoinPeg.md)). Future proposals such as [MAST](https://github.com/bitcoin/bips/blob/master/bip-0114.mediawiki) would allow implementing larger multisigs, however the activation of new features on Bitcoin has historically been a procedure with unclear timelines.

Finally, large multisignature wallets in Ethereum and Bitcoin both have increasing verification costs as the number of participants increases. Building multisigs on Ethereum is [particularly hard](https://www.coindesk.com/30-million-ether-reported-stolen-parity-wallet-breach). By utilizing [aggregate signatures with public key aggregation](https://crypto.stanford.edu/~dabo/pubs/papers/aggreg.pdf), we can remove all of the above complexities and replace them by a simple single signature verification.

Intuitively, an aggregate public key is generated from all multisignature participants who communicate via an out of band protocol, a process also known as Distributed Key Generation (DKG). Each participant signs the intended message with their private key and contributes a "share" of the final aggregate signature. Assuming ECDSA, the aggregate signature can then be verified against the aggregate public key with an OP_CHECKSIGVERIFY on Bitcoin, or an ECRECOVER operation on Ethereum. This process is simple and inexpensive, and avoids the path of implementing complex multisignature verification logic which can be upgraded for different M-of-N configurations. If another configuration is required, the script or the smart contract only needs to be configured to use a new aggregate public key after re-executing the DKG.

## Threshold ECDSA

For a private key `x`, a message `M`, a hash function `H`, and a uniformly chosen `k`, an ECDSA signature is the pair `(r, s)`, where `s = k (m + xr)`, `r = R_x`,` R = g(k-1`) and `m = H(m)`. Intuitively, this signature can be converted to a threshold signature if k and x are calculated via secret sharing between t of n protocol participants. [Gennaro and Goldfeder’s paper](https://eprint.iacr.org/2019/114.pdf) describes an efficient mechanism for performing this procedure. Note that a similar mechanism was proposed by [Lindell at al](https://eprint.iacr.org/2018/987.pdf) in the same year.

Informally, the participants perform the following actions to sign a message:

Produce an additive share of `k * x`, where each participant `i` holds `k_i` and `x_i`.

Efficiently calculate `R = g^(1/k)` using Bar-Ilan and Beaver’s inversion trick, without any participant `i` revealing `k_i`, and set `r = R_x`.

Each participant calculates their share of the signature: `s_i = m * k_i + r * k_i * x_i`.

The threshold signature is the sum of all signatures `s_i`.

A more in-depth description of the protocol can be found in Section 4.1 and 4.2 of the paper.

## Improved Fault Attribution

Currently, when Signers misbehave, all of their security bonds are seized and burned. If the system is parameterized to use `M-of-N` multisigs to back deposits, this means that if `M` parties misbehaved, the bonds of all `N` parties would be slashed. This is a griefing vector which we ideally would like to avoid. Accountable-subgroup multisignatures (described in Section 4 of the [related paper](https://eprint.iacr.org/2018/483.pdf)) allow distinguishing a signature made by a subgroup `S` in a `M-of-N` multisignature from another subgroup `S'`. This can be leveraged to penalize only the `M` misbehaving signers, removing the risk of punishing honest signers.

The threshold-ECDSA protocol described in the previous section does not support fault attribution to subgroups of signers. We will deploy tBTC without that feature, and enable it in future protocol upgrades.

## Future Signature Schemes

In this section we explore other aggregate signature schemes we may use in the future. The described techniques are secure in the plain public key model, meaning that users do not need to prove ownership of their secret key, making them attractive for usage in blockchains. We briefly describe [MuSig](https://eprint.iacr.org/2018/068) and [BLS](https://www.iacr.org/archive/asiacrypt2001/22480516.pdf) signatures.

### MuSig

::: tip
This section is taken from the last section of the official [MuSig](https://blockstream.com/2018/01/23/en-musig-key-aggregation-schnorr-signatures/) blogpost by Blockstream
:::

1. Let `H` be a cryptographic hash function

2. Call `L = H(X_1,X_2,…)`

3. Call `X` the sum of all `H(L,X_i) * X_i`

4. Each signer chooses a random nonce `r_i, and shares R_i = r_i * G` with the other signers

5. Call `R` the sum of the `R_i` points

6. Each signer computes `s_i = r_i + H(X,R,m) * H(L,X_i) * x_i`

7. The final signature is `(R,s)`, where `s` is the sum of the `s_i` values

8. Verification must satisfy: `sG = R + H(X,R,m) * X`

Contrary to earlier constructions, this signature verification algorithm is secure against rogue key attacks because X is defined as a weighted sum of the signers' public keys, where the weighting factor depends on the hash of all participating public keys.

### Pairing based multisignatures

Building on the work from MuSig and BLS signatures, Boneh, Drijvers and Neven introduce an efficient variant of previous BLS signature constructions which requires only 2 pairing operations for verification and is also secure against rogue key attacks.

This multisignature is shorter than MuSig since it is only 1 group element instead of 2. MuSig also requires an additional round of communication to generate the nonce `R`, which is not present in BLS. All signers can send their signatures to a third party who will aggregate them, removing the need for further interaction and for all parties to be online at the same time.

::: tip
This section is taken from the Section 1 of the [official related post](https://crypto.stanford.edu/~dabo/pubs/papers/BLSmultisig.html) by Dan Boneh et al
:::

1. Call `e: G_0 x G_1 → G_T` a bilinear non-degenerate pairing that’s efficient o compute, `g_0` and `g_1` generators of `G_0` and `G_1` respectively.

2. Call `sk` the user’s secret key, and `g_1^{sk}` their public key.

3. Call `H_0` a cryptographic hash function from the message space to `G_0`

4. Call `H_1` a cryptographic hash function from `G_1^n` to `R^n`

5. A signature on `m` is `s_i = Η_0(m)^sk_i`

6. To aggregate N signatures for the same message from public keys `(pk_1, …​, pk_n)`:

   1. Compute: `(t_1, …​, t_n) = H_1(pk_1, …​, pk_n)`
   2.  Aggregated signature: `s = s_1^t_1 * …​ * s_n^t_n`

7. To verify the aggregated signature against the same public keys:

   1. Compute: `(t_1, …​, t_n) = H_1(pk_1, …​, pk_n)`
   2. Compute the aggregate public key: `pk = pk_1 ^ t_1 * …​ * pk_n ^ t_n` (independent of the message being signed))
   3. Verify the signature: `e(g_1, s) = e(pk, H_0(m))` (requires 2 pairings since the same message is being signed):   