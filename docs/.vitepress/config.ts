import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Group Mini Docs',
  base: '/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Group Mini Docs',
      description: 'Group Mini knowledge base',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Help', link: '/help' },
          { text: 'Feedback', link: '/feedback' },
          { text: 'About', link: '/about' },
          { text: 'App', link: 'https://group-mini.smartxuls.club/' }
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
      title: 'Docs Group Mini',
      description: 'Base de conocimiento de Group Mini',
      themeConfig: {
        nav: [
          { text: 'Guía', link: '/es/guide/' },
          { text: 'App', link: 'https://group-mini.smartxuls.club/' }
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
      title: 'Endagaano ya Group Mini',
      description: 'Ekitabo ky\'obumanyirivu bwa Group Mini',
      themeConfig: {
        nav: [
          { text: 'Ebiragiro', link: '/lg/guide/' },
          { text: 'App', link: 'https://group-mini.smartxuls.club/' }
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
