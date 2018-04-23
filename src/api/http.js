import axios from 'axios'
import { showMessage } from '@/utils'
import store from '@/store'
import router from '@/router'
import {
  COMMON_CHANGE_LOADING_BAR ,
  ACCOUNT_LOGOUT
} from '@/store/mutations'


axios.defaults.timeout = 20000
axios.defaults.baseURL = '/'


let timer = []

axios.interceptors.request.use(
  config => {
    timer.push(setTimeout(() => {
      // store.commit(COMMON_CHANGE_LOADING_BAR, true)
      store.commit(COMMON_CHANGE_LOADING_BAR, true)
    }, 100))

    config.headers['Content-type'] = 'application/jsonchartset=utf-8'

    try {
      if (store.state.account.token) {
        config.headers.token = store.state.accounts.token
      }
    } catch (e) {
      clearTimeout(timer.splice(0, 1))
      store.commit(COMMON_CHANGE_LOADING_BAR, false)
    }

    return config
  },
  err => {
    clearTimeout(timer.splice(0, 1))
   store.commit(COMMON_CHANGE_LOADING_BAR, false)
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    clearTimeout(timer.splice(0, 1))
   store.commit(COMMON_CHANGE_LOADING_BAR, false)

    if (response.status === 200 && response.data !== null) {
      return response.data
    } else {
      response.status !== '200' && response.data.message && showMessage(response.data.message || '网络异常')
      return response.data
    }
  },
  error => {
    clearTimeout(timer.splice(0, 1))

    showMessage('网络异常')

   store.commit(COMMON_CHANGE_LOADING_BAR, false)

    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(ACCOUNT_LOGOUT)
          router.replace({
            path: '/#',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
      }
    }
    return Promise.reject(error.response && error.response.data)
  })

export default axios
