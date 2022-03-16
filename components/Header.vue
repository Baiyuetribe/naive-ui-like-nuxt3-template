<template lang="pug">
n-layout-header
    n-h1 我是HEADER
    n-space
        router-link(to="/") 首页
        router-link(to="/home") Home
    n-switch(v-model:value="active" size="medium" @update:value="handleSwitch")
        template(#checked-icon)
            n-icon
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M234 26h44v92h-44z" fill="currentColor"></path><path d="M234 394h44v92h-44z" fill="currentColor"></path><path d="M338.025 142.857l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M394 234h92v44h-92z" fill="currentColor"></path><path d="M26 234h92v44H26z" fill="currentColor"></path><path d="M338.029 369.14l31.112-31.113l65.054 65.054l-31.112 31.112z" fill="currentColor"></path><path d="M77.802 108.92l31.113-31.113l65.054 65.054l-31.113 31.112z" fill="currentColor"></path><path d="M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102z" fill="currentColor"></path></svg>
        template(#unchecked-icon)
            n-icon
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z" fill="currentColor"></path></svg>
    //- n-dropdown(:options="languageOptions" @select="handleLanguageSelect")
    //-     n-button 选择语言
    n-button(type="primary" ghost @click="changeLanguage") 切换语言
    n-divider
</template>
<script  setup>
import { useAppStore } from '../stores/theme'
// import { useI18n } from '../stores/i18n'
import { darkTheme } from 'naive-ui';
import { useI18n } from 'vue-i18n'
const appStore = useAppStore()
console.log(appStore);
const active = ref(true)
const handleSwitch = (value) => {
    console.log('handle ', value) // bool
    if (value) {
        appStore.setTheme(null)
    } else {
        appStore.setTheme(darkTheme)
    }
}

const {locale} = useI18n()
// const languageOptions = [
// { label: '中文', key: 'zh', icon: renderIcon('zh') },
// { label: 'English', key: 'en', icon: renderIcon('en') }
// ]
// 处理选中语言
const changeLanguage = ()=>{
    locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
    console.log(locale.value);
}


</script>