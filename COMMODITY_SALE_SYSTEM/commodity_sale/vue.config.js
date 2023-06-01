const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  publicPath: '/',
  outputDir: '../commodity_sale_server/src/dist',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        security: false,
        pathRewrite: {'^/api': ''}
      }
    }
  }
})
