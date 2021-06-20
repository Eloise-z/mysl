import axios from 'axios'
// 引入调用js-cookie
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:88/api', // api的base_url
  timeout: 20000 // 请求超时时间
})

// 创建拦截器 获取token 传递token到cookie中
service.interceptors.request.use(
  config => {
    // 判断cookie里面是否有agriculture_token数据
    if (cookie.get('agriculture_token')) {
      // 把获取到的token放入cookie
      config.headers.token = cookie.get('agriculture_token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

export default service
