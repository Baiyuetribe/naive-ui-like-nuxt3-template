import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动加载vue等API
import AutoImport from 'unplugin-auto-import/vite'
// import { dirResolver } from 'vite-auto-import-resolvers' // 引入自定义解析器 比如store
import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'
// 组件全自动按需引入
import Components from 'unplugin-vue-components/vite' // 组件文件夹无法自动引入
import { NaiveUiResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
// 下面两个为组件优化；虽然 Vite 可以智能地检测动态依赖关系，但它的按需自然有时会使复杂项目的启动变得非常缓慢。
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
// 页面路由自动引入
import Pages from 'vite-plugin-pages'
// Layout 全自动引入
import Layouts from 'vite-plugin-vue-layouts' // 依赖插件

import Inspect from 'vite-plugin-inspect'
// import I18n from '@intlify/vite-plugin-vue-i18n'
// import vueI18n from '@intlify/vite-plugin-vue-i18n' // *
// import { resolve } from 'path'

// 全局样式自动引入

// vite重启
// import { utimesSync, openSync, closeSync } from 'fs'
// export const restart = () => {
//   const time = new Date()
//   const path = 'vite.config.ts'
//   try {
//     utimesSync(path, time, time)
//   } catch (error) {
//     closeSync(openSync(path, 'w'))
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './.vite',
  },
  plugins: [vue(),
  // AutoImport({ imports: ['vue', 'pinia', 'vue-router', 'vue-i18n'], resolvers: [dirResolver({ prefix: 'use' }), dirResolver({ target: '../stores', suffix: 'Store' })] }),
  DirResolverHelper(),
  // AutoImport({ imports: ['vue', 'pinia', 'vue-router', 'vue-i18n'], resolvers: [dirResolver({ srcAlias: '/', target: 'stores' })] }),
  AutoImport({ imports: ['vue', 'pinia', 'vue-router', 'vue-i18n'], resolvers: [dirResolver({ srcAlias: '././', target: 'stores' })] }),
  Components({
    dirs: ['components'], // 指定组件文件夹
    resolvers: [NaiveUiResolver(), VueUseComponentsResolver()]
  }),
  // 插件缓存，非常有效果，除首次加载外，速度极快
  PkgConfig(),
  OptimizationPersist(),
  // 文件路由
  Pages({
    dirs: "pages",
    // pagesDir: [{ dir: 'pages', baseRoute: '1' }], // 有效，路由前缀
    // extensions: ['vue', 'md', 'tsx'],
  }),
  // Layout布局
  Layouts({ layoutsDirs: "layouts", defaultLayout: "default" }),
  // fix: vite-plugin-vue-layouts 在dev Server时新建报错问题

  Inspect(),

    // i18n 国际化支持 **
    // I18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [resolve(__dirname, './locales/**')]
    // }),
  ],
  // vue.config.js选项
  pages: {
    index: {
      // page 的入口
      entry: './main.js',
      // 模板来源
      template: 'index.html',
    }
  }
})

// vite-plugin-pages必须在main.js里use
// 引入pina