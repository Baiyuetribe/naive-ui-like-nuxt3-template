<template lang="pug">
n-layout-footer
    n-h2 {{ t('index') }}
    n-space(justify="center" )
        n-h4 我是footer
</template>
<script setup>
import { useI18n } from 'vue-i18n'


const { locale, t } = useI18n({
    inheritLocale: true
})

</script>