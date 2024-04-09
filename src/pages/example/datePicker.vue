<script setup lang="ts">
import { DatePicker } from '@kousum/semi-ui-vue';
// import React from 'react';
// import { DatePicker } from '@douyinfe/semi-ui';

</script>

<template>
  <div wfull hfull fm-ps2 id="decorator">
    <div ml-4 mt-10>
      <DatePicker type="dateTimeRange"  :style="{'width':'600px'}"/>
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: home
</route>