<!--
 * @Author: 彭璟
 * @Date: 2022-03-15 15:07:12
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 17:29:52
 * @Description: File description
-->
<template>
  <div class="fixed-menu">
    <var-app-bar :title="`电气学院五育系统- ${route.meta.title}`">
      <template #right>
        <var-space>
          <var-button round text-color="#476cf4" @click="$router.push('/user')"> <var-icon name="magnify" /> </var-button>
          <var-button round text-color="#476cf4" @click="$router.push('/')"> <var-icon name="home" /> </var-button>
          <var-button round text-color="#476cf4" @click="$router.push('/user')"> <var-icon name="account-circle" /> </var-button>
        </var-space>
      </template>
    </var-app-bar>
    <br />
  </div>
  <router-view> </router-view>
  <var-bottom-navigation v-if="route.meta.showTab" v-model:active="active" class="bot-menu" fixed safe-area>
    <var-bottom-navigation-item label="首页" icon="home" @click="$router.push('/')" />
    <var-bottom-navigation-item label="我的" icon="account-circle" @click="$router.push('/user')" />
  </var-bottom-navigation>
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
<style lang="less" scoped>
.fixed-menu {
  margin-top: -8px;
}
</style>
