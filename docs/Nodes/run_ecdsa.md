--- 
order: 2
---

# Run ECDSA Keep

::: warning
The source code related to this section can be found on [Keep-ECDSA](https://github.com/keep-network/keep-ecdsa)
:::

## System Considerations

The Keep Network expects certain capabilites for each node running on the network. To help attain these capabilities consider the following criteria:

* It is paramount that Keep nodes remain available to the Keep Network. We strongly encourage a stable and redundant internet connection.

* A connection to a production grade self-hosted or third party Ethereum node deployment.

* Persistent and redundant storage that will survive a VM or container rotation, and disk failure.

* Each Keep ECDSA client running on the network requires a unique Ethereum operator account.

* Each Keep ECDSA client running on the network requires a unique IP address or a unique application port running under the same IP.

* Recommended machine types by provider:

Your operating environment will ultimately dictate what machine type to go with. This is particulary relevant if you’re running a containerized solution where multiple applications are sharing VM resources. The below types are sufficient for running at least one instance of the Keep ECDSA client.

| Cloud Provider              |          Machine Type                  |
| ---------------------       | --------------------------|
| Google Cloud                | n2-highcpu-2           |
| AWS                         | c5.large          |
| Azure                       | F2s v2         |
| Self-hosted                 | 2 vCPU / 2 GiB RAM / 1 GiB Persistent Storage         |

## Gas Costs

Keep ECDSA smart contracts do not reimburse the operator for submitted transactions. It is the responsibility of the application using ECDSA keeps to make sure operators are rewarded accordingly and the outcomes are net-positive. It is expected that the operators have enough ETH on the accounts used by clients to submit the required transactions and that the operator account balance is monitored and refilled as needed. Bear in mind that the higher stake is and the higher unbonded value is, the operator is selected more frequently and is expected to submit more transactions as a result.

Below is the average gas cost of the most important transactions the client is submitting:

| TX            |          Gas Cost                | Reimbursed|
| ---------------------       | --------------------------|--------|
| Submit keep public key              | 150 000          |No|
| Submit keep signature                      | 30 500 |Yes|
| Update operator status in sortition pool   | 125 000 |Yes|

For example, if we expect the operator to handle 100 keeps by submitting all the transactions mentioned above for each keep, the operator needs to have `100 * (150 000 + 30 500 + 125 000) * gas_price` ETH on the account:

* For the gas price of 20 Gwei, this is at least 0.611 ETH.

* For the gas price of 100 Gwei, this is at least 3.055 ETH.

* For the gas price of 800 Gwei, this is at least 24.44 ETH.

It is paramount that the operators have some safety margin and consider the current gas price, stake, and unbonded value when funding their accounts.

## Configuration

### Network

| Egress              |          Port                 |
| ---------------------       | --------------------------|
| Ethereum Network               | TCP: `8545` / `8546`     |
| Keep Network                       | TCP: `3919`    |

| Ingress           |          Port                 |
| ---------------------       | --------------------------|
| Keep Network               | `3919`        |

If you set a different `port` in your keep-ecdsa configuration, or configure `peers` with non-default ports configured, firewall rules will need to be adjusted accordingly.

### Application

Application configurations are stored in a `.toml` file and passed to the application run command with the `--config` flag.

#### Sample

```bash
# This is a TOML configuration file.

# Connection details of ethereum blockchain.
[ethereum]
  URL = "ws://127.0.0.1:8545"
  URLRPC = "http://127.0.0.1:8546"

[ethereum.account]
  KeyFile = "/Users/someuser/ethereum/data/keystore/UTC--2018-03-11T01-37-33.202765887Z--AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAA"

# Addresses of contracts deployed on ethereum blockchain.
[ethereum.ContractAddresses]
  BondedECDSAKeepFactory = "0xCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"

# Addresses of applications approved by the operator.
[SanctionedApplications]
  Addresses = [
    "0xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "0xEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  ]

[Storage]
  DataDir = "/my/secure/location"

[LibP2P]
  Peers = ["/ip4/127.0.0.1/tcp/3919/ipfs/njOXcNpVTweO3fmX72OTgDX9lfb1AYiiq4BN6Da1tFy9nT3sRT2h1"]
  Port = 3919
  # Uncomment to override the node's default addresses announced in the network
  AnnouncedAddresses = ["/dns4/example.com/tcp/3919", "/ip4/80.70.60.50/tcp/3919"]

[TSS]
# Timeout for TSS protocol pre-parameters generation. The value
# should be provided based on resources available on the machine running the client.
# This is an optional parameter, if not provided timeout for TSS protocol
# pre-parameters generation will be set to `2 minutes`.
  PreParamsGenerationTimeout = "2m30s"
```

#### Parameters

| ethereum          |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `URL`               | The Ethereum host your keep-ecdsa will connect to. Websocket protocol/port.     |""|Yes|
| `URLRPC`                      | The Ethereum host your keep-ecdsa will connect to. RPC protocol/port.        |""|Yes|

| ethereum.account          |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `KeyFile`                      | The local filesystem path to your Keep operator Ethereum account keyfile.        |""|Yes|

|ethereum.ContractAddresses           |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `BondedECDSAKeepFactory`               | 	Hex-encoded address of the BondedECDSAKeepFactory Contract.     |[""]|Yes|

| SanctionedApplications           |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `Addresses`               |Comma delimited hex-encoded list of application addresses authorized to bond for a given operator.|""|Yes|

| LibP2P          |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `Peers`               | 	Comma separated list of network peers to boostrap against.       |[""]|Yes|
| `Port`                      | The port to run your instance of Keep on. |3919|Yes|
| `AnnouncedAddresses`    | Multiaddr formatted hostnames or addresses annouced to the Keep Network. More on multiaddr format in the libp2p reference. |[""]|No|

| Storage        |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `DataDir`               | 	Location to store the Keep nodes group membership details.|""|Yes|

| TSS        |          Description                 |Default|Required|
| ---------------------       | --------------------------|--------------------------|--------------------------|
| `PreParamsGenerationTimeout`               | 	Timeout for TSS protocol pre-parameters generation.|"2m"|No|

## Build from Source

See the [building](/development/Keep-Core/getting_started.html#building) section in our developer docs.

## Docker

### Get Image

[https://hub.docker.com/r/keepnetwork/keep-ecdsa-client/](https://hub.docker.com/r/keepnetwork/keep-ecdsa-client/)

Latest: `docker pull keepnetwork/keep-ecdsa-client`

Tag: `docker pull keepnetwork/keep-ecdsa-client:<tag-version>`

### Run Image

This is a sample run command for illustration purposes only.

```js
export KEEP_ECDSA_ETHEREUM_PASSWORD=$(cat .secrets/eth-account-password.txt)
export KEEP_ECDSA_CONFIG_DIR=$(pwd)/config
export KEEP_ECDSA_PERSISTENCE_DIR=$(pwd)/persistence

docker run -d \
--entrypoint /usr/local/bin/keep-ecdsa \
--volume $KEEP_ECDSA_PERSISTENCE_DIR:/mnt/keep-ecdsa/persistence \
--volume $KEEP_ECDSA_CONFIG_DIR:/mnt/keep-ecdsa/config \
--env KEEP_ETHEREUM_PASSWORD=$KEEP_ECDSA_ETHEREUM_PASSWORD \
--env LOG_LEVEL=debug \
--log-opt max-size=100m \
--log-opt max-file=3 \
-p 3919:3919 \
keepnetwork/keep-ecdsa-client:<version> --config /mnt/keep-ecdsa/config/keep-ecdsa-config.toml start
```

##  Deployment Considerations

### Kubernetes

At Keep we run on GCP + Kube. To accommodate the aforementioned system considerations we use the following pattern for each of our environments:

Regional Kube cluster.

* 5 ECDSA clients, each running minimum stake required by the network.

* A LoadBalancer Service for each client.

* A StatefulSet for each client.

You can see our Ropsten Kube configurations [here](https://github.com/keep-network/keep-ecdsa/tree/master/infrastructure/kube/keep-test)

## Logging

Below are some of the key things to look out for to make sure you’re booted and connected to the network:

### Configurable Values

```bash
LOG_LEVEL=DEBUG
IPFS_LOGGING_FMT=nocolor
GOLOG_FILE=/var/log/keep/keep.log
GOLOG_TRACING_FILE=/var/log/keep/trace.json
```

### Startup

```powershell
Trust math, not hardware.

-----------------------------------------------------------------------------------------------
| Keep ECDSA Node                                                                             |
|                                                                                             |
| Port: 3919                                                                                  |
| IPs : /ip4/127.0.0.1/tcp/3919/ipfs/16Uiu2HAmCcfVpHwfBKNFbQuhvGuFXHVLQ65gB4sJm7HyrcZuLttH    |
|       /ip4/10.102.0.112/tcp/3919/ipfs/16Uiu2HAmCcfVpHwfBKNFbQuhvGuFXHVLQ65gB4sJm7HyrcZuLttH |
-----------------------------------------------------------------------------------------------
```

**Bonus**: If you want to share your LibP2P address with others you can get it from the startup log. When sharing remember to substitute the `/ipv4/` address with the public facing IP of your client if you’re running on a private machine, or replace the entire `/ipv4/` segment with a DNS entry if you’re using a hostname.

### Peer Connections

```js
21:19:47.129 DEBUG keep-net-w: connected to [1] peers:[16Uiu2HAm3eJtyFKAttzJ85NLMromHuRg4yyum3CREMf6CHBBV6KY]
```

## ETH Networks

### Mainnet

#### Boostrap Peers

```js
"/dns4/bst-a01.ecdsa.keep.boar.network/tcp/4001/ipfs/16Uiu2HAkzYFHsqbwt64ZztWWK1hyeLntRNqWMYFiZjaKu1PZgikN",
"/dns4/bst-b01.ecdsa.keep.boar.network/tcp/4001/ipfs/16Uiu2HAkxLttmh3G8LYzAy1V1g1b3kdukzYskjpvv5DihY4wvx7D"
```

#### Contracts

Contract addresses needed to boot a Keep ECDSA client:

| Bonding        |                          |
| ---------------------       | --------------------------|
| BondedECDSAKeepFactory             | 	`0xA7d9E842EFB252389d613dA88EDa3731512e40bD`|
| Sanctioned Applications         | 	`0xe20A5C79b39bC8C363f0f49ADcFa82C2a01ab64a` (tBTC’s system contract)|
| tBTC Sortition pool (for authorization)         | 	`0xa3748633c6786e1842b5cc44fa43db1ecc710501`|

### Testnet

Keep uses the Ethereum Ropsten Testnet.

#### Faucet

The KEEP faucet will will issue a 300k KEEP token grant for the provided Ethereum account. You can use the faucet from your web browser or via a terminal using curl.

Faucet Endpoint: [https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten](https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten)

To use the faucet you need to pass your Ethereum account to the faucet endpoint with the parameter `?account=<eth-account-address>`.

Curl Example:

```bash
curl 'https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten?account=0x0eC14BC7cCA82c942Cf276F6BbD0413216dDB2bE'
```
Browser Example:

```powershell
https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten?account=0x0eC14BC7cCA82c942Cf276F6BbD0413216dDB2bE
```

Once you’ve got your KEEP token grant you can manage it with our [token dashboard](https://dashboard.test.keep.network/).


#### Bootstrap Peers

Bootstrap peers will come and go on testnet. As long as at least one of your configured peers is up, there is no need to worry.

```js
"/dns4/bootstrap-1.ecdsa.keep.test.boar.network/tcp/4001/ipfs/16Uiu2HAmPFXDaeGWtnzd8s39NsaQguoWtKi77834A6xwYqeicq6N",
"/dns4/ecdsa-2.test.keep.network/tcp/3919/ipfs/16Uiu2HAmNNuCp45z5bgB8KiTHv1vHTNAVbBgxxtTFGAndageo9Dp",
"/dns4/ecdsa-3.test.keep.network/tcp/3919/ipfs/16Uiu2HAm8KJX32kr3eYUhDuzwTucSfAfspnjnXNf9veVhB12t6Vf",
```

#### Contracts

Contract addresses needed to boot a Keep ECDSA client:

| Bonding        |                          |
| ---------------------       | --------------------------|
| BondedECDSAKeepFactory             | 	`0x9EcCf03dFBDa6A5E50d7aBA14e0c60c2F6c575E6`|
| Sanctioned Applications         | 	`0xc3f96306eDabACEa249D2D22Ec65697f38c6Da69` (tBTC’s system contract)|
| tBTC Sortition pool (for authorization)         | 	`0x20F1f14a42135d3944fEd1AeD2bE13b01c152054`|

## Staking

### Delegating tokens

KEEP tokens are delegated by the owner. During the delegation, the owner needs to appoint an operator, beneficiary, and authorizer. Owner may delegate owned tokens or tokens from a grant. Owner may decide to delegate just a portion of owned tokens or just a part of tokens from a grant. Owner may delegate multiple times to different operators. Tokens can be delegated using Tokens page in [token dashboard](https://dashboard.test.keep.network/) and a certain minimum stake defined by the system is required to be provided in the delegation. The more stake is delegated, the higher chance to be selected to relay group.

Delegation takes immediate effect but can be cancelled within 12 hours without additional delay. After 12 hours operator appointed during the delegation becomes eligible for work selection.

### Authorizations

Before operator is considered as eligible for work selection, the authorizer appointed during the delegation needs to review and perform the following authorizations:

**_BondedECDSAKeepFactory operator contract_**

Allows the factory to slash tokens on misbehaviour and makes the operator eligible for work selection. This is an operator contract much like the `KeepRandomBeaconOperator` contract. Uses `tokenStaking.authorizeOperatorContract`.

**_Bond Access for tBTC_**

Allows for the authorized application (tBTC) to bond from the available bond value stored in the `KeepBonding` contract. Uses `keepBonding.authorizeSortitionPoolContract`.

These smart contracts can be authorized using the KEEP token dashboard. As always, authorized operator contracts may slash or seize tokens in case of operator misbehavior. Contracts authorized for bonding are set in `SanctionedApplications.Addresses` in the config file. The operator must explicitly register as a candidate for selection, as a safeguard against choosing clients that have not yet booted up; the sanctioned applications list allows the client software to automatically register as a candidate on startup.
