<template>
  <n-switch v-model:value="active" title="主题">
    <template #unchecked-icon>
      <n-icon :component="Sunny" />
    </template>
    <template #checked-icon>
      <n-icon :component="Moon" />
    </template>
  </n-switch>
</template>

<script setup>
import { ref } from 'vue'
import { Sunny, Moon } from '@vicons/ionicons5'

const active = ref(true)
</script>

<style lang="scss" scoped></style>
