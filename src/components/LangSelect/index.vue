<template>
  <n-dropdown trigger="hover" :options="options">
    <n-button text title="语言">
      <n-icon size="22">
        <Language />
      </n-icon>
    </n-button>
  </n-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { Language } from '@vicons/ionicons5'

const options = ref([
  {
    label: '中文',
    key: 'ZH'
  },
  {
    label: 'English',
    key: 'EN'
  }
])
</script>

<style lang="scss" scoped></style>
