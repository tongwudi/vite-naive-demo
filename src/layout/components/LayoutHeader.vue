<template>
  <n-layout-header bordered>
    <header class="header">
      <div class="header-item center">
        <n-space>
          <slot name="left"></slot>
        </n-space>
      </div>
      <div class="header-item center">
        <n-space>
          <slot name="center"></slot>
        </n-space>
      </div>
      <div class="header-item right">
        <n-space :size="[30, 0]">
          <LangSelect />
          <ThemeSwitch />
          <ThemeColorSelect />
          <slot name="user"></slot>
        </n-space>
      </div>
    </header>
  </n-layout-header>
</template>

<script setup>
import LangSelect from '@/components/LangSelect/index'
import ThemeSwitch from '@/components/ThemeSwitch/index'
import ThemeColorSelect from '@/components/ThemeColorSelect/index'
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  padding: 0 25px 0 40px;
  display: flex;
  justify-content: space-between;
  &-item {
    display: flex;
    align-items: center;
  }
}
</style>
