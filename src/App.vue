<script setup>
import Home from 'comps/Home.vue'

</script> 

<template>
  <Home />
</template>

<style>
::-webkit-scrollbar {
  width: 12px; /* 设置滚动条的宽度 */
}

::-webkit-scrollbar-thumb {
  background-color: #4ed8f4; /* 设置滚动条的前景色（滑块颜色） */
  border-radius: 6px; /* 设置滚动条滑块的圆角 */
}

::-webkit-scrollbar-track {
  background-color: #ecf0f1; /* 设置滚动条的背景色 */
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
