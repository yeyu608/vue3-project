import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import '@/router/permission'
import * as EleIcon from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(EleIcon)) {
  app.component(key, component)
}
SvgIcon(app)

app.use(store).use(router).mount('#app')
