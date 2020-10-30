--- 
order: 3
---

# tBTC-dApp Setup

:::warning
The source code related to this section can be found in [tBTC_dApp](https://github.com/keep-network/tbtc-dapp)
:::

## Development

### Setup

The dApp requires a version of the tbtc.js library corresponding to the environment being tested on. Versions with version `-pre*` are for the Keep internal testnet and _will not work_ with Ropsten. For Ropsten, look for versions of tbtc.js labeled `-rc*` instead. Clones of the `master` branch of [related repository](https://github.com/keep-network/tbtc-dapp) will by default use a `-pre*` version of the tbtc.js library; this version can be adjusted in the [package.json](https://github.com/keep-network/tbtc-dapp/blob/master/package.json) file.

### Run

`npm start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Docker

To build a Docker image execute:

```bash
docker build . -t tbtc-dapp
```

To run the Docker image execute:

```bash
docker build . -t tbtc-dapp
```

This will expose the app under [http://localhost:8080](http://localhost:8080).

## Internal Testnet

To access the internal Keep testnet you need to be connected to it via VPN. Contracts with which the app is interacting are deployed under an address that depends on the current deployment; the latest `tbtc.js` version with prerelease id `pre` should point to the deployed version.

### MetaMask

To use the internal testnet, a custom network must be added to MetaMask:

**RPC URL**: [http://eth-tx-node.default.svc.cluster.local:8545/](http://eth-tx-node.default.svc.cluster.local:8545/)

**ChainID**: `1101`

