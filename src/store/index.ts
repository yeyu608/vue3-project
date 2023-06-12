import { createStore } from 'vuex'
import app from './modlues/app'
import getters from './getters'
const store = createStore({
  modules: {
    app
  },
  getters
})

export default store
