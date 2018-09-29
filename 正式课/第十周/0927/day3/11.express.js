let  express = require('express');
// express 执行相当于创建一个服务；
let  app = express();

// get post  put  delete  head
// 路由
app.get("/login/:id",function (req,res) {
    console.log(req.path);// 这个是路径
    console.log(req.query);// 这个参数
    console.log(req.host);// 主机域名
    console.log(req.params);// 返回当前路径的参数；
    res.send("希望大家找到好工作");// 不需要再设置响应头；
});
// 只有发送的是post请求，并且路径是/register时，才会拦截住这个方法；
app.post("/register",function (req,res) {
    //
    res.send("注册");
});
// app.all : 不管是什么类型的请求，只要路径对了就可以；
// * : 通配符；可以匹配所有的路径；
app.all("*",function (req,res) {
    res.send("你找对了")
});
// app.listen 是一个监听端口的方法；
app.listen(8081,function () {
    console.log("端口已启动");
});