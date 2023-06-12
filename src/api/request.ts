import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data, status } = response
    if (status === 200) {
      return data
    } else {
      ElMessage.error(data.msg)
      return Promise.reject(new Error(data.msg))
    }
  },
  (err) => {
    if (!window.navigator.onLine) {
      alert('请检查网络是否连接')
    }
    return Promise.reject(err)
  }
)

export default service
