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
    <div class="toolbar">
        <img src="/public/favicon.ico" alt="1" style="width: 24px;height: 24px;">
        <a href="/" class="logo" @click.prevent="toshouye()">首页</a>
        <ul class="links">
            <li><a href="" @click.prevent="toyi()">易经</a></li>
        </ul>
    </div>
</template>


<style scoped>
.toolbar {
    display: flex;
    height: 60px;
    flex-grow: 1;
    align-items: center;
}

.logo {
    color: #3498db;
    font-weight: bold;
    margin-left: 20px;
}

.links {
    display: flex;
    margin: 0 auto;
}

a {
    color: #777;
    margin: 0 10px;
}

a:hover {
    color: #2ecc71;
}

li a {
    color: #B241FE;
}
</style>