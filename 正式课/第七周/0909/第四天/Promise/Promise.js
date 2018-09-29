//原生Promise 接受一个 函数作为参数
function Promise(fn) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;//先设置 传给成功函数的初始值
    self.reason = undefined;// 先设置 传给失败函数的初始值
    self.resCallbacks = [];// 存储成功的回调
    self.rejCallbacks = [];// 存储失败的回调

    function resolve(value) {
        //只有是pending状态才去执行相关操作\
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
            self.resCallbacks.forEach((item)=>{
                item && item(self.value)
            })
        }
    }
    function reject(reason) {
        //只有是pending状态才去执行相关操作
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.rejCallbacks.forEach(item=>{
                item && item(self.reason)
            })
        }
    }
    try {
        fn(resolve,reject);
    }catch (e) {
        reject(e);
    }

}
Promise.prototype.then = function (res,rej) {
    //根据什么属性 决定  res实时rej 执行  ---> status
    let self = this;
    console.log(self.status);
    if(self.status == 'resolved'){
        // res(self.value);
        return new Promise(function (res2,rej2) {
            let val = res(self.value);
            res2(val);
        })
        //
    }
    if(self.status == 'rejected'){
        // rej(self.reason);
        return new Promise(function (res2,rej2) {
            let val = rej(self.reason);
            res2(val);
        })
    }

    if(self.status == 'pending'){
        //处理异步函数的；
        // self.resCallbacks.push(res);//把成功的回调函数存储到self.resCallbacks
        // self.rejCallbacks.push(rej);//把失败的回调函数存储到self.rejCallbacks
        return new Promise(function (res2,rej2) {
            self.resCallbacks.push(function (value) {
                let val = res(value);
                res2(val);
            });
            self.rejCallbacks.push(function(reason){
                let val = rej(reason);
                res2(val)
            });
        })
    }
};

var p2 = new Promise(function (res,rej) {
    // console.log(q);
    setTimeout(function () {
        res(123);
    },2000);
    // res(123);
    // console.log(1234);
}).then((data)=>{
    console.log(data);
    return 666
},(res)=>{
    console.log(res);
}).then((data)=>{
    console.log(data);
},()=>{});
