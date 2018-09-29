let http = require("http");
let fs = require("fs");
let mime = require("mime");
let  url = require("url");
http.createServer(function (req,res) {
    let  {pathname} = url.parse(req.url,true);
    // mime ： 有个getType方法的返回值是当前文件对应的mime类型；
    // 解决了不同的文件类型设置不同的响应头；
    res.setHeader("Content-Type",mime.getType(pathname));
    console.log(mime.getType(pathname));
    console.log(__dirname);
    
    fs.readFile(__dirname+pathname,function (err,data) {
        console.log(err)
        res.end(data);
    });
}).listen(8080,function(){

});
