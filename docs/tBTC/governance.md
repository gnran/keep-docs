--- 
order: 10
---

# Governance

## Philosophy

The governance philosophy is simple: govern as few system parameters as possible. This limited view on governance means relying on social upgrades— deploying a new instance of the system—rather than governed contract upgrades.

Social upgrades are akin to hard forks. They require an overwhelming economic consensus, as a new token contract and other new contracts will need to be coordinated and agreed upon across the market. The bar for a social upgrade is much higher than other common governance paradigms, and will become even more difficult as an instance of the system ages.

The limited governance included in the system design follows a few principles:

* Governance should only impact new deposits, whenever possible. Each deposit should behave predictably over the long run, regardless of governance choices.

* All governance should abide by a time delay if possible, giving users time to respond to changes in the system.

* The governance role should be assignable to a credibly neutral third party or eventual decentralization.

## Governance Functions

All governance functions and delays are enumerated below. Each MUST be callable by the contract owner alone. For functions that have time delays, there is a `finalize<Function>` equivalent to the `begin<Function>` that can finalize the change after the specified delay (e.g. `beginLotSizesUpdate/finalizeLotSizesUpdate`).

| Function        |         Time delay                |Existing deposit impact|
| ---------------------       | --------------------------|-------|
| emergencyPauseNewDeposits()             | No delay|None|
| beginSignerFeeDivisorUpdate(uint16 divisor)         | 	2 days|None|
| beginLotSizesUpdate(uint64[] _lotSizes)       | 	2 days|None|
| beginCollateralizationThresholdsUpdate(uint16 initial, …​)       | 	2 days|None|
| beginEthBtcPriceFeedAddition(address ethBtcPriceFeed)       | 	90 days|Only if price feed fails|

`emergencyPauseNewDeposits()`

Immutable code and user safety in case of newly discovered vulnerabilities are often considered at odds. Instead, many smart contract systems rely heavily on a trusted admin key, allowing arbitrary contract upgrades. Of course, if such capabilities exist, why use a blockchain at all?

Instead of contract upgrades, tBTC v1 includes the capability to pause new deposits for 10 days. The capability can be used once, and doesn’t impact existing deposits or other system functionality. After the 10-day period expires, new deposits are once again enabled.

This capability allows the dev team to pause new deposits in case of a 0-day exploit, buying precious time to alert users of any risk to funds. While the intent is for use in dire circumstances, the mechanism has been structured so the dev team can’t use it as a general-purpose kill-switch.

After 365 days, deposits can no longer be paused, and any call to `emergencyPauseNewDeposits()` MUST revert.

----

`beginLotSizesUpdate(uint64[] _lotSizes)`

The contract owner may update the [lot sizes](/tBTC/deposits.md#lots) enabled for new deposits after a 2 day delay.

There should always be a 1 BTC lot size enabled to keep this call from acting as an inadvertent kill-switch. Any update that does not include a 1 BTC lot size MUST revert.

----

`beginSignerFeeDivisorUpdate(uint16 divisor)`

Unfortunately, the design of tBTC v1 does not allow for market-discoverable [signer fees](/tBTC/signer-fees.md). Instead, the function of setting signer fees is left to governance.

The contract owner may update the signer fee divisor after a 2 day delay, impacting new deposits. The fee is limited to 0.03% - 10.0%, to prevent a very small or very large signer fee update from acting as a kill-switch.

Any update outside that range MUST revert.

----

`beginCollateralizationThresholdsUpdate(uint16 initial, …​)`
The contract owner may update the [collateralization thresholds](/tBTC/bonding.md) for new deposits after a 2 day delay.

While the update only directly impacts new deposits, if the contract owner were to collude with an attacker, an update could harm the peg. For that reason, any initial threshold under 100% or over 300% MUST revert.

------

`beginEthBtcPriceFeedAddition(address ethBtcPriceFeed)`
The contract owner may add a new backup ETHBTC [price feed](/tBTC/price-feed.md) for all deposits after a 90 day delay. Note that this delay is significantly longer than other governance controls.

Price feeds must be tracked in a list, and a price feed in that list must only used if all previously-added price feeds present themselves as _inactive_. Price feeds provide a `peek()` function that returns the value of the price feed alongside a boolean indicating whether the feed is active. If the second value in that return is `false`, the feed is considered inactive and the next feed in the list must be used.

This update allows straightforward planning for an intentional decommissioning of the primary Medianizer feed. The long lead time allows any existing depositors who may be concerned about the new price feed ample time to close open deposits and retrieve their funds.

This update can also be used to deal with an unexpected deactivation of the primary feed, though in that event the system will take 90 days to recover.