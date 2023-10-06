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
    <div class="yaoci">
        <!-- {{ count }} -->
        <!-- {{ data[count].yaoci[1] }} -->
        <h3>{{ data[count].guaname }}</h3>
        <p>{{ data[count].updowm }}</p>
        <br>
        <h5>{{ data[count].guaci }}</h5>
        <p>{{ data[count].yaoci[0] }}</p>
        <p>{{ data[count].yaoci[1] }}</p>
        <p>{{ data[count].yaoci[2] }}</p>
        <p>{{ data[count].yaoci[3] }}</p>
        <p>{{ data[count].yaoci[4] }}</p>
        <p>{{ data[count].yaoci[5] }}</p>

    </div>
</template>


<style scoped>
.yaoci {
    width: 400px;
}

p {
    line-height: 30px;
}
</style>