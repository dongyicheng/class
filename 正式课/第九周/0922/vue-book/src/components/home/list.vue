<template>
    <div class="home_list">
      <h2>热门图书</h2>
      <div class="list_box">
        <Book v-for="(val,index) in list" :key="index" :item="val"></Book>
      </div>
    </div>
</template>
<script>
    import Book from './book'
    export default {
        name: "index",
        components:{
          Book
        },
        created(){
          this.$store.dispatch('getHomeList',{name:'zf',age:9})
        },
        computed:{
          list(){
            return this.$store.state.homeList;
          }
        }
    }
</script>

<style scoped lang="less">
  .home_list{
    padding-bottom: 2rem;
    h2{
      height: 1rem;
      line-height: 1rem;
      padding: 0 0.4rem;
      box-sizing: border-box;
      color: #ccbba7;
      font-size: 0.6rem;
    }
    .list_box{
      overflow: hidden;
      padding-top: 0.2rem;
      .book_box{
        width: 50%;
        float: left;
        height: 6rem;
        /*background: #96b474;*/
        text-align: center;
        margin-bottom: .5rem;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
