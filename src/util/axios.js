import axios from 'axios'
import store from '@/store/'
import router from '@/router/router'
import { serialize } from '@/util'

// 默认超时时间
axios.defaults.timeout = 15000
// 返回其他状态码
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status <= 500
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// http request 拦截
axios.interceptors.request.use(config => {
  const meta = (config.meta || {})
  // const isToken = meta.isToken === false
  // config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`
  // 让每个请求携带token
  // if (getToken() && !isToken) {
  //   config.headers[website.tokenHeader] = 'bearer ' + getToken()
  // }
  // headers中配置text请求
  if (config.text === true) {
    config.headers['Content-Type'] = 'text/plain'
  }
  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && meta.isSerialize === true) {
    config.data = serialize(config.data)
  }
  // console.log(config)
  return config
}, err => {
  return Promise.reject(err)
})

// http response 拦截
axios.interceptors.response.use(res => {
  // 获取状态码
  const status = res.data.code || res.status
  // const statusWhiteList = website.statusWhiteList || []
  const message = res.data.msg || res.data.error_description || '未知错误'
  // 如果在白名单里则自行catch逻辑处理
  // if (statusWhiteList.includes(status)) return Promise.reject(res)
  // 如果是401则跳转到登录页面
  if (status === 401) store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }))
  if (status !== 200) {
    return Promise.reject(new Error(message))
  }

  // console.log(res)
  return res
}, err => {
  return Promise.reject(new Error(err))
})

export default axios
