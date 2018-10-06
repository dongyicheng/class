let http=require('http')
let fs=require('fs')
http.createServer(function(req,res){
    switch(req.url){
        case '/':
        case './index.html':
            fs.readFile('./1.复习.html','utf8',function(err,data){
                res.end(data)
            })
            break;
        case './2.js':
            let data=fs.readFile('./2.js','utf8')
            res.end(data);
            break;
    }
}).listen(8080,function(){
    console.log('成功');
    
})