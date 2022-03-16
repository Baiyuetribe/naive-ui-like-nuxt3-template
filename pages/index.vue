<template lang="pug">
div
    transition(enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut")
        div(id="card"  )
            h2 state
            n-space
                n-button(type="primary") 按钮
                n-button(type="warning") 按钮
                h1 {{ state.data }}
                h1 {{ t("demo") }}
</template>

<script setup>
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

const { t } = useI18n()
// const { isDark, toggleDark } = useDarks()

// const toggleLocale = () => {
//     locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
//     console.log(locale.value);
// }

// const language = computed(() => locale.value === 'zh-CN' ? '中文' : 'English')



const aa = ref(1);
</script>

<style lang="stylus" scoped>

</style>

<i18n lang="yaml">  
en:
    demo: demo
zh-CN:
    demo: 演示
</i18n>