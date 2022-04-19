<!--
 * @Author: 彭璟
 * @Date: 2022-03-17 17:27:29
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 10:40:19
 * @Description: 列表
-->
<template>
  <div>
    {{ title }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const title = ref('列表')
</script>
<style lang="less" scoped>
.s {
  font-size: 60px;
}
</style>
