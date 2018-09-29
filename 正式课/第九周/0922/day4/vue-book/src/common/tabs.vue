<template>
  <div class="btn_box">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-container"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-heart"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-plus-circle"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped属性  让当前的这些 样式表 只对 当前组件起作用-->
<style lang="less" scoped>
  //使用less 需要安装  less 和 less-loader 这个两个包
  .btn_box{
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    border-top: 2px solid #ccc;
    background: #fff;
    a{
      flex: 1;
      font-size: 0.5rem;
      text-decoration: none;
      text-align: center;
      color: yellowgreen;
      padding-top: 0.5rem;
      box-sizing: border-box;
      i{
        display: block;
        font-size: 0.6rem;
      }
      span{
        display: block;
      }
    }
    a.current{
      color: red;
    }
  }
</style>
