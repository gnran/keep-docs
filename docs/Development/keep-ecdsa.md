
# Keep-ECDSA Setup

:::warning
The source code related to this section can be found in [Keep-ECDSA](https://github.com/keep-network/keep-ecdsa)
:::

The on- and off-chain pieces of ECDSA keeps and Bonded ECDSA keeps for the Keep network. Builds on top of and requires the [core system](https://github.com/keep-network/keep-core/)

## Contracts

See [solidity](https://github.com/keep-network/keep-ecdsa/blob/master/solidity) directory.

## Getting Set Up

If you’re on macOS, install Homebrew and run [`scripts/macos-setup.sh`](https://github.com/keep-network/keep-ecdsa/blob/master/scripts/macos-setup.sh). Note that if you don’t have Homebrew or you’re not on macOS, the below information details what you’ll need. The script additionally sets up pre-commit hooks.

```bash
./scripts/macos-setup.sh
```
## Building

Currently the easiest way to build the client is using the [`Dockerfile`](https://github.com/keep-network/keep-ecdsa/blob/master/Dockerfile) at the root of the repository. A simple docker build should get you a functioning container.

To build manually, you’ll need to install `jq+`, `truffle`, and `npm`. Then you can follow the steps in the next section.

### Quick installation

To quickly install and start a single client use the installation script.

#### Prerequisites

To run the script some manual preparation is needed:

* [set up local ethereum chain](/development/Keep-Core/local_keep_network.md),

* [config file for the single client](/development/keep-ecdsa.md#configuration) (default name: config.toml),

* [npm authorized to access private packages in GitHub’s Package Registry](https://github.com/keep-network/keep-ecdsa/blob/master/solidity/README.md#NPM-dependencies).

Please note that the client config file doesn’t have to be pre-configured with contracts addresses as they will be populated during installation.

#### Install script

The [`install.sh`](https://github.com/keep-network/keep-ecdsa/blob/master/scripts/install.sh) script will:

* fetch external contracts addresses,

* migrate contracts,

* build client.

The script will ask you for the password to previously created ethereum accounts.

To start the installation execute:

```bash
./scripts/install.sh
```

#### Initialize script

The [`initialize.sh`](https://github.com/keep-network/keep-ecdsa/blob/master/scripts/initialize.sh) script should be called after external customer application contract (i.e. TBTCSystem) using keep-ecdsa is known. The script will:

* set address to the customer application,

* initialize contracts,

* update client contracts configuration.

The script will ask for the client config file path.

It also requires an external client application address which is an address of an external contract that will be requesting keeps creation. For local smoke test execution this address should be the same as the account you will use in the smoke test to request keep opening.

To start the initialization execute:

```bash
./scripts/initialize.sh
```

#### Start client

To start the client execute:

```bash
./scripts/start.sh
```

## Go client

### Prerequisites

Building `keep-ecdsa` requires Go version 1.13 or later.

Dependencies are managed by [Modules](https://github.com/golang/go/wiki/Modules) feature.

### Build

To build execute a command:

```go
# Regenerate Solidity bindings
go generate ./...

go build .
```

### Test

To test execute a command:

```go
go test ./...
```

### Configuration

`configs/config.toml` is default path to the config file. To provide custom configuration CLI supports `--config` flag. Sample configuration can be found in [config.toml.SAMPLE](https://github.com/keep-network/keep-ecdsa/blob/master/configs/config.toml.SAMPLE).

To run a smoke test execute:

```powershell
cd solidity/
truffle exec integration/smoke_test.js --network local
```