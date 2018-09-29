var obj = {};
function on(type,fn) {
    obj[type] = obj[type] || [];
    obj[type].push(fn)
};
function fire(type,...arg) {
    obj[type] = obj[type] || [];
    obj[type].forEach((item)=>{
        item(...arg)
    })
};
on('吃饭',function (...arg) {
    console.log("吃鱼",arg)
});
on('吃饭',function () {
    console.log("吃虾")
});
on('吃饭',function () {
    console.log("吃排骨")
});

fire('吃饭','第二个参数','第三个参数');