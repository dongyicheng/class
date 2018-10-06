<template>
<div class="info_box">
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="姓名">
            <Input v-model="formLeft.name"></Input>
        </FormItem>
        <FormItem label="年龄">
            <Input v-model="formLeft.age"></Input>
        </FormItem>
        <FormItem label="地址">
            <Input v-model="formLeft.address"></Input>
        </FormItem>
    </Form>
    <Button type="success" long  @click="submit">提交</Button>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                formLeft: {
                    name: '',
                    age: '',
                    address: ''
                },
                formLeft1: { //备用的
                    name: '',
                    age: '',
                    address: ''
                }
            }
        },
        created(){
            console.log(this.$route.query);
            //通过 query 获取ID;
            if(this.$route.query.id !== undefined){
                //只有  有ID的 时候才去发送请求
                this.getData()
            }
            
        },
        methods:{
            getData(){
                axios.get(`/info?id=${this.$route.query.id}`).then((data)=>{
                    console.log(data); 
                    //从后台获取数据之后， 把数据赋给 formLeft即可
                    if(data.data.errorCode == 0){
                        this.formLeft = data.data.data;
                    }           
                })
            },
            edit(){
                // 吧修改后的信息发给后台
                this.formLeft.id = this.$route.query.id;
                axios.post('/edit',this.formLeft).then(data=>{
                    if(data.data.errorCode == 0){
                        // this.formLeft.name = '';
                        // this.formLeft.age = '';
                        // this.formLeft.address = '';
                        this.formLeft = JSON.parse(JSON.stringify(this.formLeft1));
                        //深拷贝  利用JSON的方法 新产生一个对象；

                        // this.$router.push('/info');
                        this.$router.replace('/info');
                    }
                })
            },
            add(){
                axios.post('/add',this.formLeft).then((data)=>{
                    if(data.data.errorCode == 0){
                        this.formLeft = JSON.parse(JSON.stringify(this.formLeft1));
                    }
                })
            },
            submit(){
                //什么时候算新增  没有ID就是新增
                //有ID 就是编辑
                if(this.$route.query.id != undefined){
                    // 编辑
                    this.edit()
                }else{
                    // 新增人员
                    this.add();
                }
                console.log(1234);
                
            }
        }
    }
</script>
<style scoped>
    .info_box{
        width: 600px;
        margin: auto
    }
</style>
