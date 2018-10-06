let path = require('path');
// let str = path.resolve('../fs/a.js','../fs/1.txt');
__dirname;
// console.log(str);

let url = require('url');
let str = path.resolve('../fs/a.js?a=12&b=13&c=434');
console.log(str);
let obj = url.parse(str,true);
// 一般用来解析url 中的参数  第二个参数需要为true
console.log(obj);



