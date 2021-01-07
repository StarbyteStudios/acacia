export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' }
    ],
    script: [
      { src: 'vendor/jquery/jquery.min.js', body: true },
      { src: 'vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: 'vendor/jquery.easing/jquery.easing.min.js', body: true },
      { src: 'vendor/waypoints/jquery.waypoints.min.js', body: true },
      { src: 'vendor/counterup/counterup.min.js', body: true },
      { src: 'vendor/isotope-layout/isotope.pkgd.min.js', body: true },
      { src: 'vendor/venobox/venobox.min.js', body: true },
      { src: 'vendor/owl.carousel/owl.carousel.min.js', body: true },
      { src: 'vendor/aos/aos.js', body: true },
      { src: 'js/main.js', body: true },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/vendor/icofont/icofont.min.css',
    '~/assets/vendor/boxicons/css/boxicons.min.css',
    '~/assets/vendor/remixicon/remixicon.css',
    '~/assets/vendor/venobox/venobox.css',
    '~/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
    '~/assets/vendor/aos/aos.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/apollo'
  ],

  // Apollo Configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },

  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Router Configuration
  router: {
    linkExactActiveClass: 'active'
  }
}
