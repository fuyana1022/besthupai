import Vue from 'vue'
import axios from 'axios'

// 服务器地址
axios.defaults.baseURL = 'http://192.168.1.9'

// 请求拦截器
// axios.interceptors.request.use(config => {
//   NProgress.start()
//   // 添加token验证
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })

// 响应拦截器
// axios.interceptors.response.use(config => {
//   NProgress.done()
//   return config
// })

Vue.prototype.$http = axios