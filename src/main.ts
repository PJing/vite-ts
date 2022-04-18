/*
 * @Author: 彭璟
 * @Date: 2022-03-15 15:07:12
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-03-21 14:21:07
 * @Description: File description
 */
import { createApp, Plugin } from 'vue'
import App from './App.vue'
import router from './router'
import vantComponents from './utils/vant-import'
import '@/vantheme/root.less'
const app = createApp(App)

vantComponents.forEach((item: Plugin) => {
  app.use(item)
})

app.use(router)

app.mount('#app')
