<script setup>
import { ref} from 'vue'

const seconds=ref(2)
const isAnimationRunning = ref(true);
function swichStatus(){
  isAnimationRunning.value=!isAnimationRunning.value
}
</script>

<template>
    <div id="wrapper">
        <img  ref="div" id="image" src="@/assets/yi.png" alt="1" @click="swichStatus" :style="{animationPlayState:`${isAnimationRunning==true?'running':'paused'}`}">
    </div>
</template>

<style scoped>
#image{
  transform-origin: center;
  animation: rotate 2s linear infinite;
  width: 300px;
  height: 280px;
}

@keyframes rotate{
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>

