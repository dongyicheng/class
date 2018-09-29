<template>
    <div class="bg">
        <div class="title">
            <router-link to='/lesson/css'>CSS</router-link>
            <router-link to='/lesson/js'>JS</router-link>
            <router-link to='/lesson/vue'>VUE</router-link>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
.bg{
    width: 100%;
    background-color:burlywood;
    height: 1.5rem;
}
.title{
    margin-left: -40%; 
    display: flex;
    position:fixed;
    top: 0;
    left:50%;
    width: 80%;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    a{
        display: inline-block;
        flex:1;
        font-size: 0.5rem;
        text-decoration: none;
        color:#fff;
    }
}
</style>