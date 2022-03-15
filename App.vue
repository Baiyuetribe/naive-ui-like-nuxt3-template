<template lang="pug">
n-config-provider(:theme="appStore.theme")
    router-view
</template>
<script setup>
// 根据系统自动切换主题
import { useOsTheme, darkTheme } from 'naive-ui'
import { useAppStore } from './stores/theme'

const appStore = useAppStore()

const theme = computed(() => {
    return appStore.curTheme === "dark" ? darkTheme : null;
});

// const osThemeRef = useOsTheme()
// const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>
