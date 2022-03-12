
# Naive-ui前端模板---采用Nuxt3目录布局

## 已完成

- 布局layout自动引入
- 页面pages自动引入
- 组件components自动引入
- Niave-ui按需自动引入
- 插件plugins自动引入（比如pinia、ngprogress、router等）

## 待完成
- locales目录下i18n国际化
- 函数组件composables 【失败】上游提供的api目录改变无效
- 全局状态库store -- 用于存放pinia里的全局状态或函数
- 明暗主题


## 问题
// pinia管理，组件引入不正常

## 启发来源

- [Nuxt3](https://v3.nuxtjs.org/docs/directory-structure/pages)
- [tov-template](https://github.com/dishait/tov-template)

## 为什么做这个
- 适合全栈开发，干掉src后，各个目录作用清晰，不再有多层级目录