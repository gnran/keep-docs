(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{571:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"run-random-beacon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-random-beacon"}},[t._v("#")]),t._v(" Run Random Beacon")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("The source code related to this section can be found on "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keep-Beacon"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"system-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-considerations"}},[t._v("#")]),t._v(" System Considerations")]),t._v(" "),a("p",[t._v("The Keep Network expects certain capabilites for each node running on the network. To help attain these capabilities consider the following criteria:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("It is paramount that Keep nodes remain available to the Keep Network. We strongly encourage a stable and redundant internet connection.")])]),t._v(" "),a("li",[a("p",[t._v("A connection to a production grade self-hosted or third party Ethereum node deployment.")])]),t._v(" "),a("li",[a("p",[t._v("Persistent and redundant storage that will survive a VM or container rotation, and disk failure.")])]),t._v(" "),a("li",[a("p",[t._v("Each random beacon client running on the network requires a unique Ethereum operator account.")])]),t._v(" "),a("li",[a("p",[t._v("Each random beacon client running on the network requires a unique IP address or a unique application port running under the same IP.")])]),t._v(" "),a("li",[a("p",[t._v("Recommended machine types by provider:")])])]),t._v(" "),a("p",[t._v("Your operating environment will ultimately dictate what machine type to go with. This is particulary relevant if you’re running a containerized solution where multiple applications are sharing VM resources. The below types are sufficient for running at least one instance of the Keep Random Beacon client.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Cloud Provider")]),t._v(" "),a("th",[t._v("Machine Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Google Cloud")]),t._v(" "),a("td",[t._v("n1-standard-2")])]),t._v(" "),a("tr",[a("td",[t._v("AWS")]),t._v(" "),a("td",[t._v("t3.medium")])]),t._v(" "),a("tr",[a("td",[t._v("Azure")]),t._v(" "),a("td",[t._v("A2 v2")])]),t._v(" "),a("tr",[a("td",[t._v("Self-hosted")]),t._v(" "),a("td",[t._v("2 vCPU / 4 GiB RAM / 1 GiB Persistent Storage")])])])]),t._v(" "),a("h2",{attrs:{id:"gas-costs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-costs"}},[t._v("#")]),t._v(" Gas Costs")]),t._v(" "),a("p",[t._v("Random Beacon smart contracts reimburse the operator for successfully submitting relay entry and DKG result but they do not reimburse for submitting a group selection ticket. Reimbursements are sent to the beneficiary account and can be claimed along with rewards once the group expires. It is expected that the operators have enough ETH on the accounts used by clients to submit the required transactions and that the operator account balance is monitored and refilled as needed. Bear in mind that the higher stake is, the operator is selected more frequently and is expected to submit more transactions as a result.")]),t._v(" "),a("p",[t._v("Below is the average gas cost of the most important transactions the client is submitting:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TX")]),t._v(" "),a("th",[t._v("Gas Cost")]),t._v(" "),a("th",[t._v("Reimbursed")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Submit group selection ticket")]),t._v(" "),a("td",[t._v("140 000")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("Submit DKG result")]),t._v(" "),a("td",[t._v("1 740 000")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("Submit relay entry")]),t._v(" "),a("td",[t._v("280 000")]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("p",[t._v("For example, if the operator has 10 x minimum stake, it can submit 10 tickets. If the operator has been selected to the group with index 1, it is expected to submit DKG result and every relay entry the group will produce. Assuming the group produces 100 entries, the cost for the operator is "),a("code",[t._v("(10 * 140 000 + 1 740 000 + 100 * 280 000) * gas_price ETH")]),t._v(". It means that the operator needs to have on their account:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("For the gas price of 20 Gwei, at least 0.6228 ETH.")])]),t._v(" "),a("li",[a("p",[t._v("For the gas price of 100 Gwei, at least 3.114 ETH.")])]),t._v(" "),a("li",[a("p",[t._v("For the gas price of 800 Gwei, at least 24.912 ETH.")])])]),t._v(" "),a("p",[t._v("It is paramount that the operator accounts have some safety margin and consider the current gas price and stake when funding their accounts.")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" Network")]),t._v(" "),a("p",[t._v("Default port mappings.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Egress")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Ethereum Network")]),t._v(" "),a("td",[t._v("8545 / 8546")])]),t._v(" "),a("tr",[a("td",[t._v("Keep Network")]),t._v(" "),a("td",[t._v("3919")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Ingress")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Keep Network")]),t._v(" "),a("td",[t._v("3919")])])])]),t._v(" "),a("p",[t._v("If you set a different port in your "),a("code",[t._v("keep-client")]),t._v(" configuration, or configure "),a("code",[t._v("peers")]),t._v(" with non-default ports configured, firewall rules will need to be adjusted accordingly.")]),t._v(" "),a("h3",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),a("p",[t._v("Application configurations are stored in a "),a("code",[t._v(".toml")]),t._v(" file and passed to the application run command with the "),a("code",[t._v("--config")]),t._v(" flag.")]),t._v(" "),a("h4",{attrs:{id:"sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[t._v("#")]),t._v(" Sample")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBFdGhlcmV1bSBob3N0IGNvbm5lY3Rpb24gaW5mby4KW2V0aGVyZXVtXQogIFVSTCA9ICZxdW90O3dzOi8vMTI3LjAuMC4xOjg1NDYmcXVvdDsKICBVUkxSUEMgPSAmcXVvdDtodHRwOi8vMTI3LjAuMC4xOjg1NDUmcXVvdDsKCiMgS2VlcCBvcGVyYXRvciBFdGhlcmV1bSBhY2NvdW50LgpbZXRoZXJldW0uYWNjb3VudF0KICBBZGRyZXNzID0gJnF1b3Q7MHhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE4QUFBQUFBQUFBJnF1b3Q7CiAgS2V5RmlsZSA9ICZxdW90Oy9Vc2Vycy9zb21ldXNlci9ldGhlcmV1bS9kYXRhL2tleXN0b3JlL1VUQy0tMjAxOC0wMy0xMVQwMS0zNy0zMy4yMDI3NjU4ODdaLS1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE4QUFBQUFBQUFBJnF1b3Q7CgojIEtlZXAgY29udHJhY3QgYWRkcmVzc2VzIGNvbmZpZ3VyYXRpb24uCltldGhlcmV1bS5Db250cmFjdEFkZHJlc3Nlc10KICAjIEhleC1lbmNvZGVkIGFkZHJlc3Mgb2YgS2VlcFJhbmRvbUJlYWNvbk9wZXJhdG9yIGNvbnRyYWN0CiAgS2VlcFJhbmRvbUJlYWNvbk9wZXJhdG9yID0gJnF1b3Q7MHhCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCJnF1b3Q7CiAgIyBIZXgtZW5jb2RlZCBhZGRyZXNzIG9mIFRva2VuU3Rha2luZyBjb250cmFjdAogIFRva2VuU3Rha2luZyA9ICZxdW90OzB4Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQyZxdW90OwogICMgSGV4LWVuY29kZWQgYWRkcmVzcyBvZiBLZWVwUmFuZG9tQmVhY29uU2VydmljZSBjb250cmFjdC4gT25seSBuZWVkZWQKICAjIGluIGNhc2VzIHdoZXJlIHRoZSBjbGllbnQncyB1dGlsaXR5IGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWQgKGUuZy4sIHRoZQogICMgcmVsYXkgc3ViY29tbWFuZCkuCiAgS2VlcFJhbmRvbUJlYWNvblNlcnZpY2UgPSAmcXVvdDsweEREREREREREREREREREREREREREREREREREREREREREREREREREREQmcXVvdDsKCiMgS2VlcCBuZXR3b3JrIGNvbmZpZ3VyYXRpb24uCltMaWJQMlBdCiAgUGVlcnMgPSBbJnF1b3Q7L2lwNC8xMjcuMC4wLjEvdGNwLzM5MTkvaXBmcy9uak9YY05wVlR3ZU8zZm1YNzJPVGdEWDlsZmIxQVlpaXE0Qk42RGExdEZ5OW5UM3NSVDJoMSZxdW90OywgJnF1b3Q7L2RuczQvc29tZS1rZWVwLWhvc3QuY29tL3RjcC8zOTE5L2lwZnMvbmpPWGNOcFZUd2VPM2ZtWDcyT1RnRFg5bGZiMUFZaWlxNEJONkRhMXRGeTluVDNzUlQyaDEmcXVvdDtdCiAgUG9ydCAgPSAzOTIwCiAgIyBPdmVycmlkZSB0aGUgbm9kZSdzIGRlZmF1bHQgYWRkcmVzc2VzIGFubm91bmNlZCBpbiB0aGUgbmV0d29yawogIEFubm91bmNlZEFkZHJlc3NlcyA9IFsmcXVvdDsvZG5zNC9leGFtcGxlLmNvbS90Y3AvMzkxOSZxdW90OywgJnF1b3Q7L2lwNC84MC43MC42MC41MC90Y3AvMzkxOSZxdW90O10KCiMgU3RvcmFnZSBpcyBlbmNyeXB0ZWQKW1N0b3JhZ2VdCiAgRGF0YURpciA9ICZxdW90Oy9teS9zZWN1cmUvbG9jYXRpb24mcXVvdDsK"}}),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ethereum")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("URL")])]),t._v(" "),a("td",[t._v("The Ethereum host your keep-client will connect to. Websocket protocol/port")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("URLRPC")])]),t._v(" "),a("td",[t._v("The Ethereum host your keep-client will connect to. RPC protocol/port.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ethereum.account")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Address")])]),t._v(" "),a("td",[t._v("The Keep operator Ethereum account address.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("KeyFile")])]),t._v(" "),a("td",[t._v("The local filesystem path to your Keep operator Ethereum account keyfile.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ethereum.ContractAddresses")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("KeepRandomBeaconOperator")])]),t._v(" "),a("td",[t._v("Hex-encoded address of the KeepRandomBeaconOperator Contract")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("KeepRandomBeaconService")])]),t._v(" "),a("td",[t._v("Hex-encoded address of the KeepRandomBeaconService Contract.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("TokenStaking")])]),t._v(" "),a("td",[t._v("Hex-encoded address of the TokenStaking Contract.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("LibP2P")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Peers")])]),t._v(" "),a("td",[t._v("Comma separated list of network peers to boostrap against.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Port")])]),t._v(" "),a("td",[t._v("The port to run your instance of Keep on.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("AnnouncedAddresses")])]),t._v(" "),a("td",[t._v("Multiaddr formatted hostnames or addresses annouced to the Keep Network. More on multiaddr format in the libp2p reference.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("No")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Storage")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("DataDir")])]),t._v(" "),a("td",[t._v("Location to store the Keep nodes group membership details.")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("h2",{attrs:{id:"build-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-from-source"}},[t._v("#")]),t._v(" Build from Source")]),t._v(" "),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/development/Keep-Core/getting_started.html#building"}},[t._v("building")]),t._v(" section in our developer docs.")],1),t._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("h3",{attrs:{id:"get-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-image"}},[t._v("#")]),t._v(" Get Image")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/keepnetwork/keep-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/keepnetwork/keep-client/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Latest: "),a("code",[t._v("docker pull keepnetwork/keep-client")])]),t._v(" "),a("p",[t._v("Tag: "),a("code",[t._v("docker pull keepnetwork/keep-client:<tag-version>")])]),t._v(" "),a("h3",{attrs:{id:"run-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-image"}},[t._v("#")]),t._v(" Run Image")]),t._v(" "),a("p",[t._v("This is a sample run command for illustration purposes only.")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"ZXhwb3J0IEtFRVBfQ0xJRU5UX0VUSEVSRVVNX1BBU1NXT1JEPSQoY2F0IC5zZWNyZXRzL2V0aC1hY2NvdW50LXBhc3N3b3JkLnR4dCkKZXhwb3J0IEtFRVBfQ0xJRU5UX0NPTkZJR19ESVI9JChwd2QpL2NvbmZpZwpleHBvcnQgS0VFUF9DTElFTlRfUEVSU0lTVEVOQ0VfRElSPSQocHdkKS9wZXJzaXN0ZW5jZQoKZG9ja2VyIHJ1biAtZCBcCi0tZW50cnlwb2ludCAvdXNyL2xvY2FsL2Jpbi9rZWVwLWNsaWVudAotLXZvbHVtZSAkS0VFUF9DTElFTlRfUEVSU0lTVEVOQ0VfRElSOi9tbnQva2VlcC1jbGllbnQvcGVyc2lzdGVuY2UgXAotLXZvbHVtZSAkS0VFUF9DTElFTlRfQ09ORklHX0RJUjovbW50L2tlZXAtY2xpZW50L2NvbmZpZyBcCi0tZW52IEtFRVBfRVRIRVJFVU1fUEFTU1dPUkQ9JEtFRVBfQ0xJRU5UX0VUSEVSRVVNX1BBU1NXT1JEIFwKLS1lbnYgTE9HX0xFVkVMPWRlYnVnIFwKLS1sb2ctb3B0IG1heC1zaXplPTEwMG0gXAotLWxvZy1vcHQgbWF4LWZpbGU9MyBcCi1wIDM5MTk6MzkxOSBcCmtlZXBuZXR3b3JrL2tlZXAtY2xpZW50OiZsdDt2ZXJzaW9uJmd0OyAtLWNvbmZpZyAvbW50L2tlZXAtY2xpZW50L2NvbmZpZy9rZWVwLWNsaWVudC1jb25maWcudG9tbCBzdGFydAo="}}),t._v(" "),a("h2",{attrs:{id:"deployment-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-considerations"}},[t._v("#")]),t._v(" Deployment Considerations")]),t._v(" "),a("h3",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[t._v("#")]),t._v(" Kubernetes")]),t._v(" "),a("p",[t._v("At Keep we run on GCP + Kube. To accommodate the aforementioned system considerations we use the following pattern for each of our environments:")]),t._v(" "),a("p",[t._v("Regional Kube cluster.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("5 beacon clients, each running minimum stake required by the network.")])]),t._v(" "),a("li",[a("p",[t._v("A LoadBalancer Service for each client.")])]),t._v(" "),a("li",[a("p",[t._v("A StatefulSet for each client.")])])]),t._v(" "),a("p",[t._v("You can see our Ropsten Kube configurations "),a("a",{attrs:{href:"https://github.com/keep-network/keep-core/tree/master/infrastructure/kube/keep-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("p",[t._v("Below are some of the key things to look out for to make sure you’re booted and connected to the network:")]),t._v(" "),a("h3",{attrs:{id:"configurable-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-values"}},[t._v("#")]),t._v(" Configurable Values")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"TE9HX0xFVkVMPURFQlVHCklQRlNfTE9HR0lOR19GTVQ9bm9jb2xvcgpHT0xPR19GSUxFPS92YXIvbG9nL2tlZXAva2VlcC5sb2cKR09MT0dfVFJBQ0lOR19GSUxFPS92YXIvbG9nL2tlZXAvdHJhY2UuanNvbgo="}}),t._v(" "),a("h3",{attrs:{id:"startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startup"}},[t._v("#")]),t._v(" Startup")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"VHJ1c3QgbWF0aCwgbm90IGhhcmR3YXJlLgoKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KfCBLZWVwIFJhbmRvbSBCZWFjb24gTm9kZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCBQb3J0OiAzOTE5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCBJUHMgOiAvaXA0LzEyNy4wLjAuMS90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbUNjZlZwSHdmQktORmJRdWh2R3VGWEhWTFE2NWdCNHNKbTdIeXJjWnVMdHRIICAgIHwKfCAgICAgICAvaXA0LzEwLjEwMi4wLjExMi90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbUNjZlZwSHdmQktORmJRdWh2R3VGWEhWTFE2NWdCNHNKbTdIeXJjWnVMdHRIIHwKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0K"}}),t._v(" "),a("p",[a("strong",[t._v("Bonus")]),t._v(": If you want to share your LibP2P address with others you can get it from the startup log. When sharing remember to substitute the "),a("code",[t._v("/ipv4/")]),t._v(" address with the public facing IP of your client if you’re running on a private machine, or replace the entire "),a("code",[t._v("/ipv4/")]),t._v(" segment with a DNS entry if you’re using a hostname.")]),t._v(" "),a("h3",{attrs:{id:"peer-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peer-connections"}},[t._v("#")]),t._v(" Peer Connections")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"MjE6MTk6NDcuMTI5IERFQlVHIGtlZXAtbmV0LXc6IGNvbm5lY3RlZCB0byBbMV0gcGVlcnM6WzE2VWl1MkhBbTNlSnR5RktBdHR6Sjg1TkxNcm9tSHVSZzR5eXVtM0NSRU1mNkNIQkJWNktZXQo="}}),t._v(" "),a("h2",{attrs:{id:"eth-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-networks"}},[t._v("#")]),t._v(" ETH Networks")]),t._v(" "),a("h3",{attrs:{id:"mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[t._v("#")]),t._v(" Mainnet")]),t._v(" "),a("h4",{attrs:{id:"boostrap-peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boostrap-peers"}},[t._v("#")]),t._v(" Boostrap Peers")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JnF1b3Q7L2lwNC81NC4zOS4xNzkuNzMvdGNwLzM5MTkvaXBmcy8xNlVpdTJIQWt5WXR6Tm9XdUYzVUxhQTdSTWZWQXh2ZlFROVlSdlJUM1RLNHRYbXVadGFXaSZxdW90OywKJnF1b3Q7L2lwNC81NC4zOS4xODYuMTY2L3RjcC8zOTE5L2lwZnMvMTZVaXUySEFrekQ1bjRtdFRTZGR6cVZZM3dQSlptdHZXakFSVFNwcjRKYkRYOW45UERKUmgmcXVvdDssCiZxdW90Oy9pcDQvNTQuMzkuMTc5LjEzNC90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBa3V4Q3VXQTR6WG5zajlSNkEzYjNhMVRLVWpRdkJwQUVhSjk4S0dkR3VlNjdwJnF1b3Q7LAomcXVvdDsvZG5zNC9ic3QtYTAxLmNvcmUua2VlcC5ib2FyLm5ldHdvcmsvdGNwLzMwMDEvaXBmcy8xNlVpdTJIQWt6WUZIc3Fid3Q2NFp6dFdXSzFoeWVMbnRSTnFXTVlGaVpqYUt1MVBaZ2lrTiZxdW90OywKJnF1b3Q7L2RuczQvYnN0LWIwMS5jb3JlLmtlZXAuYm9hci5uZXR3b3JrL3RjcC8zMDAxL2lwZnMvMTZVaXUySEFreEx0dG1oM0c4TFl6QXkxVjFnMWIza2R1a3pZc2tqcHZ2NURpaFk0d3Z4N0QmcXVvdDssCiZxdW90Oy9kbnM0LzRkMDA2NjJmLWU1NmQtNDA0YS04MDNhLWNhYzAxYWRhM2UxNS5rZWVwLmJpc29uLnJ1bi90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbVYzSHFKamNiS014SG5EeER4NG0yaUVZeW55WWRzdlUzVndhZUU2WnJhMlA5JnF1b3Q7LAomcXVvdDsvZG5zNC9lYzFlYjM5MC0xMjRjLTRiMWItYmNmNy1jMjE3MDliYWYyYjIua2VlcC5oZXJkLnJ1bi90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbVZvNTFQcUVaTEFEZWhaRWJabnJwNUE3cWpSV0ZMajlFN0Rmd1pLVmhFUkZ0JnF1b3Q7LAomcXVvdDsvZG5zNC8yYWE5Yjc4Ni03MzYwLTRjMjItYWU3My1iZDk1YWY5YzExYzUua2VlcC5iaXNvbi5ydW4vdGNwLzM5MTkvaXBmcy8xNlVpdTJIQW05ZzNRclF6U3ZKOEZBaGdCMVBtak1OZ2pQZDNwRGFKSnFzZFNpc0dzbmFGZSZxdW90OywK"}}),t._v(" "),a("h4",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[t._v("#")]),t._v(" Contracts")]),t._v(" "),a("p",[t._v("Contract addresses needed to boot the Random Beacon client:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Token")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TokenStaking")]),t._v(" "),a("td",[a("code",[t._v("0x1293a54e160d1cd7075487898d65266081a15458")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("RandomBeacon")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("KeepRandomBeaconService")]),t._v(" "),a("td",[a("code",[t._v("0x50510e691c90ea098e3fdd23c311731bf394aafd")])])]),t._v(" "),a("tr",[a("td",[t._v("KeepRandomBeaconOperator")]),t._v(" "),a("td",[a("code",[t._v("0xdf708431162ba247ddae362d2c919e0fbafcf9de")])])])])]),t._v(" "),a("h3",{attrs:{id:"testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[t._v("#")]),t._v(" Testnet")]),t._v(" "),a("p",[t._v("Keep uses the Ethereum Ropsten Testnet.")]),t._v(" "),a("h4",{attrs:{id:"faucet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faucet"}},[t._v("#")]),t._v(" Faucet")]),t._v(" "),a("p",[t._v("The KEEP faucet will will issue a 300k KEEP token grant for the provided Ethereum account. You can use the faucet from your web browser or via a terminal using curl.")]),t._v(" "),a("p",[t._v("Faucet Endpoint: "),a("a",{attrs:{href:"https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("To use the faucet you need to pass your Ethereum account to the faucet endpoint with the parameter "),a("code",[t._v("?account=<eth-account-address>")]),t._v(".")]),t._v(" "),a("p",[t._v("Curl Example:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"curl",base64:"Y3VybCAnaHR0cHM6Ly91cy1jZW50cmFsMS1rZWVwLXRlc3QtZjNlMC5jbG91ZGZ1bmN0aW9ucy5uZXQva2VlcC1mYXVjZXQtcm9wc3Rlbj9hY2NvdW50PTB4MGVDMTRCQzdjQ0E4MmM5NDJDZjI3NkY2QmJEMDQxMzIxNmREQjJiRScK"}}),t._v(" "),a("p",[t._v("Browser Example:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"curl",base64:"aHR0cHM6Ly91cy1jZW50cmFsMS1rZWVwLXRlc3QtZjNlMC5jbG91ZGZ1bmN0aW9ucy5uZXQva2VlcC1mYXVjZXQtcm9wc3Rlbj9hY2NvdW50PTB4MGVDMTRCQzdjQ0E4MmM5NDJDZjI3NkY2QmJEMDQxMzIxNmREQjJiRQo="}}),t._v(" "),a("p",[t._v("Once you’ve got your KEEP token grant you can manage it with our "),a("a",{attrs:{href:"https://dashboard.test.keep.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("token dashboard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"bootstrap-peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-peers"}},[t._v("#")]),t._v(" Bootstrap Peers")]),t._v(" "),a("p",[t._v("Bootstrap peers will come and go on testnet. As long as at least one of your configured peers is up, there is no need to worry.")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JnF1b3Q7L2RuczQvYm9vdHN0cmFwLTEuY29yZS5rZWVwLnRlc3QuYm9hci5uZXR3b3JrL3RjcC8zMDAxL2lwZnMvMTZVaXUySEFrdVRVS05oNkhrZnZXQkVrZnRaYnFaSFBIaTNLYWs1WlV5Z0F4dnNkUTJVZ0cmcXVvdDssCiZxdW90Oy9kbnM0L2Jvb3RzdHJhcC0yLmNvcmUua2VlcC50ZXN0LmJvYXIubmV0d29yay90Y3AvMzAwMS9pcGZzLzE2VWl1MkhBbVFpckdydVpCdnRiTEhyNVNEZWJzWUdjcTZEanc3aWpGM2dua3FzZFFzM3dLJnF1b3Q7LAomcXVvdDsvZG5zNC9ib290c3RyYXAtMy50ZXN0LmtlZXAubmV0d29yay90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbThLSlgzMmtyM2VZVWhEdXp3VHVjU2ZBZnNwbmpuWE5mOXZlVmhCMTJ0NlZmJnF1b3Q7LAomcXVvdDsvZG5zNC9ib290c3RyYXAtMi50ZXN0LmtlZXAubmV0d29yay90Y3AvMzkxOS9pcGZzLzE2VWl1MkhBbU5OdUNwNDV6NWJnQjhLaVRIdjF2SFROQVZiQmd4eHRURkdBbmRhZ2VvOURwJnF1b3Q7Cg=="}}),t._v(" "),a("h4",{attrs:{id:"contracts-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts-2"}},[t._v("#")]),t._v(" Contracts")]),t._v(" "),a("p",[t._v("Contract addresses needed to boot the Random Beacon client:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Token")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TokenStaking")]),t._v(" "),a("td",[a("code",[t._v("0x234d2182B29c6a64ce3ab6940037b5C8FdAB608e")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("RandomBeacon")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("KeepRandomBeaconService")]),t._v(" "),a("td",[a("code",[t._v("0x6c04499B595efdc28CdbEd3f9ed2E83d7dCCC717")])])]),t._v(" "),a("tr",[a("td",[t._v("KeepRandomBeaconOperator")]),t._v(" "),a("td",[a("code",[t._v("0xC8337a94a50d16191513dEF4D1e61A6886BF410f")])])])])]),t._v(" "),a("h2",{attrs:{id:"staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),a("h3",{attrs:{id:"delegating-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegating-tokens"}},[t._v("#")]),t._v(" Delegating tokens")]),t._v(" "),a("p",[t._v("KEEP tokens are delegated by the owner. During the delegation, the owner needs to appoint an operator, beneficiary, and authorizer. Owner may delegate owned tokens or tokens from a grant. Owner may decide to delegate just a portion of owned tokens or just a part of tokens from a grant. Owner may delegate multiple times to different operators. Tokens can be delegated using Tokens page in "),a("a",{attrs:{href:"https://dashboard.test.keep.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KEEP token dashboard"),a("OutboundLink")],1),t._v(" and a certain minimum stake defined by the system is required to be provided in the delegation. The more stake is delegated, the higher chance to be selected to relay group.")]),t._v(" "),a("p",[t._v("Delegation takes immediate effect but can be cancelled within 12 hours without additional delay. After 12 hours operator appointed during the delegation becomes eligible for work selection.")]),t._v(" "),a("h3",{attrs:{id:"authorizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizations"}},[t._v("#")]),t._v(" Authorizations")]),t._v(" "),a("p",[t._v("Before operator is considered as eligible for work selection, authorizer appointed during the delegation needs to review and authorize Keep Random Beacon smart contract. Smart contracts can be authorized using KEEP token dashboard. Authorized operator contracts may slash or seize tokens in case of operator’s misbehavior.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);