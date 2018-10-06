let http = require('http');
let fs = require('fs');
let mime = require('mime');

//起服务
http.createServer((req,res)=>{
    //只有把服务重启，修改后的代码才会起作用；
    //这个回调函数 只有在接受到请求服务的时候才会触发
    // req 请求信息的载体
    console.log(req.url);
    // // 先去获取 1.html
    // fs.readFile('./1.html','utf-8',(err,data)=>{
    //     res.end(data)
    // })
    // console.log('回调函数执行');
    // res.end('<html></html>')
    req.setTimeout(2000,()=>{
        console.log(222222222)
        res.end('timeout')
    });
    switch (req.url) {
        case '/':
        case '/index.html':
            // let data = 12; 会引发 重复声明的报错
            let t = mime.getType('./index.html');
            console.log(t);
            res.setHeader('Content-Type',t);
            fs.readFile('./1.html','utf-8',(err,data)=>{
                res.end(data);
            })
            break;
        case '/index.js':
            let data = fs.readFileSync('./index.js','utf-8');
            res.end(data);
            break;
        case '/favicon.ico':
            res.end();
            break;
        case '/add':
            //设置响应头状态码
            // res.statusCode = '404';
            // res.statusMessage = 'this is my 404';
            // res.end();
            break;
        default:
            fs.readFile('./404.html','utf-8',(err,data)=>{
                res.end(data);
            })
            break;
    }
}).listen(8000,()=>{
    console.log('端口已经起来')
})
