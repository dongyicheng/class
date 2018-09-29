<template>
  <swiper :options="obj">
    <swiper-slide
      v-for="(slide, index) in ary"
      :key="index">
      <img :src="slide.src" alt="">
    </swiper-slide>
    <div class="swiper-pagination " slot="pagination"></div>
  </swiper>
</template>

<script>
  /*
  * new Swiper({})
  *
  * */
    export default {
      name: "index",
      props:['ary'],
      data(){
        return {
          obj:{
            pagination:{
              el:'.swiper-pagination'
            },
            autoplay:{
              disableOnInteraction: false,
            },
            loop:true
          },
          // ary:[1,2,3,4]
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
</style>
