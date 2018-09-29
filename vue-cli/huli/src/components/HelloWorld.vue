<template>
  <div class="bg">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="title_bottom">
      <router-link to='/home'>
      <i class="iconfont icon-home"></i>
      <span>首页</span>
      </router-link>
      <router-link to='/lesson' >
      <i class="iconfont icon-lesson"></i>
      <span>课程页</span>
      </router-link>
      <router-link to='/about'>
      <i class="iconfont icon-about"></i>
      <span>关于我们</span>
      </router-link>
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
<style scoped lang='less'>
.bg{
  background: rgb(240, 233, 233);
  width:100%;
  height: 100%;
}
.title_bottom{
  position: fixed;
  display: flex;
  bottom: 0;
  left:0;
  background: #fff;
  width: 100%;
  height: 1.5rem;
  border-top: 1px solid #ccc;
  a{
    font-size: 0.4rem;
    display:inline-block;
    text-align: center;
    color: #000;
    flex: 1;
    box-sizing: border-box;
    text-decoration: none;
    padding-top: 0.3rem;
    i{
      display: block;
      font-size: 0.5rem;
    }
    span{
      display: block;
    }
  }
  a.current{
    color:burlywood;
  }
}

</style>
