export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - goandup-test-for-venturas',
    title: 'goandup-test-for-venturas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"}
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/postTest': {
      // ターゲット先のURLを指定
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
