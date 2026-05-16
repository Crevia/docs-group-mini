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
          { text: 'Authentication', link: '/auth' },
          { text: 'Profile', link: '/profile' },
          { text: 'App', link: 'https://group-mini.smartxuls.club/' }
        ],
        sidebar: {
          '/guide/': [
            { text: '← Home', link: '/' },
            { text: 'Introduction', link: '/guide/' }
          ],
          '/auth': [
            { text: '← Home', link: '/' },
            { text: 'Authentication', link: '/auth' }
          ],
          '/profile': [
            { text: '← Home', link: '/' },
            { text: 'Profile', link: '/profile' }
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
