<template>
  <div class="hello">
      <router-view></router-view>
      <div class="btn_box">
        <router-link to='/home'>首页</router-link>
        <router-link to='/lesson'>课程中心</router-link>
        <router-link to='/about'>关于我们</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn_box{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    border-top:1px solid #000;
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
