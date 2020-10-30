--- 
order: 2
---

# Authorize Contracts

In order to authorize contracts, first select an application to manage from the Applications tab. There are currently two options: Random Beacon and tBTC

## tBTC and Random Beacon Applications

On the Applications page, you can see what applications are available. Currently, you will see two options. The first is tBTC. Clicking "Manage" will allow you to authorize operator contracts specific to t-ECDSA Keeps and add ETH for bonding. The second is Random Beacon, which allows you to authorize contracts specific to the beacon. 

The role that authorizes contracts is know as the **authorizer** within the dApp.

The authorizer role is usually assigned to the owner, or you may wish to assign this role to the Keep team or your staking provider. Authorizer key action is only required when you first set up roles and approve contracts before staking can begin, and then during every smart contract upgrade.   

![img](/dashboard/d6.png)

### What are operator contracts?

All system rules are defined in the operator contracts, like all rules of slashing or calls for liquidation. Operator contracts are also always checking for staker misbehavior, and if any misbehavior is detected it contacts the token staking contract. 

### Authorize Random Beacon contracts

To authorize Random Beacon contracts, first click the Manage button on the Random Beacon application card. Then, you’ll see a list of operator contracts for you to authorize (example pictured below). 

For Random Beacon, there is one contract at the beginning for you to authorize. If you’re an authorizer but not a token holder (such as a staking provider or a separate in-house staking address), you’ll see the address of the contract that authorized you.

![img](/dashboard/d7.png)

### Authorize tBTC Contracts

To authorize tBTC contracts, first click the Manage button on the tTBC application card. Then, you’ll see a list of operator contracts for you to authorize. For tBTC, there are two contracts for you to authorize. 

![img](/dashboard/d8.png)

::: tip
You must authorize both tBTC contracts before you are able to add ETH for bonding.
:::

We will be in touch if there are new contracts to authorize after main net launch, and you’ll always be able to see any new contract upgrades that need authorization here in the dashboard.

