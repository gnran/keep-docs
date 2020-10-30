module.exports = {
  theme: "cosmos",
  title: "Keep Network",
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/K-fav.png' }]
  ],
  themeConfig: {
    custom: true,
    label:  false,
    editLinks: true,
    repo: "keep-docs/docs",
    docsRepo: "keep-docs/docs",
    docsDir: "/",
    topbar: {
      banner: false
    },
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'lololo',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      }
    ],
    displayAllHeaders: true,
    sidebar: {
      auto: false,
      nav: [
        {
          title: "Documentation",
          children: [
            {
              title: "Keep network",
              children: [
                {
                  title: "Introduction",
                  path: "/Keep-Network/intro",
                }
              ]             
            },
            {
              title: "Random Beacon",
              children: [
                {
                  title: "Overview",
                  path: "/Random-Beacon/intro",
                },
                {
                  title: "Staking",
                  path: "/Random-Beacon/staking",
                },
                {
                  title: "Missbehavior and Punishment",
                  path: "/Random-Beacon/missbehavior_and_punishment",
                },
                {
                  title: "Upgrade management",
                  path: "/Random-Beacon/upgrade_managment",
                }
              ]
              
            },
            {
              title: "tBTC",
              children: [
                {
                  title: "Introduction",
                  path: "/tBTC/intro",
                },
                {
                  title: "Deposits",
                  path: "/tBTC/deposits",
                },
                {
                  title: "Bonding",
                  path: "/tBTC/bonding",
                },
                {
                  title: "Price Feed",
                  path: "/tBTC/price-feed",
                },
                {
                  title: "Minting",
                  path: "/tBTC/minting",
                },
                {
                  title: "Signer Fees",
                  path: "/tBTC/signer-fees",
                },
                {
                  title: "Signing",
                  path: "/tBTC/signing",
                },
                {
                  title: "Handling Failure",
                  path: "/tBTC/handling-failure",
                },
                {
                  title: "Redemption",
                  path: "/tBTC/redemption",
                },
                {
                  title: "Governance",
                  path: "/tBTC/governance",
                },
              ]
              
            },
            {
              title: "Running a Node",
              children: [
                {
                  title: "Run Random Beacon",
                  path: "/Nodes/run_random_beacon",
                },
                {
                  title: "Run ECDSA",
                  path: "/Nodes/run_ecdsa",
                },
              ]
            },
            {
              title: "Staking",
              children: [
                {
                  title: "Introduction",
                  path: "/Staking/intro",
                },
                {
                  title: "Rewards",
                  path: "/Staking/rewards",
                },
                {
                  title: "Incentive Model",
                  path: "/Staking/incentive_model",
                },
                {
                  title: "Slashing and Liquidation",
                  path: "/Staking/slashing_and_liquidation",
                },
                {
                  title: "Staking Providers",
                  path: "/Staking/staking_providers",
                },
                {
                  title: "KEEP Token Dashboard",
                  children: [
                    {
                      title: "Delegate Stake",
                      path: "/Staking/Dashboard/delegate_stake",
                    },
                    {
                      title: "Authorize Contracts",
                      path: "/Staking/Dashboard/authorize_contracts",
                    },  
                    {
                      title: "Add ETH for Bonding",
                      path: "/Staking/Dashboard/add_for_bonding",
                    },
                    {
                      title: "Manage Stake",
                      path: "/Staking/Dashboard/manage_stake",
                    },
                    {
                      title: "Claim Rewards",
                      path: "/Staking/Dashboard/claim_rewards",
                    },
                    {
                      title: "Withdraw Tokens",
                      path: "/Staking/Dashboard/withdraw_tokens",
                    },
                  ]  
                },
              ]
            },
            {
              title: "Development",
              children: [
                {
                  title: "Keep Core",
                  children: [
                    {
                      title: "Getting started",
                      path: "/development/Keep-Core/getting_started",
                    },
                    {
                      title: "Local Keep network",
                      path: "/development/Keep-Core/local_keep_network",
                    },
                    {
                      title: "Go Guidelines",
                      path: "/development/Keep-Core/go_guidelines",
                    },
                    {
                      title: "Contribution",
                      path: "/development/Keep-Core/contributing",
                    },
                  ]
                },
                {
                  title: "Keep ECDSA",
                  path: "/development/keep-ecdsa",
                },
                {
                  title: "tBTC",
                  children: [
                    {
                      title: "tBTC Setup",
                      path: "/development/tBTC/tbtc",
                    },
                    {
                      title: "tBTC.js",
                      path: "/development/tBTC/tbtcjs",
                    },
                    {
                      title: "tBTC-dApp",
                      path: "/development/tBTC/tbtc-dapp",
                    },

                  ]
                },  
              ]
              
            },
          ]
        },
        {
          title: "Additional info",
          children: [
            {
              title: "General",
              path: "/Community-tools/general",
            },
            {
              title: "Community Tools",
              path: "/Community-tools/tools",           
            },
            {
              title: "Tutorials",
              children: [
                {
                  title: "Articles",
                  path: "/Community-tools/Tutorials/articles"           
                },     
                {
                  title: "Video Guides",
                  path: "/Community-tools/Tutorials/video_guides"           
                },       
              ]       
            },
          ]
        },
        {
          title: "Resources",
          children: [
            {
              title: "Source code",
              path: "https://github.com/keep-network",           
            },
            {
              title: "Random Beacon",
              path: "https://docs.keep.network/random-beacon/",           
            },
            {
              title: "tBTC",
              path: "https://docs.keep.network/tbtc/",           
            },
          ]
        },
      ]
    },
    gutter: {
      editLink: true,
    },
    footer: {
      logo: "/Keep_logo_mint.png",
      question: {
        text: 'Chat with Keep Network developers in <a href=\'https://discordapp.com/invite/wYezN7v\' target=\'_blank\'>Discord</a> or read the <a href=\'https://blog.keep.network/\' target=\'_blank\'>Keep Blog</a> to learn more.'
      },
      textLink: {
        text: 'keep.network',
        url: 'https://keep.network/'
      },
      services: [
        {
          service: 'medium',
          url: 'https://blog.keep.network/'
        },
        {
          service: 'twitter',
          url: 'https://twitter.com/keep_project'
        },
        {
          service: 'reddit',
          url: 'https://www.reddit.com/r/KeepNetwork/'
        },
        {
          service: 'telegram',
          url: 'https://t.me/KeepNetworkOfficial/'
        }
      ],
      smallprint:
      `© ${new Date().getFullYear()}`,
      links: [
        {
          title: "Community",
          children: [
            {
              title: "Keep Network Blog",
              url: "https://blog.keep.network/"
            },
            {
              title: "Discord Channel",
              url: "https://discordapp.com/invite/wYezN7v"
            }
          ]
        },
        {
          title: "Contributing",
          children: [
            {
              title: "Contributing to the project",
              url:
                "https://github.com/keep-network/keep-core/blob/master/CONTRIBUTING.adoc"
            },
            {
              title: "Source code on GitHub",
              url: "https://github.com/keep-network"
            }
          ]
        },
        {
          title: "Related Docs",
          children: [
            {
              title: "Keep Random Beacon",
              url: "https://docs.keep.network/random-beacon"
            },
            {
              title: "tBTC Network",
              url: "https://docs.keep.network/tbtc/"
            },
            
          ]
        },
      ]
    }
  }
};