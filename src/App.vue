<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from 'naive-ui'
import { ref } from 'vue'

const theme = ref(darkTheme)
</script>

<style></style>
