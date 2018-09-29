<template>
    <div>
        <div class="back" @click="back"> <返回首页</div>
        <my-til>关于我们</my-til>
    </div>
</template>

<script>
import myTil from '@/common/title.vue'
    export default {
        components:{
            myTil,
        },
        methods:{
            back(){
                this.$router.push({path:'/home'});
            }
        }
    }
</script>

<style scoped>
 .back{
     color:#fff;
     position:fixed;
     z-index: 100;
     height: 1.3rem;
     line-height: 1.3rem;
     font-size: 0.4rem
 }
</style>