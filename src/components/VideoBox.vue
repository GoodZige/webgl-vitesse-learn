<script setup lang="ts">
import video_bg from '~/assets/image/视频框@3x.png'
//VideoBox接收的参数
let { videoToken, title,imgSrc,width,height } = defineProps<{
  videoToken: string,
  title: string,
  imgSrc?: string,
  width?: string,
  height?: string,
}>()
const defaultBackground = video_bg
</script>

<template>
  <div :class="['video-box', { 'custom-background': imgSrc === undefined || imgSrc === '' }]"
    :style="{ backgroundImage: `url(${imgSrc || defaultBackground})`, width: width, height: height }">
    <span class="title">{{ title }}</span>
    <video class="my-video" :id="videoToken" autoplay muted="true"></video>
  </div>
</template>
<style scoped>
:root{
}
.video-box {
  --video-box-height: 102px;
  --title-height: 18px;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 150px;
  height: var(--video-box-height);
  background-size: 100% 100%;
  font-size: 12px;
  font-weight: 400;
  font-family: 'SourceHanSansSC';
  color: #ffffff;
  .title{
    width: 100%;
    height: var(--title-height);
    text-align: center;
  }
  .my-video {
    width: 100%;
    height: calc(var(--video-box-height)-var(--title-height))
  }
}
/* 如果有自定义背景图未设置时的默认样式 */
.custom-background {
  background-image: url("~/assets/image/视频框@3x.png");
}
</style>
