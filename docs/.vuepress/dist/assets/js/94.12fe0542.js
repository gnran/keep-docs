(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{596:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"signer-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-fees"}},[e._v("#")]),e._v(" Signer Fees")]),e._v(" "),a("p",[e._v("Signers put their own "),a("RouterLink",{attrs:{to:"/tBTC/bonding.html"}},[e._v("funds at risk")]),e._v(" to assure depositors there will be no foul play. The bonds they put down are capital that could otherwise be productive, and need to earn a return relative to the risk to remain competitive with other opportunities.")],1),e._v(" "),a("h2",{attrs:{id:"paying-for-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paying-for-security"}},[e._v("#")]),e._v(" Paying for security")]),e._v(" "),a("p",[e._v("There are a number of pricing models that could cover the opportunity cost of signers' bonds.")]),e._v(" "),a("p",[e._v("A pricing floor can be derived from a related pricing model in the cryptocurrency space: today’s centralized cryptocurrency custodians charge 50 to 75 basis points (between 0.5-0.75%) on "),a("em",[e._v("assets under custody (AUC)")]),e._v(" per year. For each year that a centralized custodian protects a bitcoin deposit, that’s as much as 0.75% lost to the costs of custody.")]),e._v(" "),a("p",[e._v("A decentralized model should eventually allow a lower effective fee on custody by introducing more competition to the space. There is a caveat, however—a decentralized approach to custodianship makes legal recourse more difficult, requiring additional bonded collateral to ensure recompense in case of failure.")]),e._v(" "),a("p",[e._v("Applying this pricing model to tBTC’s bonding, it’s clear that a signer would need to make a similar return at a minimum on the total capital it’s protecting.")]),e._v(" "),a("h2",{attrs:{id:"fee-parameterization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fee-parameterization"}},[e._v("#")]),e._v(" Fee parameterization")]),e._v(" "),a("h3",{attrs:{id:"terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),a("p",[a("strong",[e._v("Deposit")])]),e._v(" "),a("p",[e._v("A non-fungible smart contract construct to which a signing group is assigned. It coordinates the creation and redemption of LotSize TBTC.")]),e._v(" "),a("p",[a("strong",[e._v("LotSize")])]),e._v(" "),a("p",[e._v("The exact value of a deposit denominated in BTC.")]),e._v(" "),a("p",[a("strong",[e._v("OvercollateralizationFactor")])]),e._v(" "),a("p",[e._v("The additional amount which must be deposited as collateral by the signer, expressed as a percentage of the lot size.")]),e._v(" "),a("p",[a("strong",[e._v("BondValue")])]),e._v(" "),a("p",[e._v("The amount a signer must lock in a smart contract as collateral to mint TBTC. Initially this will be denominated in ETH. The required deposit collateral across all signers can be expressed as OverCollateralizationFactor * LotSize * (ETHBTC conversion rate).")]),e._v(" "),a("p",[a("strong",[e._v("N")])]),e._v(" "),a("p",[e._v("The number of signers authorized to sign on a `Deposit’s withdrawal request.")]),e._v(" "),a("p",[a("strong",[e._v("M")])]),e._v(" "),a("p",[e._v("The minimum number of signers required to sign the authorization of a deposit’s withdrawal request.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("It is assumed that each signer contributes equally to the collateralization of a deposit.")]),e._v(" "),a("p",[e._v("The capital cost per signer is "),a("code",[e._v("BondValue / N. Using LotSize = 1 BTC")]),e._v(" and "),a("code",[e._v("OverCollateralizationFactor = 150%")]),e._v(", that is "),a("code",[e._v("1.5 BTC / N")]),e._v(".")]),e._v(" "),a("p",[e._v("An initial parameterization of the system might use "),a("code",[e._v("3")]),e._v(" signers per lot. In addition, due to the lack of attributability in the "),a("RouterLink",{attrs:{to:"/tBTC/signing.html"}},[e._v("aggregate signature mechanism")]),e._v(" used, we pick "),a("code",[e._v("M = N")]),e._v(". This requires a 50% BTC value in capital cost for "),a("strong",[e._v("each")]),e._v(" signer per 1 TBTC minted.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);