--- 
order: 6
---

# Signer Fees

Signers put their own [funds at risk](/tBTC/bonding.md) to assure depositors there will be no foul play. The bonds they put down are capital that could otherwise be productive, and need to earn a return relative to the risk to remain competitive with other opportunities.

## Paying for security

There are a number of pricing models that could cover the opportunity cost of signers' bonds.

A pricing floor can be derived from a related pricing model in the cryptocurrency space: today’s centralized cryptocurrency custodians charge 50 to 75 basis points (between 0.5-0.75%) on _assets under custody (AUC)_ per year. For each year that a centralized custodian protects a bitcoin deposit, that’s as much as 0.75% lost to the costs of custody.

A decentralized model should eventually allow a lower effective fee on custody by introducing more competition to the space. There is a caveat, however—a decentralized approach to custodianship makes legal recourse more difficult, requiring additional bonded collateral to ensure recompense in case of failure.

Applying this pricing model to tBTC’s bonding, it’s clear that a signer would need to make a similar return at a minimum on the total capital it’s protecting.

## Fee parameterization

### Terminology

**Deposit**

   A non-fungible smart contract construct to which a signing group is assigned. It coordinates the creation and redemption of LotSize TBTC.

**LotSize**

The exact value of a deposit denominated in BTC.

**OvercollateralizationFactor**

The additional amount which must be deposited as collateral by the signer, expressed as a percentage of the lot size.

**BondValue**

The amount a signer must lock in a smart contract as collateral to mint TBTC. Initially this will be denominated in ETH. The required deposit collateral across all signers can be expressed as OverCollateralizationFactor * LotSize * (ETHBTC conversion rate).

**N**

The number of signers authorized to sign on a `Deposit’s withdrawal request.

**M**

The minimum number of signers required to sign the authorization of a deposit’s withdrawal request.

### Description

It is assumed that each signer contributes equally to the collateralization of a deposit.

The capital cost per signer is `BondValue / N. Using LotSize = 1 BTC` and `OverCollateralizationFactor = 150%`, that is `1.5 BTC / N`.

An initial parameterization of the system might use `3` signers per lot. In addition, due to the lack of attributability in the [aggregate signature mechanism](/tBTC/signing.md) used, we pick `M = N`. This requires a 50% BTC value in capital cost for **each** signer per 1 TBTC minted.