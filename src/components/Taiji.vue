<script setup>

</script> 


<template>
    <div id="wrapper">
        <img id="image" src="@/assets/yi.png" alt="1" style="width: 300px;height: 280px;">
    </div>
</template>


<style scoped>
#image {
    animation: rotate 2s linear infinite;
    transform-origin: center;
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