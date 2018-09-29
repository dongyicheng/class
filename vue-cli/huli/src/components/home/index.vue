<template>
    <div>
        <my-til>首页</my-til>
        <Banner></Banner>
        <Login></Login>
        <News></News>
    </div>
</template>

<script>
import Banner from './banner'
import myTil from '@/common/title.vue'
import Login from './login.vue'
import News from './new.vue'
    export default {
        components:{
            Banner,
            myTil,
            Login,
            News,
        }
    }
</script>

<style scoped>

</style>