<template>
    <div>
      <Til>收藏列表</Til>
      <div class="list_box">
        <ListOne
          v-for="(val,index) in list"
          :key="index"
          :item="val"
        ></ListOne>
      </div>
    </div>
</template>

<script>
    import Til from '@/common/title.vue';
    import ListOne from './listone.vue';
    export default {
        name: "index",
        components:{
          Til,ListOne
        },
        computed:{
          list(){
            return this.$store.state.collectList
          }
        }
    }
</script>

<style scoped lang="less">
  .list_box{
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }
</style>
