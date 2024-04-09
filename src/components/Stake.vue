<script setup lang="ts">
import stake_bg from '~/assets/image/桩号背景@3x.png'

let { text, imgSrc, width, height } = defineProps<{
  text?: string,
  imgSrc?: string,
  width?: string,
  height?: string,
}>()

// 如果希望默认使用导入的背景图，可以定义一个局部变量或者直接在模板中使用
const defaultBackground = stake_bg
</script>

<template>
  <div :class="['stake-box', { 'custom-background': imgSrc === undefined || imgSrc === '' }]"
    :style="{ backgroundImage: `url(${imgSrc || defaultBackground})`, width: width, height: height }">
    {{ text }}
  </div>
</template>

<style scoped>
.stake-box {
  display: flex;
  align-item: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  background-size: 100% 100%;
  font-size: 13px;
  font-weight: 400;
  font-family: 'SourceHanSansSC';
  color: #ffffff;
}

/* 如果有自定义背景图未设置时的默认样式 */
.custom-background {
  background-image: url("~/assets/image/桩号背景@3x.png");
}
</style>