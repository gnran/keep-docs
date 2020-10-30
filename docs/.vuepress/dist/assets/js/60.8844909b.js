(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{562:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"keep-developer-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keep-developer-documentation"}},[e._v("#")]),e._v(" Keep developer documentation")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("The source code related to this section can be found on "),o("a",{attrs:{href:"https://github.com/keep-network/keep-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keep-Core"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"getting-set-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-set-up"}},[e._v("#")]),e._v(" Getting Set Up")]),e._v(" "),o("p",[e._v("If you’re on macOS, install Homebrew and run "),o("a",{attrs:{href:"https://github.com/keep-network/keep-core/blob/master/scripts/macos-setup.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("scripts/macos-setup.sh"),o("OutboundLink")],1),e._v(". Note that if you don’t have Homebrew or you’re not on macOS, the below information details what you’ll need. The script additionally sets up pre-commit hooks.")]),e._v(" "),o("h2",{attrs:{id:"building"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[e._v("#")]),e._v(" Building")]),e._v(" "),o("p",[e._v("Currently the easiest way to build is using the "),o("a",{attrs:{href:"https://github.com/keep-network/keep-core/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile"),o("OutboundLink")],1),e._v(" at the root of the repository. A simple docker build should get you a functioning container.")]),e._v(" "),o("p",[e._v("If you want to build natively, there are a few prereqs you’ll need to go through. In particular, you’ll need the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf compiler"),o("OutboundLink")],1),e._v(". You’ll also need to install the "),o("code",[e._v("protoc-gen-gogoslick")]),e._v(" toolchain, which you can install using go get:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Z28gZ2V0IC11IGdpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9wcm90b2MtZ2VuLWdvZ29zbGljawo="}}),e._v(" "),o("p",[e._v("Run "),o("code",[e._v("go generate ./.../")]),e._v(" from "),o("code",[e._v("keep-core")]),e._v(" and if everything is fine, start the Keep client with "),o("code",[e._v("go run main.go")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"quick-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-installation"}},[e._v("#")]),e._v(" Quick installation")]),e._v(" "),o("p",[e._v("To quickly install and start a client use the following scripts.")]),e._v(" "),o("h3",{attrs:{id:"install-script"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-script"}},[e._v("#")]),e._v(" Install script")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/keep-network/keep-core/blob/master/scripts/install.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("install.sh"),o("OutboundLink")],1),e._v(" script will:")]),e._v(" "),o("ul",[o("li",[e._v("migrate contracts")]),e._v(" "),o("li",[e._v("update client config files")]),e._v(" "),o("li",[e._v("build client")])]),e._v(" "),o("p",[e._v("The script will ask you for the password to previously created ethereum accounts.")]),e._v(" "),o("p",[e._v("To start the installation execute:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Li9zY3JpcHRzL2luc3RhbGwuc2gK"}}),e._v(" "),o("h3",{attrs:{id:"starting-a-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-client"}},[e._v("#")]),e._v(" Starting a client")]),e._v(" "),o("p",[e._v("To start a client execute:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Li9zY3JpcHRzL3N0YXJ0LnNoCg=="}}),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/keep-network/keep-core/blob/master/scripts/start.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("start.sh"),o("OutboundLink")],1),e._v(" script will ask you to:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("provide ethereum password")])]),e._v(" "),o("li",[o("p",[e._v("provide path to "),o("code",[e._v("keep-core")]),e._v(" config files directory")])]),e._v(" "),o("li",[o("p",[e._v("select a config "),o("code",[e._v(".toml")]),e._v(" file for your client")])])]),e._v(" "),o("h2",{attrs:{id:"development-guidelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-guidelines"}},[e._v("#")]),e._v(" Development Guidelines")]),e._v(" "),o("p",[e._v("There are two primary languages in the Keep code right now:")]),e._v(" "),o("ul",[o("li",[o("p",[o("em",[e._v("Go")])]),e._v(" "),o("p",[e._v("Go code largely adheres to community practices where they have been decided. Divergences and additional tidbits are listed in the "),o("RouterLink",{attrs:{to:"/development/Keep-Core/go_guidelines.html"}},[e._v("Go Guidelines")]),e._v(" document.")],1)]),e._v(" "),o("li",[o("p",[o("em",[e._v("Solidity")])]),e._v(" "),o("p",[e._v("Solidity code generally adheres to the "),o("a",{attrs:{href:"https://solidity.readthedocs.io/en/latest/style-guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solidity style guide"),o("OutboundLink")],1),e._v(". Contracts and their functions are documented using the "),o("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/Ethereum-Natural-Specification-Format",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum Natural Specification Format"),o("OutboundLink")],1),e._v(" (NatSpec).")])])]),e._v(" "),o("h2",{attrs:{id:"common-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[e._v("#")]),e._v(" Common problems")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Please avoid using "),o("code",[e._v("~")]),e._v(" when defining "),o("code",[e._v("$GOBIN")]),e._v(" location and use "),o("code",[e._v("$HOME")]),e._v(" instead. We’ve been observing "),o("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/issues/3355",target:"_blank",rel:"noopener noreferrer"}},[e._v("some issues"),o("OutboundLink")],1),e._v(" with locating "),o("code",[e._v("protoc-gen-gogoslick")]),e._v(" when running "),o("code",[e._v("go generate")]),e._v(" and "),o("code",[e._v("$GOBIN")]),e._v(" contained "),o("code",[e._v("~")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("For Mojave, if you have a problem with missing include or missing library and you are sure that you have installed "),o("code",[e._v("xcode with xcode-select --install")]),e._v(". Then install the following package: "),o("code",[e._v("/Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg")])])])]),e._v(" "),o("h2",{attrs:{id:"working-with-solidity-contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-solidity-contracts"}},[e._v("#")]),e._v(" Working with Solidity contracts")]),e._v(" "),o("p",[e._v("The fastest and easiest way to have local Ethereum testent is to use Ganache app. "),o("a",{attrs:{href:"https://www.trufflesuite.com/ganache",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://truffleframework.com/ganache/"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("You can also use a demo script to help you deploy contracts to your local testnet and to have demo balances (token, staking and token grants) allocated between first two accounts.")]),e._v(" "),o("p",[e._v("Go to "),o("code",[e._v("solidity")]),e._v(" directory and run:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"bnBtIGluc3RhbGwKbnBtIHJ1biBkZW1vCg=="}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);