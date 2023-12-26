<script setup>
import {ref} from 'vue'

const seconds = ref(2)
const isAnimationRunning = ref(true);

function swichStatus() {
  isAnimationRunning.value = !isAnimationRunning.value
}
</script>

<template>
  <div class="container-fluid">
    <div class="row pb-4 pt-1 ">
      <div class="col-md-5"></div>
      <div class="col-md-2">
        <div class="pb-3" v-if="isAnimationRunning">
          <input type="text" class="form-control rounded-0 " placeholder="输入一圈的秒速(为数字)" v-model="seconds">
        </div>
      </div>
      <div class="col-md-5"></div>
    </div>
    <div class="row ">
      <div class="col-md-4"></div>
      <div class="col-md-4">
       <img ref="div" id="image" src="@/assets/yi.png"
            alt="1" @click="swichStatus"
            :style="{animationPlayState:`${isAnimationRunning===true?'running':'paused'}`,
           animationDuration:`${seconds}s`}"
       >
       <div class="col-md-4"></div>
     </div>
    </div>
  </div>

</template>

<style scoped>

.container-fluid{
  background-color: #f1c40f;
  height: calc(100vh - 88px);
}
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

