<template>
    <div>
      <Til>列表页</Til>
      <div class="list_box">
        <ListOne
          v-for="(val,index) in listData"
          :key="index" :item="val"></ListOne>
      </div>
    </div>
</template>
<script>
    import Til from  '@/common/title.vue';
    import ListOne from './listone.vue';
    import  {mapState} from 'vuex'
    // 引入 title 组件
    export default {
        name: "index",
        components:{
          Til,ListOne
        },
        created(){
          this.$store.dispatch('getListData',{name:'zf'})
        },
        //若想用mapState 则需要我们先引入
        computed:mapState(['listData'])
    }
</script>

<style scoped lang="less">
  .list_box{
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
