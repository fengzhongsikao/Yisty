<script setup>
import Aside from 'comps/Aside.vue'
import Sixgua from 'comps/Sixgua.vue';
import Myheader from 'comps/Myheader.vue';
import Taiji from 'comps/Taiji.vue'
import { defineAsyncComponent } from 'vue';

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore();
const { showtaiji } = storeToRefs(counter);

const SyneVue = defineAsyncComponent(() => import('comps/Yaoci.vue')

)
</script>

<template>
  <el-container>
    <el-header>
      <Myheader></Myheader>
    </el-header>
    <el-container class="taiji1" v-if="showtaiji == true" :class="[showtaiji ? 'yanse' : '']"
      style="height: calc(100vh - 60px)">
      <Taiji></Taiji>
    </el-container>
    <el-container style="height: 100vh" v-if="showtaiji == false">
      <Aside></Aside>
      <el-main class="elmain1">
        <div class="left">
          <Suspense>
            <template #default>
              <SyneVue></SyneVue>
            </template>
            <template #fallback>
              <div></div>
            </template>
          </Suspense>
        </div>
        <div class="you">
          <Sixgua></Sixgua>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.yanse {
  background: #00cec9;
}

.you {
  width: 100%;
  display: flex;
  margin-left: 100px;
  flex-direction: column;
}

.taiji1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.elmain1 {
  display: flex;

}

.el-header {
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  border-bottom: solid 1px #ddd;
}



.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}
</style>
