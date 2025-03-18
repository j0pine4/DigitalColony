// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['assets/css/index.css'],
  modules: [
    '@nuxt/ui',
    'nuxt-marquee',
    '@nuxt/fonts',
    '@nuxtjs/mdc',
    'nuxt-easy-lightbox',
    '@nuxt/content',
    'nuxt-umami'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          transitionProperty: {
            'width': 'width'
          }
        }
      }
    }
  },
  umami: {
    id: '3842673d-3e71-4684-a312-6534c0de3584',
    host: 'https://cloud.umami.is'
  }
})