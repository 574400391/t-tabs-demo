import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TDesign from 'tdesign-mobile-vue'
// @ts-ignore
import router from './router'

import 'tdesign-mobile-vue/es/style/index.css'

const app = createApp(App)
app.use(TDesign)
app.use(router)
app.mount('#app')
