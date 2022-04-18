/*
 * @Author: 彭璟
 * @Date: 2022-03-21 11:09:05
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-03-22 11:25:47
 * @Description: axios封装
 */
import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000
})
// 请求头处理
http.interceptors.request.use(
  config => {
      console.log('config: ', config);
    // do something before request is sent
    config.headers!['uc-token'] = sessionStorage.getItem('uc-token') || ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回拦截
http.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0 && res.code != 200 && res.errorCode !== 0) {
      if (res.code == '10021') {
        // 1009表示token失效（具体看项目接口定义）
        res.msg = '登录已失效，请重新登录'
      }

      Toast(res.msg)
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('error: ', error)
    if (error.msg || error) {
      Toast(error.msg || error.message)
    } else {
      Toast('网络不佳,请检查网络')
    }
    return Promise.reject(error)
  }
)
export default http
