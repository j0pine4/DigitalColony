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
  }
})