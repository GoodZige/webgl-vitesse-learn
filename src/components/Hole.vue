<script setup lang="ts">
import tunnel_bg from '~/assets/image/隧道底图@3x.png'
//VideoBox接收的参数
let { tunnelImgSrc,tunnelWidth,tunnelHeight } = defineProps<{
  tunnelImgSrc?: string,
  tunnelWidth?: string,
  tunnelHeight?: string,
}>()
const defaultBackground = tunnel_bg
</script>

<template>
  <div :class="['tunnel-box', { 'custom-background': tunnelImgSrc === undefined || tunnelImgSrc === '' }]"
    :style="{ backgroundImage: `url(${tunnelImgSrc || defaultBackground})`, width: tunnelWidth, height: tunnelHeight }">
  </div>
</template>
<style scoped>
.tunnel-box {
  --tunnel-box-width: 3840px;
  --tunnel-box-height: 220px;
  width: var(--tunnel-box-width);
  height: var(--tunnel-box-height);
  background-size: 100% 100%;
}
/* 如果有自定义背景图未设置时的默认样式 */
.custom-background {
  background-image: url("~/assets/image/隧道底图@3x.png");
}
</style>
