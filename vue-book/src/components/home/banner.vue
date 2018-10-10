<template>
    <div class="banner">
      <mySwiper :ary="arr" v-if="arr.length"></mySwiper>
      <!-- <mySwiper :ary="arr"></mySwiper> -->
    </div>
</template>

<script>
    import mySwiper from '@/common/myswiper.vue'
    // import mySwiper from '@/common/myswiper2.vue'
    // 引入之后 需要注册一下
    import axios from 'axios'
    // 引入第三方插件
    export default {
        name: "index",
        data(){
          return{
            // arr:[]
          }
        },
        components:{
          mySwiper
        },
        created(){
          this.$store.dispatch('getBannerData');
          // axios.get('/bannerlist').then((data)=>{
          //   console.log(data);
          //   this.arr = data.data;
          // })
        },
        computed:{
          arr(){
            // console.log(this.$store.state.bannerData);
            return this.$store.state.bannerData
          }
        }
    }
</script>

<style scoped>
  .banner{
    height: 4rem;
    background: #7635f6;
    margin-top: 1.5rem;
  }
</style>
