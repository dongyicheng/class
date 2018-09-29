<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item,index) in ary" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "index",
        props:['ary'],
        mounted(){
          // console.log(Swiper);
          // this.swiperInit();
          // 需要在DOM渲染完毕之后在去初始化 swiper
          // console.log(this.swiperInit);;
        },
        updated(){
          this.swiperInit();
        },
        methods:{
          swiperInit(){
            // 自己定的 初始化 swiper 的方法
            new Swiper('.swiper-container',{
              // autoplay:true,
              autoplay:{
                disableOnInteraction:false
              },
              pagination:{
                el:'.swiper-pagination',
                // bulletActiveClass: 'my-bullet-active',
              },
              loop:true
            })
          }
        }
    }
</script>

<style scoped lang="less">
  .swiper-container{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // .swiper-pagination{
  //   .my-bullet-active{
  //     background-color: aquamarine;
  //   }
  // }
</style>
