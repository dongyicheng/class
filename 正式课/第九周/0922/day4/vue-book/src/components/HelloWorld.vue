<template>
  <div class="hello">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--<router-view></router-view>-->
    <!--加这个 keep-alive 是为了保证 第一次进来加载数据-->
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from '@/common/tabs.vue';
  export default {
    name: 'HelloWorld',
    components:{
      //注册本组件 要使用的 的组件
      Tab
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

