<template>
  <div class="book_box">
    <img :src="item.img" alt="">
    <p>{{item.title}}</p>
  </div>
</template>

<script>
    export default {
        name: "index",
        props:['item']
    }
</script>

<style scoped>

</style>
