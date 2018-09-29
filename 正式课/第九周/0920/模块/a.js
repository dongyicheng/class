let str11 = require('./b');//后缀 .js 可省略
let obj={
    name:'zhufeng'
};
console.log(str11);
// module.exports=obj;//这种方式的导出权重比较高
exports.a='珠峰';
exports.obj=obj;
exports.str11=str11;
//node 的模块导出 exports 导出