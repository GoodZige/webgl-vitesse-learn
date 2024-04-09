<script setup lang="ts">
// import { ElDatePicker } from 'element-plus';
// import React from 'react';
// import { DatePicker } from '@douyinfe/semi-ui';
let a = ref(1)
</script>

<template>
  <div wfull hfull fm-ps2 id="decorator">
    <div ml-4 mt-10>
      <ElDatePicker v-model="a" type="datetimerange" />
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: home
</route>