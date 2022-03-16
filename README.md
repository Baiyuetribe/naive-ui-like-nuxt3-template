
# Naive-ui前端模板---采用Nuxt3目录布局

## 已完成

- 布局layout按需自动引入
- 页面pages按需自动引入
- 组件components按需自动引入
- Niave-ui按需自动引入
- 插件plugins自动引入（比如pinia、ngprogress、router等）
- UI亮色和暗色切换
- Pinia
- useFetch对标Nuxt3（来自VueUse）
- I18n国际化Locals语言支持

## 待解决

- 函数组件composables 【失败】上游提供的api目录改变无效

## 一些特别想去掉的内容，求助

- 根目录App.vue
- 根目录index.html

>> 按nuxt3的设计，应该是可以移除的，不知道有没有解决方案，根目录下App.vue和index.html和main.js合并为一个。


## 启发来源

- [Nuxt3](https://v3.nuxtjs.org/docs/directory-structure/pages)
- [tov-template](https://github.com/dishait/tov-template)

## 为什么做这个
- 适合全栈开发，干掉src后，各个目录作用清晰，不再有多层级目录
- 现实意义：可以无缝迁移到Nuxt3实现ssr渲染，当Nuxt3对标现有环境时，热重载开发启动非常慢，约为120s，用这个则是毫秒级别,约为120ms。等于初期开发完毕后期可以无缝迁移到Nuxt3