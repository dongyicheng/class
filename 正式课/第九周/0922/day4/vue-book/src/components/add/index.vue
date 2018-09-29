<template>
    <div>
      <Til>添加</Til>
      <div class="inp_box">
        <label>书的名称</label>
        <input type="text" v-model="bookName">
        <label>书的信息</label>
        <input type="text" v-model="bookInfo">
        <label>书的价格</label>
        <input type="text" v-model="bookPrice">
        <label>书的封面</label>
        <input type="text" v-model="bookCover">

        <button @click="add">添加</button>
      </div>
    </div>
</template>

<script>
    import Til from '@/common/title.vue'
    export default {
        name: "index",
        data(){
          return{
            bookName:'',
            bookInfo:'',
            bookPrice:'',
            bookCover:''
          }
        },
        components:{
          Til
        },
        methods:{
          add(){
            let pic = /http/.test(this.bookCover) ? this.bookCover : 'https://img13.360buyimg.com/n1/s200x200_jfs/t5107/58/1653926146/128683/79be7ee8/5912e2fcNf9a839fc.jpg';
            let obj = {
              bookName:this.bookName,
              bookInfo:this.bookInfo,
              bookPrice:this.bookPrice,
              bookCover:pic
            };
            this.bookName = '';
            this.bookInfo = '';
            this.bookPrice = '';
            this.bookCover = '';
            this.$store.commit('addListOne',obj);
            // this.$router.push('/list');// 编程式导航
            this.$router.push({path:'/list',query:{q:1}});// 编程式导航
          }
        }
    }
</script>

<style scoped lang="less">
  .inp_box{
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    text-align: center;
    label{
      display: block;
      font-size: 0.8rem;
      margin-top: 0.2rem;
    }
    input{
      width: 80%;
      height: 1rem;
      margin-top: 0.1rem;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 0.2rem;
      box-shadow: 2px 2px 3px #ccc;
      font-size: 0.4rem;
      padding-left: 0.2rem;
    }
    button{
      margin-top: 1rem;
      font-size: 0.8rem;
      width: 80%;
      height: 1.5rem;
      background: #1eabf6;
      color: #fff;
    }
  }
</style>
