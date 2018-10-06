<template>
<div>
    <Menu mode="horizontal" :theme="theme1" :active-name="actName" @on-select='tab' >
        <MenuItem name="1">
            <!-- <router-link to='/table' tag='div'> -->
                <Icon type="android-list"></Icon>
                人物列表
            <!-- </router-link> -->
        </MenuItem>
        <MenuItem name="2">
            <!-- <router-link to='info' tag='div'> -->
                <Icon type="ios-people"></Icon>
                人物管理
            <!-- </router-link> -->
        </MenuItem>
        <!-- <MenuItem name="1">
            <Icon type="android-list"></Icon>
            人物列表
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            人物管理
        </MenuItem> -->
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
    
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                // actName:1    用计算属性  因为它的值依赖于 路由
            }
        },
        mounted(){
            console.log(this.$route.path);
        },
        computed:{
            actName(){
                if(this.$route.path == '/table'){
                    return '1'
                }else{
                    return '2'
                }
            }
        },
        methods:{
            // 路由的切换 在这里有两种方式  
            // 一种是  直接把router-link 加载 组件中(因为组件中自己写的样式里有padding值 会有点padding那部分时,样式变了,但路由并没有变   把padding去掉又会变得难看  就用了编程式的导航)
            // 另一种 是利用编程式导航
            tab(name){ //name 是组件传进来的 选中tab 的name 值
                if(name == 1){
                    this.$router.push('./table')
                }else{
                    this.$router.push('./info')
                }
                
            }
        }
    }
</script>
