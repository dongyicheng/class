let http=require("http")
let fs=require("fs")
let mime=require("mime")//第三方
let url=require("url")
http.createServer(function(req,res){
    let {pathname}=url.parse(req.url,true)
    // mime ; 有个getType方法的返回值是当前文件对应的mime类型
    // 解决了不同的文件类型设置不同的响应头
    res.setHeader("Content-Type",mime.getType(pathname));
    fs.readFile("."+pathname,function(err,data){
        res.end(data)
    })
}).listen(8122,function(){
    console.log('成功');
    
})