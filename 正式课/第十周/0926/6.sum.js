// 当前代码运行在了服务器上node环境； 自己的电脑就是一台服务器；
/*console.log(199);
function fn() {
    console.log(200)
}
fn();*/
// 在这个模块下封装一个sum方法；在useSum 模块中进行使用；
function sum() {
    let total = null;
    for(let i=0;i<arguments.length;i++){
        let cur =Number(arguments[i]);
        if(!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}
console.log(100);
// module.exports=10;
function a() {

}
exports.sum=sum;
// 导出模块；
/*module.exports.sum = sum;
exports.sum = sum;*/
/*module.exports.sum = sum;
module.exports.a = sum;*/
// exports 的空间不能发生改变；
// 但是module.exports 是可以修改空间地址的；
/*exports = {
    sum:sum,
    a:a
} 不可以这样修改*/
