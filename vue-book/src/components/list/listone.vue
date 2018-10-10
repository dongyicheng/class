<template>
  <div class="list_one">
    <div class="pic_box">
      <img :src="item.bookCover" alt="">
    </div>
    <div class="content_box">
      <h3 class="title">{{item.bookName}}</h3>
      <p class="desc">{{item.bookInfo}}</p>
      <div class="price">￥{{item.bookPrice}}</div>
      <button @click="remove">删除</button>
      <button @click="collect">收藏</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        props:['item'],
        methods:{
          remove(){
            // this.$store.state.listData
            console.log(this.item);
            this.$store.commit('removeListOne',this.item);
            //vue 推荐使用 commit 改变 store 中的数据
          },
          collect(){
            //  向 收藏列表中添加数据
            this.$store.commit('addCollect',this.item)
          }
        }
    }
</script>

<style scoped lang="less">
  .list_one{
    display: flex;
    border-bottom: 1px solid #000;
    .pic_box{
      flex: 4;
      img{
        width: 100%;
      }
    }
    .content_box{
      flex: 6;
      .title{
        font-size: 0.7rem;
      }
      .desc{
        font-size: 0.5rem;
      }
      .price{
        font-size: 0.4rem;
        color: red;
      }
      button{
        font-size: 0.4rem;
        background: red;
        width: 2rem;
        height: 1rem;
        border-radius: 0.5rem;
        outline: none;
        border: none;
        color: #fff;
      }
    }
  }
</style>
