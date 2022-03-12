import { createApp } from 'vue'
// import App from './layouts/default.vue'
import App from './App.vue'

// // 国际化 **
// import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
// const i18n = createI18n({
//     // legacy: false,
//     locale: 'zh-CN',
//     messages
// })

const app = createApp(App)

// 插件自动加载-plugins
const modules = import.meta.globEager('./plugins/*.ts')
Object.values(modules).forEach(v => {
    if (typeof v.default === 'function') {
        v.default(app)
    }
})

import 'animate.css';
// '@vueuse/head' 用于ssr,所以此处无用
app.mount('#app')
