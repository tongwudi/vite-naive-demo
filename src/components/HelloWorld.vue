<template>
  <ul>
    <transition-group name="list-complete">
      <li v-for="item in bgList" :key="item">
        <img :src="getImageUrl(item)" alt="" />
      </li>
    </transition-group>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import shuffle from 'lodash/shuffle'

// 背景图
const bgList = ref([
  'bar_y',
  'bar_x',
  'line_gradient',
  'line',
  'funnel',
  'heatmap',
  'map',
  'pie',
  'radar'
])

let shuffleTimer = null
const shuffleHandle = () => {
  shuffleTimer = setInterval(() => {
    bgList.value = shuffle(bgList.value)
  }, 4000)
}

const getImageUrl = name => {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href
}

onMounted(() => {
  shuffleHandle()
})

onUnmounted(() => {
  clearInterval(shuffleTimer)
  shuffleTimer = null
})
</script>

<style scoped></style>
