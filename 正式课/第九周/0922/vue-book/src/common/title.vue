<template>
    <div class="til">
      <!--<h2>{{til}}</h2>-->
      <h2><slot></slot></h2>
    </div>
</template>

<script>
    export default {
      data(){
        return{}
      },
      props:['til']
    }
</script>

<style scoped lang="less">
  .til{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background: #1eabf6;
    text-align: center;
    line-height: 1.5rem;
    z-index: 300;
  }
</style>
