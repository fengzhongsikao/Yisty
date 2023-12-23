<script setup>
import { axios } from '@/server/axios'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue';

const response = await axios.get('/yaoci2.json');
const data = ref(JSON.parse(response).data);
const counter = useCounterStore();
const { count } = storeToRefs(counter);
</script> 

<template>
     <div class="row ms-2">
       <div class="col-md-12 mx-auto col-12">
         <div class="row" >
           <h5 class="col-md-10 col-10" >{{ data[count].guaname }}</h5>
         </div>
         <div class="row"><p class="col-md-10">{{ data[count].updowm }}</p></div>
         <div class="row"> <h6 class="col-md-10">{{ data[count].guaci }}</h6></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[0] }}</p></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[1] }}</p></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[2] }}</p></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[3] }}</p></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[4] }}</p></div>
         <div class="row"><p class="col-md-10">{{ data[count].yaoci[5] }}</p></div>
       </div>
     </div>
</template>
