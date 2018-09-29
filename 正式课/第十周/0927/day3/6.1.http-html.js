let http = require("http");
let fs = require("fs");
// IE浏览器不识别css的文件类型，mine类型；所以需要重新设置的响应头；
http.createServer(function (req,res) {
    console.log(req.url);// /index.html
    if(req.url==="/"){
        fs.readFile("./7.index.html","utf8",function (err,data) {
            res.end(data);
        })
    }
    console.log(req.url);
    if(req.url==="/7.index.css"){
        fs.readFile("./7.index.css","utf8",function (err,data) {
            res.setHeader("Content-Type","text/css;charset=utf-8");
            res.end(data);
        });
    }

    /*fs.readFile("."+req.url,"utf8",function (err,data) {
        res.end(data);
    });*/
}).listen(8082,function () {
    console.log("端口启动成功");
});
