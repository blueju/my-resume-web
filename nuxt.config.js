const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '蓝钜简历',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    './assets/styles/common/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/element-ui.js',
    ssr: true
  }],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /**
     * 按需引入element-ui
     */
    babel: {
      plugins: [
        ['component', {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  vendor: ['element-ui'] //防止element-ui被打包多次
}
