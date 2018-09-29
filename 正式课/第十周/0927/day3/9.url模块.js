let  http = require("http");
let  fs = require("fs");
let  url = require("url");
http.createServer(function(req,res){
    //url.parse : 用来处理路径的；
    //console.log(100);
    //console.log(req.url);
    //console.log(url.parse(req.url,true));
    // pathname : 当前的路径
    // query : 参数组合的对象；
    let  {pathname,query} = url.parse(req.url,true);
    if(pathname==="/login"){
        res.end("100");
    }
    if(pathname==="/regiter"){
        res.end("200");
    }
}).listen(6888,function () {
    console.log("端口启动成功")
});

// "/index.html?username=aaaa&password=1111";
// ==> {username:"aaaa",password:1111}

