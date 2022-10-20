const pkg = require('./package')

const glob = require('glob')
const path = require('path')

var getDynamicRoutes = function() {
  return [].concat(
    glob
      .sync('*.md', { cwd: 'posts/' })
      .map((filepath) => `/software/${path.basename(filepath, '.md')}`),
    glob
      .sync('*.md', { cwd: 'blog/' })
      .map((filepath) => `/blog/${path.basename(filepath, '.md')}`)
  )
}

var dynamicPaths = getDynamicRoutes()

module.exports = {
  generate: {
    routes: dynamicPaths,
  },
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Zack Proser' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Configuration for @nuxtjs/pwa
   ** https://developer.mozilla.org/en-US/docs/Web/Manifest
   */
  manifest: {
    name: 'Zack Proser Portfolio',
    short_name: 'Zack Proser',
    description: 'Software engineer and artist',
    theme_color: '#172b4d',
  },

  meta: {
    // apple-mobile-web-app-capable=yes
    // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    mobileAppIOS: true,
    appleStatusBarStyle: '#172b4d',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~assets/argon/vendor/nucleo/css/nucleo.css',
    '~assets/argon/vendor/oxygen/css/oxygen.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/argon/scss/argon.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~assets/transitions.css',
    'highlight.js/styles/gruvbox-dark.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/argon/argon-kit', '~/plugins/common.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        componentPlugins: ['Carousel', 'Spinner'],
        directivePlugins: ['Tooltip', 'Popover'],
      },
    ],
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: [
          path.resolve(__dirname, 'posts'),
          path.resolve(__dirname, 'blog'),
        ],
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
}
