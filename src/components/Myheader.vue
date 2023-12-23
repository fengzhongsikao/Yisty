<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore();
const { showtaiji } = storeToRefs(counter);
function toshouye() {
    counter.$patch({ showtaiji: counter.showtaiji = true })
}
function toyi() {
    counter.$patch({ showtaiji: counter.showtaiji = false })
}
</script> 


<template>
    <nav class="container ">
        <img src="/public/favicon.ico" @click.prevent="toshouye()" alt="1" style="width: 24px;height: 24px;">
        <a class="nav-link navbar-brand text-danger m-3" @click.prevent="toshouye()">首页</a>
        <a class="nav-link text-success mx-auto" @click.prevent="toyi()" >易经</a>
      <i class="navbar-toggler-icon"></i>
    </nav>
</template>

