let obj1 = require('./a.js');//node 引入模块 的方式
//引入第三方模块时 不需要去添加路径 ; 直接引入即可
//先在同级路径下的 node_modules中查找模块 , 没找到再去上级路径查找 , 直到找到根路径
let jq = require('jquery');
// let react=require('react');
// console.log(react);//报错


let qqq=require('./b').str;
console.log(obj1,jq,qqq);