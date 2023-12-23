<script setup>
import {useCounterStore} from '@/stores/counter'

const counter = useCounterStore()

function dianji1(item) {
  counter.$patch({count: counter.count = item + item - 1 - 1})
}

function dianji2(item) {
  counter.$patch({count: counter.count = item + item - 1})
}

let quan = [
  "乾",
  "坤",
  "屯",
  "蒙",
  "需",
  "讼",
  "师",
  "比",
  "小畜",
  "履",
  "泰",
  "否",
  "同人",
  "大有",
  "谦",
  "豫",
  "随",
  "蛊",
  "临",
  "观",
  "噬嗑",
  "贲",
  "剥",
  "复",
  "无妄",
  "大畜",
  "颐",
  "大过",
  "坎",
  "离",
  "咸",
  "恒",
  "遁",
  "大壮",
  "晋",
  "明夷",
  "家人",
  "睽",
  "蹇",
  "解",
  "损",
  "益",
  "夬",
  "垢",
  "萃",
  "升",
  "困",
  "井",
  "革",
  "鼎",
  "震",
  "艮",
  "渐",
  "归妹",
  "丰",
  "旅",
  "巽",
  "兑",
  "涣",
  "节",
  "中孚",
  "小过",
  "既济",
  "未济",
];
</script>


<template>
  <aside class="pre-scrollable text-center" style="overflow-y:auto; overflow-x: hidden; width:200px; height:100vh;">
      <div class="row justify-content-evenly py-md-1 text-center" v-for="item in 32" >
            <button type="button" class="btn btn-outline-info text-nowrap col-md-5 text-center" @click="dianji1(item)">{{ quan[item + item -2] }}第{{ item + item - 1 }}</button>
            <button type="button" class="btn btn-outline-info text-nowrap col-md-5 text-center" @click="dianji2(item)">{{ quan[item + item - 1] }}第{{ item + item }}</button>
      </div>
  </aside>
</template>

