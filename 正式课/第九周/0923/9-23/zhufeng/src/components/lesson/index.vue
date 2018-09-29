<template>
    <div>
        <div class="btn_box">
            <router-link to='/lesson/css'>css</router-link>
            <router-link to='/lesson/js'>js</router-link>
            <router-link to='/lesson/vue'>vue</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .btn_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-bottom:1px solid #000;
  }
  .btn_box a{
    flex: 1;
    text-align: center
  }
  .btn_box a.current{
    background: blue;
    color: #fff;
  }
</style>