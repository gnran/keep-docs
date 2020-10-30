--- 
order: 4
---

# Price Feed

The price feed is an integral part of the system, ensuring sufficient collateral backs all tBTC signers. For tBTC v1, the feed will be built on a [ETHBTC Medianizer](https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation) from MakerDAO, currently operated by MakerDAO.

The minimal price feed design is specified completely by the interface below:

```sol
interface PriceFeed {
    function getPrice() external view returns (uint256);
    function updatePrice(uint256 price) public;
}
```

It is principally used for calculating the value of Bitcoin lot deposits, priced in Ether. In the Medianizer model, the price is provided by an external entity, so the `updatePrice` method is not included.

## Price encoding

A bitcoin has 8 decimal places, the smallest unit being a satoshi, meaning 100 000 000 satoshis = 1 bitcoin. An ether by contrast, has 18 decimal places, the smallest unit being a wei, meaning 1 000 000 000 000 000 000 wei = 1 ether.

To express the price of bitcoin relative to ether, we must use a ratio of the number of wei to a satoshi. A simple design is to use x wei : 1 satoshi. Hence, for a call to `getPrice` when 32.32 ETH : 1 BTC (Jun 2019), the value 323 200 000 000 wei is returned.

However, if 1 wei is worth more than 1 sat, then the price can no longer be accurately encoded. This scenario of a 'flippening', when 1 ether becomes worth 10,000,000,000x as much as 1 bitcoin, we find unlikely in the very short-term. Rather than prematurely optimize, incorporating a 2 integer ratio of x wei to y satoshi and changing the call semantics, we leave this as a future exercise for governance.

::: tip
The Medianizer in use for tBTC v1 is what Maker calls an ETHBTC feed, meaning it returns the price of 1 ETH in BTC to a precision of 18 decimals. There is no name for the 18th decimal of BTC, since the smallest named denomination of a BTC is 10-8, the satoshi, so we refer to it henceforth as a "weitoshi". To get the ratio of x wei : 1 satoshi, tBTC must convert the ETHBTC value (1 ETH in weitoshi) to the number of wei in 1 sat; it does this by dividing 1028 by the Medianizer value.
:::

## Future design

The price feed is integral to tBTC’s security and in the future, will be principally governed by the tBTC ecosystem. The first upgrades will focus on incorporating a novel price feed mechanism based on reverse auction challenges that has been dubbed the "priceless feed".



