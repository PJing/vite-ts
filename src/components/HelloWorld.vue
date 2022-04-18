<!--
 * @Author: 彭璟
 * @Date: 2022-03-15 15:07:12
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-12 16:47:32
 * @Description: File description
-->
<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { onMounted, reactive, Ref, ref } from 'vue'

interface Props {
  sex: string
  age: number
}
interface User {
  name: string
  id?: number
}
const parProps = defineProps<Props>()
console.log(parProps.age)

const state = reactive<User>({
  name: 'pengjing'
})
defineEmits<{
  (e: 'getUser', user: User): void
}>()
function getCity() {
  console.log('wuhan')
}

const year = ref<string | number>('hah')
year.value = 455
const year2: Ref<string | number> = ref(123)
year2.value = '2022'

interface Book {
  title: string
  year?: number
}
const book: Book = reactive({
  title: '西游记',
  year: 2222
})
console.log(book)

const count = ref(2)

const double = computed<string>(() => count.value * 2 + '')
console.log('double: ', double.value)

function handChange(event: Event) {
  console.log('event: ', (event.target as HTMLInputElement).value)
}
function tapButton(event: Event) {
  console.log('event: ', event.target as HTMLButtonElement)
}
const el = ref<HTMLSpanElement | null>(null)
onMounted(() => {
  console.log('el: ', el.value)
})

const alertDialog = () => {
  alert('我是子组件hello-world弹窗')
}

defineExpose({ state, getCity, alertDialog })
</script>

<template>
  <span ref="el">{{ sex }}</span>
  <span>{{ age }}</span>
  <van-button block type="success" @click="$emit('getUser', state)">
    触发父组件的事件
  </van-button>
  <van-field placeholder="请输入" @input="handChange" />
  <button data-name="btn1" @click="tapButton">点击</button>
  <van-button type="danger" @click="tapButton">点击</van-button>
</template>

<style scoped></style>
