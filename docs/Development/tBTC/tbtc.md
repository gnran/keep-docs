--- 
order: 1
---

# tBTC Setup

:::warning
The source code related to this section can be found in [Keep-tBTC](https://github.com/keep-network/tbtc)
:::

tBTC is a trustlessly Bitcoin-backed ERC-20 token.

The goal of the project is to provide a stronger 2-way peg than federated sidechains like [Liquid](https://blockstream.com/liquid/), expanding use cases possible via today’s Bitcoin network, while bringing superior money to other chains.

## Installation

tBTC contracts are currently published in the NPM Registry as the package [`@keep-network/tbtc`](https://www.npmjs.com/package/@keep-network/tbtc). Packages have versions corresponding to their network:

* `-pre` packages contain prerelease packages for the internal Keep testnet.

* `-rc` packages contain prerelease packages for the Ropsten Ethereum testnet.

Note that only the latest package in a series is expected to reference contracts that have a backing set of signers.

To install the package:

```bash
$ npm install @keep-network/tbtc
```

## Usage

:::tip
BTC contracts require `solc` v0.5.17 or higher. You may have to [configure solc in your truffle-config.js](https://www.trufflesuite.com/docs/truffle/reference/configuration#compiler-configuration).
:::

Once installed, you can use the contracts in the library by importing them:

```go
pragma solidity ^0.5.17;

import "@keep-network/tbtc/contracts/deposit/Deposit.sol";

contract MySystem {
    function checkTerm(address _depositAddress) external {
        uint256 remainingTerm = Deposit(_depositAddress).remainingTerm();
    }
}
```

## Security

tBTC’s first 6-week audit was completed by ConsenSys Diligence on March 27, 2020, against [fbb2018c41](https://github.com/keep-network/tbtc/commit/fbb2018c41456d19ec20eb28a17070ee2b10eb5d). They’ve published a detailed [audit report](https://diligence.consensys.net/audits/2020/02/thesis-tbtc-and-keep/) and [cryptographic review](https://diligence.consensys.net/audits/2020/03/thesis-cryptographic-review/).

A Bitcoin-focused audit was conducted by security researcher [Sergi Delgado](https://twitter.com/sr_gi) from May 25 to May 31, 2020. You can [review Sergi’s results on his site](https://srgi.me/resources/reports/tbtc_audit.pdf).

[Trail of Bits](https://www.trailofbits.com/) conducted an audit of tBTC in June, 2020, and published [a summary of their results](https://github.com/trailofbits/publications/blob/db9414def9f575465a47fef5489eb54d9c543eb5/reviews/thesis-summary.pdf). [`@samczsun`](https://github.com/samczsun) opened issues he discovered [on the repo](https://github.com/keep-network/tbtc/issues?q=is%3Aissue+author%3Asamczsun), all of which have been addressed.

A focused treatment of tBTC’s security model can be [found here](https://tbtc.network/developers/tbtc-security-model/).

## Contributing

All contributions are welcome. To report bugs, please create an issue on this repository. To start a discussion, prefer [Discord](https://discord.gg/4R6RGFf) over GitHub issues.

Read the [Contributing guidelines](/development/Keep-Core/contributing.md).

### Setup environment

You should have installed:

* Node.js, [npm](https://docs.npmjs.com/cli/install).

* A local Ethereum blockchain. We recommend [Ganache](https://www.trufflesuite.com/ganache).

* [Truffle framework](https://www.trufflesuite.com/docs/truffle/overview).

### Build

Clone and install dependencies:

```bash
git clone https://github.com/keep-network/tbtc
cd tbtc/solidity
npm install
```

Deploy contracts:

```bash
truffle migrate --reset
```

### Test

Tests are written in JS using Mocha.

To run the test suite, execute `truffle test`.

To run specific tests, add [`.only`](https://jaketrent.com/post/run-single-mocha-test/) to the `contract` block:

```go
contract.only('TBTCToken', function(accounts) {
```

### Lint

We use [ESLint](https://eslint.org/) and [Ethlint](https://github.com/duaraghav8/Ethlint) for linting code. To run:

```bash
npm run sol:lint:fix
npm run js:lint:fix
```

