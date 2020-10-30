(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{565:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keep-ecdsa-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-ecdsa-setup"}},[e._v("#")]),e._v(" Keep-ECDSA Setup")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("The source code related to this section can be found in "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keep-ECDSA"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The on- and off-chain pieces of ECDSA keeps and Bonded ECDSA keeps for the Keep network. Builds on top of and requires the "),a("a",{attrs:{href:"https://github.com/keep-network/keep-core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("core system"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[e._v("#")]),e._v(" Contracts")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/solidity",target:"_blank",rel:"noopener noreferrer"}},[e._v("solidity"),a("OutboundLink")],1),e._v(" directory.")]),e._v(" "),a("h2",{attrs:{id:"getting-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-set-up"}},[e._v("#")]),e._v(" Getting Set Up")]),e._v(" "),a("p",[e._v("If you’re on macOS, install Homebrew and run "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/scripts/macos-setup.sh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("scripts/macos-setup.sh")]),a("OutboundLink")],1),e._v(". Note that if you don’t have Homebrew or you’re not on macOS, the below information details what you’ll need. The script additionally sets up pre-commit hooks.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9zY3JpcHRzL21hY29zLXNldHVwLnNoCg=="}}),e._v(" "),a("h2",{attrs:{id:"building"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[e._v("#")]),e._v(" Building")]),e._v(" "),a("p",[e._v("Currently the easiest way to build the client is using the "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Dockerfile")]),a("OutboundLink")],1),e._v(" at the root of the repository. A simple docker build should get you a functioning container.")]),e._v(" "),a("p",[e._v("To build manually, you’ll need to install "),a("code",[e._v("jq+")]),e._v(", "),a("code",[e._v("truffle")]),e._v(", and "),a("code",[e._v("npm")]),e._v(". Then you can follow the steps in the next section.")]),e._v(" "),a("h3",{attrs:{id:"quick-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-installation"}},[e._v("#")]),e._v(" Quick installation")]),e._v(" "),a("p",[e._v("To quickly install and start a single client use the installation script.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("To run the script some manual preparation is needed:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/development/Keep-Core/local_keep_network.html"}},[e._v("set up local ethereum chain")]),e._v(",")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/development/keep-ecdsa.html#configuration"}},[e._v("config file for the single client")]),e._v(" (default name: config.toml),")],1)]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/solidity/README.md#NPM-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm authorized to access private packages in GitHub’s Package Registry"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("p",[e._v("Please note that the client config file doesn’t have to be pre-configured with contracts addresses as they will be populated during installation.")]),e._v(" "),a("h4",{attrs:{id:"install-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-script"}},[e._v("#")]),e._v(" Install script")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/scripts/install.sh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("install.sh")]),a("OutboundLink")],1),e._v(" script will:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("fetch external contracts addresses,")])]),e._v(" "),a("li",[a("p",[e._v("migrate contracts,")])]),e._v(" "),a("li",[a("p",[e._v("build client.")])])]),e._v(" "),a("p",[e._v("The script will ask you for the password to previously created ethereum accounts.")]),e._v(" "),a("p",[e._v("To start the installation execute:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9zY3JpcHRzL2luc3RhbGwuc2gK"}}),e._v(" "),a("h4",{attrs:{id:"initialize-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-script"}},[e._v("#")]),e._v(" Initialize script")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/scripts/initialize.sh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("initialize.sh")]),a("OutboundLink")],1),e._v(" script should be called after external customer application contract (i.e. TBTCSystem) using keep-ecdsa is known. The script will:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("set address to the customer application,")])]),e._v(" "),a("li",[a("p",[e._v("initialize contracts,")])]),e._v(" "),a("li",[a("p",[e._v("update client contracts configuration.")])])]),e._v(" "),a("p",[e._v("The script will ask for the client config file path.")]),e._v(" "),a("p",[e._v("It also requires an external client application address which is an address of an external contract that will be requesting keeps creation. For local smoke test execution this address should be the same as the account you will use in the smoke test to request keep opening.")]),e._v(" "),a("p",[e._v("To start the initialization execute:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9zY3JpcHRzL2luaXRpYWxpemUuc2gK"}}),e._v(" "),a("h4",{attrs:{id:"start-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-client"}},[e._v("#")]),e._v(" Start client")]),e._v(" "),a("p",[e._v("To start the client execute:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9zY3JpcHRzL3N0YXJ0LnNoCg=="}}),e._v(" "),a("h2",{attrs:{id:"go-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-client"}},[e._v("#")]),e._v(" Go client")]),e._v(" "),a("h3",{attrs:{id:"prerequisites-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-2"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Building "),a("code",[e._v("keep-ecdsa")]),e._v(" requires Go version 1.13 or later.")]),e._v(" "),a("p",[e._v("Dependencies are managed by "),a("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modules"),a("OutboundLink")],1),e._v(" feature.")]),e._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),a("p",[e._v("To build execute a command:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IyBSZWdlbmVyYXRlIFNvbGlkaXR5IGJpbmRpbmdzCmdvIGdlbmVyYXRlIC4vLi4uCgpnbyBidWlsZCAuCg=="}}),e._v(" "),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),a("p",[e._v("To test execute a command:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z28gdGVzdCAuLy4uLgo="}}),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[a("code",[e._v("configs/config.toml")]),e._v(" is default path to the config file. To provide custom configuration CLI supports "),a("code",[e._v("--config")]),e._v(" flag. Sample configuration can be found in "),a("a",{attrs:{href:"https://github.com/keep-network/keep-ecdsa/blob/master/configs/config.toml.SAMPLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("config.toml.SAMPLE"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To run a smoke test execute:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"powershell",base64:"Y2Qgc29saWRpdHkvCnRydWZmbGUgZXhlYyBpbnRlZ3JhdGlvbi9zbW9rZV90ZXN0LmpzIC0tbmV0d29yayBsb2NhbAo="}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);