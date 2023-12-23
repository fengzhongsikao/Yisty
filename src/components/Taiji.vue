<script setup>
import {ref} from 'vue'

const seconds=ref(2)
</script>

<template>
    <div id="wrapper">
        <img  id="image" src="@/assets/yi.png" alt="1" style="width: 300px;height: 280px;"
             >
    </div>
</template>

<!--animation: rotate 0s linear infinite;-->
<style scoped>
#image {
    transform-origin: center;
    animation: rotate 2s linear infinite;
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