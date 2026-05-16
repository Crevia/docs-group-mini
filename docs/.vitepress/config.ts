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
        nav: [{ text: 'Guide', link: '/guide/' }],
        sidebar: {
          '/guide/': [
            { text: 'Introduction', link: '/guide/' }
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
        nav: [{ text: 'Guía', link: '/es/guide/' }],
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
        nav: [{ text: 'Ebiragiro', link: '/lg/guide/' }],
        sidebar: {
          '/lg/guide/': [
            { text: 'Ennyanjula', link: '/lg/guide/' }
          ]
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/crevia/docs-group-mini' }
    ]
  }
})
