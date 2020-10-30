(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{590:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"governance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[e._v("#")]),e._v(" Governance")]),e._v(" "),a("h2",{attrs:{id:"philosophy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#philosophy"}},[e._v("#")]),e._v(" Philosophy")]),e._v(" "),a("p",[e._v("The governance philosophy is simple: govern as few system parameters as possible. This limited view on governance means relying on social upgrades— deploying a new instance of the system—rather than governed contract upgrades.")]),e._v(" "),a("p",[e._v("Social upgrades are akin to hard forks. They require an overwhelming economic consensus, as a new token contract and other new contracts will need to be coordinated and agreed upon across the market. The bar for a social upgrade is much higher than other common governance paradigms, and will become even more difficult as an instance of the system ages.")]),e._v(" "),a("p",[e._v("The limited governance included in the system design follows a few principles:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Governance should only impact new deposits, whenever possible. Each deposit should behave predictably over the long run, regardless of governance choices.")])]),e._v(" "),a("li",[a("p",[e._v("All governance should abide by a time delay if possible, giving users time to respond to changes in the system.")])]),e._v(" "),a("li",[a("p",[e._v("The governance role should be assignable to a credibly neutral third party or eventual decentralization.")])])]),e._v(" "),a("h2",{attrs:{id:"governance-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#governance-functions"}},[e._v("#")]),e._v(" Governance Functions")]),e._v(" "),a("p",[e._v("All governance functions and delays are enumerated below. Each MUST be callable by the contract owner alone. For functions that have time delays, there is a "),a("code",[e._v("finalize<Function>")]),e._v(" equivalent to the "),a("code",[e._v("begin<Function>")]),e._v(" that can finalize the change after the specified delay (e.g. "),a("code",[e._v("beginLotSizesUpdate/finalizeLotSizesUpdate")]),e._v(").")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Function")]),e._v(" "),a("th",[e._v("Time delay")]),e._v(" "),a("th",[e._v("Existing deposit impact")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("emergencyPauseNewDeposits()")]),e._v(" "),a("td",[e._v("No delay")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("beginSignerFeeDivisorUpdate(uint16 divisor)")]),e._v(" "),a("td",[e._v("2 days")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("beginLotSizesUpdate(uint64[] _lotSizes)")]),e._v(" "),a("td",[e._v("2 days")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("beginCollateralizationThresholdsUpdate(uint16 initial, …​)")]),e._v(" "),a("td",[e._v("2 days")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("beginEthBtcPriceFeedAddition(address ethBtcPriceFeed)")]),e._v(" "),a("td",[e._v("90 days")]),e._v(" "),a("td",[e._v("Only if price feed fails")])])])]),e._v(" "),a("p",[a("code",[e._v("emergencyPauseNewDeposits()")])]),e._v(" "),a("p",[e._v("Immutable code and user safety in case of newly discovered vulnerabilities are often considered at odds. Instead, many smart contract systems rely heavily on a trusted admin key, allowing arbitrary contract upgrades. Of course, if such capabilities exist, why use a blockchain at all?")]),e._v(" "),a("p",[e._v("Instead of contract upgrades, tBTC v1 includes the capability to pause new deposits for 10 days. The capability can be used once, and doesn’t impact existing deposits or other system functionality. After the 10-day period expires, new deposits are once again enabled.")]),e._v(" "),a("p",[e._v("This capability allows the dev team to pause new deposits in case of a 0-day exploit, buying precious time to alert users of any risk to funds. While the intent is for use in dire circumstances, the mechanism has been structured so the dev team can’t use it as a general-purpose kill-switch.")]),e._v(" "),a("p",[e._v("After 365 days, deposits can no longer be paused, and any call to "),a("code",[e._v("emergencyPauseNewDeposits()")]),e._v(" MUST revert.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("beginLotSizesUpdate(uint64[] _lotSizes)")])]),e._v(" "),a("p",[e._v("The contract owner may update the "),a("RouterLink",{attrs:{to:"/tBTC/deposits.html#lots"}},[e._v("lot sizes")]),e._v(" enabled for new deposits after a 2 day delay.")],1),e._v(" "),a("p",[e._v("There should always be a 1 BTC lot size enabled to keep this call from acting as an inadvertent kill-switch. Any update that does not include a 1 BTC lot size MUST revert.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("beginSignerFeeDivisorUpdate(uint16 divisor)")])]),e._v(" "),a("p",[e._v("Unfortunately, the design of tBTC v1 does not allow for market-discoverable "),a("RouterLink",{attrs:{to:"/tBTC/signer-fees.html"}},[e._v("signer fees")]),e._v(". Instead, the function of setting signer fees is left to governance.")],1),e._v(" "),a("p",[e._v("The contract owner may update the signer fee divisor after a 2 day delay, impacting new deposits. The fee is limited to 0.03% - 10.0%, to prevent a very small or very large signer fee update from acting as a kill-switch.")]),e._v(" "),a("p",[e._v("Any update outside that range MUST revert.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("beginCollateralizationThresholdsUpdate(uint16 initial, …​)")]),e._v("\nThe contract owner may update the "),a("RouterLink",{attrs:{to:"/tBTC/bonding.html"}},[e._v("collateralization thresholds")]),e._v(" for new deposits after a 2 day delay.")],1),e._v(" "),a("p",[e._v("While the update only directly impacts new deposits, if the contract owner were to collude with an attacker, an update could harm the peg. For that reason, any initial threshold under 100% or over 300% MUST revert.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("beginEthBtcPriceFeedAddition(address ethBtcPriceFeed)")]),e._v("\nThe contract owner may add a new backup ETHBTC "),a("RouterLink",{attrs:{to:"/tBTC/price-feed.html"}},[e._v("price feed")]),e._v(" for all deposits after a 90 day delay. Note that this delay is significantly longer than other governance controls.")],1),e._v(" "),a("p",[e._v("Price feeds must be tracked in a list, and a price feed in that list must only used if all previously-added price feeds present themselves as "),a("em",[e._v("inactive")]),e._v(". Price feeds provide a "),a("code",[e._v("peek()")]),e._v(" function that returns the value of the price feed alongside a boolean indicating whether the feed is active. If the second value in that return is "),a("code",[e._v("false")]),e._v(", the feed is considered inactive and the next feed in the list must be used.")]),e._v(" "),a("p",[e._v("This update allows straightforward planning for an intentional decommissioning of the primary Medianizer feed. The long lead time allows any existing depositors who may be concerned about the new price feed ample time to close open deposits and retrieve their funds.")]),e._v(" "),a("p",[e._v("This update can also be used to deal with an unexpected deactivation of the primary feed, though in that event the system will take 90 days to recover.")])])}),[],!1,null,null,null);t.default=i.exports}}]);