--- 
order: 1
---

# Keep developer documentation

::: warning
The source code related to this section can be found on [Keep-Core](https://github.com/keep-network/keep-core)
:::

## Getting Set Up

If you’re on macOS, install Homebrew and run [scripts/macos-setup.sh](https://github.com/keep-network/keep-core/blob/master/scripts/macos-setup.sh). Note that if you don’t have Homebrew or you’re not on macOS, the below information details what you’ll need. The script additionally sets up pre-commit hooks.

## Building

Currently the easiest way to build is using the [Dockerfile](https://github.com/keep-network/keep-core/blob/master/Dockerfile) at the root of the repository. A simple docker build should get you a functioning container.

If you want to build natively, there are a few prereqs you’ll need to go through. In particular, you’ll need the [protobuf compiler](https://developers.google.com/protocol-buffers/docs/downloads). You’ll also need to install the `protoc-gen-gogoslick` toolchain, which you can install using go get:

```js
go get -u github.com/gogo/protobuf/protoc-gen-gogoslick
```

Run `go generate ./.../` from `keep-core` and if everything is fine, start the Keep client with `go run main.go`.

## Quick installation

To quickly install and start a client use the following scripts.

### Install script

The [install.sh](https://github.com/keep-network/keep-core/blob/master/scripts/install.sh) script will:
* migrate contracts
* update client config files
* build client

The script will ask you for the password to previously created ethereum accounts.

To start the installation execute:

```js
./scripts/install.sh
```
### Starting a client

To start a client execute:

```js
./scripts/start.sh
```
The [start.sh](https://github.com/keep-network/keep-core/blob/master/scripts/start.sh) script will ask you to:

* provide ethereum password

* provide path to `keep-core` config files directory

* select a config `.toml` file for your client

## Development Guidelines

There are two primary languages in the Keep code right now:

* _Go_
  
  Go code largely adheres to community practices where they have been decided. Divergences and additional tidbits are listed in the [Go Guidelines](/development/Keep-Core/go_guidelines.md) document.

* _Solidity_

   Solidity code generally adheres to the [Solidity style guide](https://solidity.readthedocs.io/en/latest/style-guide.html). Contracts and their functions are documented using the [Ethereum Natural Specification Format](https://github.com/ethereum/wiki/wiki/Ethereum-Natural-Specification-Format) (NatSpec).

## Common problems

* Please avoid using `~` when defining `$GOBIN` location and use `$HOME` instead. We’ve been observing [some issues](https://github.com/protocolbuffers/protobuf/issues/3355) with locating `protoc-gen-gogoslick` when running `go generate` and `$GOBIN` contained `~`.
   
* For Mojave, if you have a problem with missing include or missing library and you are sure that you have installed `xcode with xcode-select --install`. Then install the following package: `/Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg`

## Working with Solidity contracts

The fastest and easiest way to have local Ethereum testent is to use Ganache app. [https://truffleframework.com/ganache/](https://www.trufflesuite.com/ganache)

You can also use a demo script to help you deploy contracts to your local testnet and to have demo balances (token, staking and token grants) allocated between first two accounts.

Go to `solidity` directory and run:
```js
npm install
npm run demo
```



