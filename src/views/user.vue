<!--
 * @Author: 彭璟
 * @Date: 2022-03-17 17:27:29
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-03-17 18:36:19
 * @Description: 个人中心
-->
<template>
  <div>
    <van-nav-bar title="个人中心" />
    <van-skeleton title avatar :row="row" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const row = ref(4)
</script>
<style lang="less" scoped></style>
