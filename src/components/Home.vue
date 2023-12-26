<script setup>
import Aside from 'comps/Aside.vue'
import Sixgua from 'comps/Sixgua.vue';
import Myheader from 'comps/Myheader.vue';
import Taiji from 'comps/Taiji.vue'
import {defineAsyncComponent} from 'vue';

import {useCounterStore} from '@/stores/counter'
import {storeToRefs} from 'pinia'
import Ying from "comps/twoyao/ying.vue";
import Yang from "comps/twoyao/yang.vue";

const counter = useCounterStore();
const {showtaiji} = storeToRefs(counter);

const SyneVue = defineAsyncComponent(() => import('comps/Yaoci.vue'))
</script>

<template>
<div class="">
<!--    顶部tabbar-->
    <nav class="navbar  navbar-expand-lg bg-light navbar-dark">
      <Myheader></Myheader>
    </nav>
  <!-- 图片显示 -->
  <div class="img1" v-if="showtaiji === true" :class="[showtaiji ? 'yanse' : '']"
  >
    <Taiji class="img2 d-flex justify-content-center"></Taiji>
  </div>
  <!--  爻辞主页-->
  <main class="container-fluid " v-if="showtaiji===false">
    <div class="row">
      <!--   左侧按钮区域   -->
      <div class="col-md-3 col-sm-4">
        <Aside></Aside>
      </div>
      <!--  爻辞与卦象显示区域-->
      <div class="col-md-9 col-sm-6" >
        <div class="row">
          <div class="col-md-5 col-sm-12 pt-5">
            <!--  异步渲染组件-->
            <Suspense>
              <template #default>
                <SyneVue class="row"></SyneVue>
              </template>
              <template #fallback>
                <div></div>
              </template>
            </Suspense>
          </div>
          <div class="col-md-7 c0l-sm-7 col-7 pt-5">
            <Sixgua></Sixgua>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

</template>

<style scoped>
.img1{
  height: calc(100vh - 88px);
  background-color: #f1c40f;
}
.img2{
  transform: translateY(50%);
}

</style>
