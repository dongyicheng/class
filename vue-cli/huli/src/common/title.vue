<template>
    <div class="title">
        <h2><slot></slot></h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .title{
        background: burlywood;
        width: 100%;
        height: 1.3rem;
        position: fixed;
        top: 0;
        left: 0;
        color: #fff;
        z-index: 10;
        line-height: 1.3rem;
        text-align: center;
    }
</style>