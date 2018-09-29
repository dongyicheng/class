let obj1 = require('./a.js'); //  node 引入 模块 的方式
//引入第三方模块的时候  我们不需要去添加路径；直接引用即可,
//先在同级路径下的 node_modules中查找 模块，没找到再去上及路径的node_modules中查找，直到找到根路径
let jq = require('jquery');
// let react = require('react');

let qqq = require('./b.js').str;
console.log(obj1,jq,qqq);