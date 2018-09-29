// node的核心模块；也叫内置模块；
// 跟着node的安装包一起下载下来的模块都是内置的模块；
// 后端：增删改查；
// 登录： 查询；
// 注册： 新增；
// node常见的内置模块； fs   path  url   http;
let fs = require("fs");
// fs.readFile(path,option,callback);
// path : 当前读文件的路径
// option : 读出来数据的编码格式
// callback : 回调函数 两个参数；第一个是代表读文件错误信息；如果没有错误，那么默认值是null；第二个参数是读出的数据；
// 非阻塞I/O 操作；
//1. readFile : 是一个异步读取文件的方法；
//fs.readFile("./custom.json","utf8",function (err,data) {
   /* console.log(err);
    console.log(data);*/
//});
// 2. readFileSync : 是一个同步读取文件的方法
// readFileSync(path,option)
// 读出来的数据默认是一个JSON格式的字符串；JSON.parse;

//

let con = fs.readFileSync('./custom.json',"utf8");
console.log(typeof con);
console.log(100);

// 三个buffer值组成一个汉字
// 一个数字或一个字母都是一个buffer；
//console.log(Buffer.from("2"));
// 把buffer转成utf8格式的用toString；


// fs.writeFile
// fs.writeFile(path,data,option,callback);
// 当异步写入成功之后，执行这个回调；新的数据会将老的数据进行覆盖；
/* fs.readFile("./custom.json","utf8",function (err,data) {
    let  ary = JSON.parse(data);
    ary.push({"name":"任玉伟"});
    data = JSON.stringify(ary);
    fs.writeFile("./custom.json",data,"utf8",function (err) {
        console.log(err);
    });
}); */

// writeFileSync :
// fs.writeFileSync(path,data,"utf8")


