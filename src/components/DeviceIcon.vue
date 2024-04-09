<script setup lang="ts">
let { imgSrc,width,height } = defineProps<{
  imgSrc: string,
  width: string,
  height: string,
}>()
</script>

<template>
  <img :src="imgSrc" :style="`width:${width};height:${height};`" alt="">
</template>
