<template lang="pug">
h2 state
n-button(type="primary") 按钮
n-h2 {{ data }}
</template>

<script setup>
import { useFetch } from '@vueuse/core'

const { data } = useFetch('https://httpbin.org/get')
</script>

<style lang="stylus" scoped>

</style>