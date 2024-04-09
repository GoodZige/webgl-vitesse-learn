<script setup lang="ts">
import { typeMap } from '~/config/device.config.js'
import { DeviceInfo, cheZhiType } from '~/components/types/device'
//DeviceGroup接收的参数
let { isShow, isTop, deviceInfoArr } = defineProps<{
  isShow: boolean,
  isTop: boolean,
  deviceInfoArr: DeviceInfo[],
}>()
// 根据类型和运行状态获取图片路径
let getImgSrc = (deviceType: string, runStatus: string) => {
  let picMap = isTop ? typeMap[deviceType as keyof typeof typeMap].topPicMap : typeMap[deviceType as keyof typeof typeMap].bottomPicMap
  return picMap[runStatus as keyof typeof picMap]
}
let isVertical = !(deviceInfoArr[0].deviceType in cheZhiType)
console.log(isVertical);
</script>

<template>
  <div class="device-box" v-show="isShow">
    <Stake mb-2 v-if="isTop" :text="deviceInfoArr[0].stakeNum" />
    <!-- 设备栏 -->
    <div :class="{
      'device-group': isVertical,
      'device-group-triangle': !isVertical
    }">
      <!-- 设备行 -->
      <div :class="`device-${index}`" v-for="(item, index) in deviceInfoArr" :key="index">
        <DeviceIcon :imgSrc="getImgSrc(item.deviceType, item.runStatus)"
          :width="typeMap[item.deviceType as keyof typeof typeMap].width"
          :height="typeMap[item.deviceType as keyof typeof typeMap].height" />
      </div>
    </div>
    <Stake mt-2 v-if="!isTop" :text="deviceInfoArr[0].stakeNum" />

  </div>
</template>
<style scoped>
.device-box{
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.device-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .device-0 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .device-1 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .device-2 {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

.device-group-triangle {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .device-0 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .device-1 {
    display: flex;
    justify-content: center;
    width: 50%;
  }

  .device-2 {
    display: flex;
    justify-content: center;
    width: 50%;
  }
}
</style>
