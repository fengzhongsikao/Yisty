<script setup>
import {ref} from 'vue'

const seconds = ref(2)
const isAnimationRunning = ref(true);

function swichStatus() {
  isAnimationRunning.value = !isAnimationRunning.value
}
</script>

<template>
  <div id="wrapper" class="container">

    <img ref="div" id="image" src="@/assets/yi.png" alt="1" @click="swichStatus"
         :style="{animationPlayState:`${isAnimationRunning==true?'running':'paused'}`,animationDuration:`${seconds}s`}">
    <div class="pt-5" v-if="isAnimationRunning"><input  type="text" class="form-control rounded-0 " placeholder="输入一圈的秒速(为数字)" v-model="seconds"></div>
  </div>

</template>

<style scoped>
#image {
  transform-origin: center;
  animation: rotate 2s linear infinite;
  width: 300px;
  height: 280px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>

