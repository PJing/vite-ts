<!--
 * @Author: 彭璟
 * @Date: 2022-03-17 16:52:53
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-12 16:55:01
 * @Description: File description
-->
<template>
  <div>
    <van-nav-bar :title="des" />
    <router-link to="list">
      <van-button type="primary" block> 去列表页 </van-button>
    </router-link>
    <br />
    <van-button type="primary" block @click="toList(123)">
      测试节流
    </van-button>
    <hello-world ref="hello" :age="12" sex="boy" @get-user="getUser" />
    <van-button type="success" @click="showModal">点击弹出alert</van-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import http from '../utils/http'
import { useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import HelloWorld from '../components/HelloWorld.vue'

const router = useRouter()
console.log('router: ', router)

const des = ref('首页')

// http.post('/login', { name: 'hah' })

// 防抖节流
const toList = useDebounceFn(id => {
  console.log('id: ', id)
  console.log(new Date().getTime())
}, 200)

const getUser = (user: any) => {
  console.log(user)
}
const hello = ref<InstanceType<typeof HelloWorld> | null>(null)
onMounted(() => {
  console.log('hello', hello.value)
})


function showModal() {
  hello.value?.alertDialog()
}
</script>
<style lang="less" scoped>
.s {
  font-size: 60px;
}
</style>
