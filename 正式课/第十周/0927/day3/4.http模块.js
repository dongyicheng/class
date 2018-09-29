// 只要修改了server文件，那么一定要重新跑一下；
let  http = require("http");// 导入模块；
let server = http.createServer(function (req,res) {
    // req : 请求   res : 响应；
    // 当客户端请求时，会把当前请求的请求信息放入到这个函数的第一个参数中，
    //console.log(req.url);
    // 当客户端访问时，会执行；
    // 只要客户端请求一次，当前函数执行一次；
    console.log("你很帅");
    console.log(res);
    // 1.结束当前的请求；
    // 2.把后端整理的数据返给客户端；
    res.end("1112222");
});
// 端口号： 0-65535 http默认端口号会走80；https会默认走443；
//让当前的服务监听8000 这个端口；当客户端访问8000端口时，会触发当前server的回调函数；
server.listen(8000,function () {
    // listen的回调函数； 当服务启动成功就会马上执行；只执行一次；
    // 如果端口号启动不成功，该函数不执行；
    console.log("端口启动成功");
});