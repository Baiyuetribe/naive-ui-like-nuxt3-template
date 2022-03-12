<template lang="pug">
n-config-provider(:theme="theme")
    router-view
</template>
<script setup>
// 根据系统自动切换主题
import { useOsTheme, darkTheme } from 'naive-ui'
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>
