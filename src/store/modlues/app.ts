/* eslint-disable @typescript-eslint/no-explicit-any */
import { login as loginApi } from '@/api/login'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state: { token: any }, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }: any, userInfo: any) {
      return new Promise<void>((resolve, reject) => {
        loginApi(userInfo)
          .then((res: any) => {
            console.log(res)
            commit('setToken', res.data.token)
            router.replace('/')
            resolve()
          })
          .catch((err: any) => {
            reject(err)
          })
      })
    }
  }
}
