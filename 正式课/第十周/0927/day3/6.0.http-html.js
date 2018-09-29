let http = require("http");
let fs = require("fs");
// 一个端口号只能起一个服务；如果重复会出现端口号占用的问题；
// 当访问8081端口时，需要将index.html 响应给客户端；

// 如果服务端读取HTML的类型，那么客户端接收到数据之后，会检测出当前是一个HTML类型的数据，会默认按照HTML的类型进行解析；
// 常见的发请求； ajax 浏览器的url  script的src  img  的src  link的href这些属性都会发送请求；
// 当浏览器解析HTML时,当遇到href 、 src 、ajax都会想服务器发送一个请求；
http.createServer(function (req,res) {
    //console.log(req.url);
    if(req.url==="/"){
        fs.readFile("./7.index.html","utf8",function (err,data) {
            // 当读取完毕之后，才把数据响应给客户端；
            res.end(data);
        });
    }else if(req.url==="/7.index.css"){
        fs.readFile("./7.index.css","utf8",function (err,data) {
            // 当读取完毕之后，才把数据响应给客户端；
            res.end(data);
        });
    }else if(req.url==="/7.index.js"){
        fs.readFile("./7.index.js","utf8",function (err,data) {
            // 当读取完毕之后，才把数据响应给客户端；
            res.end(data);
        });
    }
}).listen(8081,function () {
    console.log("端口启动成功");
});
