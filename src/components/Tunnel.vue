<script setup lang="ts">
// import { tunnelConfig } from '~/config/tunnel.config'
import { DetectArea, HoleInfo, ParkInfo, StakeInfo, TextInfo, TunnelConfig } from '~/components/types/tunnel'
import default_tunnel_bg from '~/assets/image/隧道底图@3x.png'
import default_left_hole_bg from '~/assets/image/左洞口@3x.png'
import default_right_hole_bg from '~/assets/image/右洞口@3x.png'
import default_top_park_bg from '~/assets/image/上停车区@3x.png'
import default_bottom_park_bg from '~/assets/image/下停车区@3x.png'
import default_detect_area_bg from '~/assets/image/卡口检测区域@3x.png'
//VideoBox接收的参数
let props = withDefaults(defineProps<TunnelConfig>(), {
  customImg: () => ({
    imgSrc: default_tunnel_bg,
    width: '3840px',
    height: '220px',
  })
})
console.log('props', props);
let TUNNEL_WIDTH = parseFloat(props.customImg.width)
let TUNNEL_HEIGHT = parseFloat(props.customImg.height)
// 深度监听props变化,更新隧道宽高
watch(() => props, (newProps, oldProps) => {
  TUNNEL_WIDTH = parseFloat(newProps.customImg.width)
  TUNNEL_HEIGHT = parseFloat(newProps.customImg.height)
  drawCenterRoad()
  console.log('props change', newProps, oldProps);
}, { deep: true })

// 计算洞口样式
const getHoleStyle = (hole: HoleInfo) => {
  // 默认样式
  let imgSrc = hole.direction === 'LEFT' ? `url(${default_left_hole_bg})` : `url(${default_right_hole_bg})`
  let width = '226px'
  let height = '78px'
  // 自定义样式
  if (hole.customImg) {
    imgSrc = hole.customImg.imgSrc || imgSrc
    width = hole.customImg.width || width
    height = hole.customImg.height || height
  }
  // 计算定位
  let left = `${TUNNEL_WIDTH * hole.x}px`
  let top = `${TUNNEL_HEIGHT * hole.y}px`
  if (hole.direction === 'RIGHT') {
    let right = `${TUNNEL_WIDTH * (1 - hole.x)}px`
    return {
      right: right,
      top: top,
      backgroundImage: imgSrc,
      width: width,
      height: height,
    }
  }
  return {
    left: left,
    top: top,
    backgroundImage: imgSrc,
    width: width,
    height: height,
  }
}
// 计算停车区样式
const getParkStyle = (parkInfo: ParkInfo) => {
  // 默认样式
  let imgSrc = parkInfo.direction === 'TOP' ? `url(${default_top_park_bg})` : `url(${default_bottom_park_bg})`

  let width = `${Math.abs(parkInfo.maxX - parkInfo.minX) * TUNNEL_WIDTH}px`
  let height = '20px'
  // 自定义样式
  if (parkInfo.customImg) {
    imgSrc = parkInfo.customImg.imgSrc || imgSrc
    width = parkInfo.customImg.width || width
    height = parkInfo.customImg.height || height
  }
  // 计算定位
  let left = `${(parkInfo.minX + parkInfo.maxX) / 2 * TUNNEL_WIDTH}px`
  let top = `${TUNNEL_HEIGHT * parkInfo.y}px`
  return {
    left: left,
    top: top,
    backgroundImage: imgSrc,
    width: width,
    height: height,
  }
}
// 计算卡口检测区域样式
const getDetectAreaStyle = (detectArea: DetectArea) => {
  // 默认样式
  let imgSrc = `url(${default_detect_area_bg})`
  let width = `${Math.abs(detectArea.maxX - detectArea.minX) * TUNNEL_WIDTH}px`
  let height = '20px'
  // 自定义样式
  if (detectArea.customImg) {
    imgSrc = detectArea.customImg.imgSrc || imgSrc
    width = detectArea.customImg.width || width
    height = detectArea.customImg.height || height
  }
  // 计算定位
  let left = `${(detectArea.minX + detectArea.maxX) / 2 * TUNNEL_WIDTH}px`
  let top = `${TUNNEL_HEIGHT * detectArea.y}px`
  return {
    left: left,
    top: top,
    backgroundImage: imgSrc,
    width: width,
    height: height,
  }
}
// 计算文字样式
const getTextStyle = (text: TextInfo) => {
  // 计算定位
  let left = `${TUNNEL_WIDTH * text.x}px`
  let top = `${TUNNEL_HEIGHT * text.y}px`
  return {
    left: left,
    top: top,
  }
}
// 计算桩号样式
const getStakeStyle = (stake: StakeInfo) => {
  // 计算定位
  let left = `${TUNNEL_WIDTH * stake.x}px`
  return {
    left: left,
  }
}
// 绘制中间道路
const drawCenterRoad = async () => {
  // 获取Canvas元素和上下文
  if (props.centerRoadInfo) {
    await nextTick()
    let canvas = document.getElementById("centerRoad") as HTMLCanvasElement;
    canvas.width = TUNNEL_WIDTH;
    canvas.height = parseFloat(props.centerRoadInfo?.height as string);
    canvas.style.top = `${TUNNEL_HEIGHT * props.centerRoadInfo?.y}px`
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;

    // 定义参数
    let canvasWidth = canvas.width; // Canvas宽度
    let canvasHeight = canvas.height; // Canvas高度
    let shoulderWidth = 4; // 肩部宽度

    // 清除canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制道路
    props.centerRoadInfo.crossRoadArr.forEach(e => {
      // 计算坐标
      let startX = canvasWidth * e.xTop1;
      let startX1 = canvasWidth * e.xTop2;
      let endX = canvasWidth * e.xBottom1;
      let endX1 = canvasWidth * e.xBottom2;

      // 开始绘制道路肩部
      context.beginPath();
      context.moveTo(startX - shoulderWidth, 0);
      context.lineTo(startX1 + shoulderWidth, 0);
      context.lineTo(endX1 + shoulderWidth, canvasHeight);
      context.lineTo(endX - shoulderWidth, canvasHeight);
      context.closePath();
      context.fillStyle = "grey";
      context.fill();

      // 开始绘制道路
      context.beginPath();
      context.moveTo(startX, 0);
      context.lineTo(startX1, 0);
      context.lineTo(endX1, canvasHeight);
      context.lineTo(endX, canvasHeight);
      context.closePath();
      context.fillStyle = "#1d1d1d";
      context.fill();
    })
  }
}

