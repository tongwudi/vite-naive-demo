import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { naive } from './utils'

// 引入全局样式
import '@/assets/style/style.css'

const app = createApp(App)
// 注册路由
app.use(router)
// 注册 naive-ui 组件
app.use(naive)
// 挂载到页面
app.mount('#app')
