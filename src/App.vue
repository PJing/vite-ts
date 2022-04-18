<!--
 * @Author: 彭璟
 * @Date: 2022-03-15 15:07:12
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-11 20:15:29
 * @Description: 入口组件
-->
<template>
  <router-view> </router-view>
  <van-tabbar v-if="route.meta.showTab" v-model="active" route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import qs from 'qs'
const route = useRoute()
const active = ref(0)

// 页面初始化完成
const elLoading = document.getElementById('loading')
elLoading && document.body.removeChild(elLoading)

// 获取浏览器地址数据
const query = qs.parse(window.location.href.split('?')[1])
console.log('query: ', query)

console.log(import.meta.env)
</script>
<style lang="less" scoped></style>