onMounted(() => {
  drawCenterRoad()
})
</script>

<template>
  <div class="stake-group-top"
    :style="{ width: props.customImg.width || TUNNEL_WIDTH,height: props.stakeConfig?.height || '20px' }">
    <Stake class="stake" v-bind="stake" v-for="(stake, index) in props.stakeConfig?.topStakeArr" :key="index" :style="getStakeStyle(stake)"></Stake>
  </div>
  <div :class="['tunnel-box']"
    :style="{ backgroundImage: `url(${props.customImg.imgSrc || default_tunnel_bg})`, width: props.customImg.width || TUNNEL_WIDTH, height: props.customImg.height || TUNNEL_HEIGHT }">
    <div class="hole" v-for="(hole, index) in props.holeInfoArr" :key="index" :style="getHoleStyle(hole)"></div>
    <div class="park-area" v-for="(parkInfo, index) in props.parkArr" :key="index" :style="getParkStyle(parkInfo)">
    </div>
    <div class="detect-area" v-for="(detectArea, index) in props.detectAreaArr" :key="index"
      :style="getDetectAreaStyle(detectArea)"></div>
    <canvas id="centerRoad"></canvas>
    <span class="text" v-for="(text, index) in props.textArr" :key="index" :style="getTextStyle(text)">{{ text.text
      }}</span>
  </div>
  <div class="stake-group-bottom"
    :style="{ width: props.customImg.width || TUNNEL_WIDTH }">
    <Stake class="stake" v-bind="stake" v-for="(stake, index) in props.stakeConfig?.bottomStakeArr" :key="index" :style="getStakeStyle(stake)"></Stake>
  </div>
</template>
<style scoped>
.stake-group-top {
  position: relative;
}
.stake-group-bottom {
  position: relative;
}
.stake{
  position: absolute;
  top:0;
}
.tunnel-box {
  position: relative;
  background-size: 100% 100%;

  .hole {
    position: absolute;
    background-size: 100% 100%;
    z-index: 3;
  }

  .park-area {
    position: absolute;
    background-size: 100% 100%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .detect-area {
    position: absolute;
    background-size: 100% 100%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .text {
    position: absolute;
    font-family: 'SourceHanSansSC';
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 23.17px;
    color: rgba(255, 255, 255, 1);
    z-index: 4;
  }

  #centerRoad {
    position: absolute;
  }
}
</style>
