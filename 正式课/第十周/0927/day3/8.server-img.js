let  http = require("http");
let  fs = require("fs");
// 如果是图片的话，那么node默认读出一个buffer类型的值；直接将buffer类型返回客户端就可以了；客户端会根据当前的类型，解析成一张图片；
// 常见的mime类型
// .html    text/html
// .css     text/css
// .txt     text/plain
// .js      application/javascript
// .json    application/json
// .png     image/png
// .jpg     image/jpeg

// 从浏览器url发送请求，到浏览器接收到数据，发生了哪些事情；
// 客户端可以通过地址栏在有网的情况下可以向服务器发送请求，首先经过DNS域名进行解析，找到对应的IP地址那个服务器；服务器根据url中的端口号找到自己端口下的项目；根据url中的路径进行读数据；读取成功后，发送给客户端之前，会首先将响应头发送给客户端；然后把数据整理发送给客户端；客户端接收到数据，形成DOM树，css树，render树进行渲染；

http.createServer(function(req,res){
    if(req.url==="/myDream.jpg"){
        res.setHeader("Content-Type","image/jpeg")
        fs.readFile("./myDream.jpg",function (err,data) {
            console.log(data);
            res.end(data);
        })
    }
   fs.readFile("."+req.url,"utf8",function (err,data) {
       res.end(data);
   })
}).listen(8888,function () {
    console.log("端口启动成功")
});

