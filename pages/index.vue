<template lang="pug">
div
    transition(enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut")
        div(id="card"  )
            h2 state
            n-space
                n-button(type="primary") 按钮
                n-button(type="primary") 按钮
                button 我是首页按钮  45544545
                h1 {{ state.data }}
                n-button(type="primary" @click="theme = darkTheme") 切换主题颜色
            //- n-button(type="primary" @click="store.inc()") {{ store.counter }}
</template>

<script setup>
import { darkTheme, } from "naive-ui"
// const theme = computed(() => GlobalTheme.value === 'darkTheme' ? darkTheme : null)
// const { t, locale } = useI18n()

import { useCounterStore } from "../stores/counterStore"    // 手动引入
console.log(useCounterStore)
// const store = count()
// const toggleLocale = () => {
//     locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
// }

const state = reactive({
    data: '4545'
});

// const { t, locale } = useI18n()
// const { isDark, toggleDark } = useDarks()

// const toggleLocale = () => {
//     locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
//     console.log(locale.value);
// }

// const language = computed(() => locale.value === 'zh-CN' ? '中文' : 'English')

// const theme = computed(() => isDark.value ? 'dark' : 'light')



const aa = ref(1);
</script>

<style lang="stylus" scoped>

</style>