const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: true,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  }
}
