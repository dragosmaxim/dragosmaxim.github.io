export default defineNuxtConfig({
  compatibilityDate: '2026-08-16',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['~/src/index.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Dragos Maxim | Data Engineer Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Data engineering portfolio for Dragos Maxim, focused on analytics platforms, production pipelines, and applied machine learning systems.'
        }
      ]
    }
  },
  typescript: {
    strict: true
  }
});
