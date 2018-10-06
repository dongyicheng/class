<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,index) in ary' :key='index'>
                <img :src="item.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
  updated() {
    this.swiperInit();
  },
  props: ["ary"],
  methods: {
    swiperInit() {
      new Swiper(".swiper-container", {
        autoplay: {
          disableOnInteraction: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
          bulletActiveClass: 'my-bullet-active'
        }
      });
    }
  }
};
</script>

<style lang='less'>
.swiper-container {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination .my-bullet-active{
      background: #fff;
      opacity: 1;
  }
  
}
</style>