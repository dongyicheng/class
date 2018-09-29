let p = new Promise(function (resolve, reject) {
    console.log(11111);
    setTimeout(function () {
        resolve(123)
    },1000);
    setTimeout(function () {
        reject(100);
    },2000)
});
p.then((data)=>{
    console.log(data);
    console.log(q);
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
});
console.log(p);