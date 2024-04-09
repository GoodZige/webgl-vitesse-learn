<script setup lang="ts">
import { DatePicker,MyElDatePicker } from 'zige-first-lib';
import { DeviceInfo } from '~/components/types/device'
// import { DatePicker } from '../../../lib/main.js'
// import React from 'react';
// import { DatePicker } from '@douyinfe/semi-ui';
let a1 = ref<number | null>(null)
onMounted(() => {
  a1.value = 999
})
let deviceInfoArr:DeviceInfo[] = [
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '1'
  },
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '2'
  },
  {
    stakeNum: 'K123+456',
    deviceType: '1',
    runStatus: '3'
  },
]
let props = {
    isShow: true,
    isTop: true,
    deviceInfoArr: deviceInfoArr,
  }
</script>

<template>
  <div wfull hfull fm-ps2 id="decorator">
    <div ml-4 mt-10>
      <DatePicker/>
      <MyElDatePicker/>
      <DeviceGroup v-bind="props"/>
      <!-- <Frustum/> -->
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: home
</route>