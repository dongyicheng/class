//原生 Promise 接受一个函数作为参数
function Promise(fn) {
    let self = this ;
    self.status='pending';
    self.value=undefined;//先设置传给成功函数的初始值
    self.reason = undefined;//先设置传给失败函数的初始值
    self.resCallbacks=[];//存储成功的回调
    self.rejCallbacks=[];//存储失败的回调

    function resolve() {
        //只有是pending状态才执行相关操作
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
            self.resCallbacks.forEach((item)=>{
                item&&item(self.value)
            })
        }
    }
    function reject() {
        //只有是pending状态才执行相关操作
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.rejCallbacks.forEach((item)=>{
                item&&item(self.reason)
            })
        }
    }
    try{
        fn(resolve,reject)
    }catch(e) {
        reject(e)
    }

}
Promise.prototype.then=function (res,rej) {
    //根据什么属性  决定  res还是rej执行  --->status
    let self = this;
    if(self.status == 'resolved'){
        res(self.value);
    }
    if(self.status == 'rejected'){
        rej(self.value);
    }
    if(self.status == 'pending'){
        //处理异步函数
        self.resCallbacks.push(res);//把成功的回调存储到 self.resCallbacks
        self.rejCallbacks.push(rej)//把失败的回调存储到 self.rejCallbacks
    }
}
let p2=new Promise(function (res,rej) {
    res(123);
    console.log(1234);
}).then((data)=>{
    console.log(data);
},(res)=>{
    console.log(res);
});