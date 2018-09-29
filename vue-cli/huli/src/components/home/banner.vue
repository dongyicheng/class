<template>

    <div class="banner">
        <mySwiper :ary='arr'></mySwiper>
    </div>
</template>

<script>
   import mySwiper from '@/common/swiper.vue' 
    export default {
        components:{
            mySwiper,
        },
        created(){
            this.$store.dispatch('getBannerData')
        },
        computed:{
            arr(){
                return this.$store.state.bannerData
            }
        }
    }
</script>

<style scoped lang='less'>
.banner{
    height: 4rem;
    margin-top: 1.3rem;
  }
</style>