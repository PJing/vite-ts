<!--
 * @Author: 彭璟
 * @Date: 2022-03-17 16:52:53
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 16:35:36
 * @Description: File description
-->
<template>
  
  <var-space direction="column" size="large">
    <var-chip class="media-check" closable plain type="primary" icon-name="magnify" block color="#999"> 搜索课程内容 </var-chip>
    <var-row>
      <var-col v-for="(item, index) in imgArr" :key="index" :span="6" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="center" v-ripple>
          <var-image class="icon" width="40px" height="40px" fit="cover" :src="item.icon" />
          <p>{{ item.title }}</p>
        </div>
      </var-col>
    </var-row>
    <var-cell title="我的课程">
      <template #extra>
        <var-icon name="chevron-right" />
      </template>
    </var-cell>
    <var-row :gutter="8">
      <var-col v-for="i in 10" :key="i" :span="24" :sm="12" :md="8" :lg="8" :xl="8">
        <var-card class="mb-20" subtitle="10学分/16课时  |  研究所课程/必修" description="讲师：李凡凡" ripple>
          <template #title>
            <p class="var-card__title">现场总线技术及其应用</p>
          </template>
          <template #image>
            <var-image class="cardimg" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </template>
          <template #extra>
            <var-progress label :value="30" />
          </template>
        </var-card>
      </var-col>
    </var-row>
    <var-button type="primary" block loading loading-type="wave">主要按钮</var-button>
  </var-space>
</template>
<script setup lang="ts">
import icon1 from '@/assets/img/1.png'
import icon2 from '@/assets/img/2.png'
import icon3 from '@/assets/img/3.png'
import icon4 from '@/assets/img/4.png'
import icon5 from '@/assets/img/5.png'
import { ref } from 'vue'

const title = ref('首页')
console.log('title: ', title.value)
const imgArr = [
  { icon: icon1, title: '去选课' },
  { icon: icon2, title: '去打卡' },
  { icon: icon3, title: '我的作业' },
  { icon: icon4, title: '去认定' },
  { icon: icon5, title: '课程表' }
]
</script>
<style lang="less" scoped>
.s {
  font-size: 60px;
}
.center {
  text-align: center;
  padding-top: 10px;
  font-size: 14px;
  color: #999;
  .icon {
    margin: 0 auto;
  }
}
.cardimg {
  width: 100%;
  height: 180px;
}
.mb-20 {
  margin-bottom: 20px;
}
</style>
