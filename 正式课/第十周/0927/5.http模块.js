let http =require("http");
let server = http.createServer(function(req,res){
    //当请求一次 , 该函数执行一次
    // req : 请求信息
    // res : 响应信息

    // 设置响应头  告诉浏览器按照什么类型进行解析和渲染(解决中文乱码)
    // setheader : 两个参数
    res.setHeader("content-Type","text/plain;charset=utf-8")
    res.end("等待");
    // 1.结束请求
    // 2.把数据响应给客户端
    // 3.参数是一个字符串或者buffer (不能是中文,可以设置响应头解决)
})
server.listen(8080,function(){
    //如果端口启动成功 , 那么服务器就可以监听到请求了
    console.log('当前端口已启动')
})