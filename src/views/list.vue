<!--
 * @Author: 彭璟
 * @Date: 2022-03-17 17:27:29
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-03-21 11:09:45
 * @Description: 列表
-->
<template>
  <div>
    <van-nav-bar title="列表" left-arrow @click-left="$router.back()" />
    <van-skeleton title avatar :row="row" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const row = ref(4)


</script>
<style lang="less" scoped></style>
