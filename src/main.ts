/*
 * @Author: 彭璟
 * @Date: 2022-03-15 15:07:12
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 16:01:34
 * @Description: File description
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/varlettheme/root.css'
import '@/varlettheme/media.css'
const app = createApp(App)



app.use(router)

app.mount('#app')
