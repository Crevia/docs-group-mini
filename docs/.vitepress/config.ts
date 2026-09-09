import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FiTunza Docs',
  base: '/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'FiTunza Docs',
      description: 'FiTunza knowledge base',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Help', link: '/help' },
          { text: 'Feedback', link: '/feedback' },
          { text: 'About', link: '/about' },
          { text: 'App', link: 'https://app.fitunza.com/' }
        ],
        sidebar: {
          '/guide/': [
            { text: 'Introduction', link: '/guide/' },
            {
              text: 'Authentication',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/guide/auth' }
              ]
            },
            {
              text: 'Profile',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/guide/profile' }
              ]
            },
            {
              text: 'Groups',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/guide/groups' }
              ]
            },
            {
              text: 'Accounts',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/guide/accounts' }
              ]
            },
            {
              text: 'Support',
              collapsed: false,
              items: [
                { text: 'Live Chat', link: '/guide/support' }
              ]
            },
            {
              text: 'Troubleshooting',
              collapsed: false,
              items: [
                { text: 'Edge Cases', link: '/guide/troubleshooting' }
              ]
            }
          ]
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'Docs FiTunza',
      description: 'Base de conocimiento de FiTunza',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Guía', link: '/es/guide/' },
          { text: 'App', link: 'https://app.fitunza.com/' }
        ],
        sidebar: {
          '/es/guide/': [
            { text: 'Introducción', link: '/es/guide/' }
          ]
        }
      }
    },
    lg: {
      label: 'Luganda',
      lang: 'lg',
      title: 'Endagaano ya FiTunza',
      description: 'Ekitabo ky\'obumanyirivu bwa FiTunza',
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Ebiragiro', link: '/lg/guide/' },
          { text: 'App', link: 'https://app.fitunza.com/' }
        ],
        sidebar: {
          '/lg/guide/': [
            { text: 'Ennyanjula', link: '/lg/guide/' }
          ]
        }
      }
    }
  },


})
