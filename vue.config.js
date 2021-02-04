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
  },
  // 开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    proxy: {
      '/api': {
        // 本地服务接口地址
        target: 'https://mock.ryio.cn/mock/60112b1c8215df0020a8ef6e/api',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
