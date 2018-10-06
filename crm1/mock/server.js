let http = require('http');
let fs = require('fs');
let url = require('url'); // 专门处理路径的模块

// 读取文件
function read(cb){
    fs.readFile('./list.json', 'utf-8', (err, data) => {
        // console.log(typeof data);
        cb && cb(err,data)
    })
}
//写入文件
function write(ary,cb){
    fs.writeFile('./list.json', JSON.stringify(ary), 'utf-8', (err) => {
        // 写入成功才算是真正的成功
        /* if (!err) {
            //obj中的 errorCode 就是 0；0对于前台就是代表成功态
            res.end(JSON.stringify(obj))
        } */
        cb(err)
    })
}



http.createServer((req,res)=>{
    // let path = './list.json';
    let obj = {errorCode:0};//返回给前台的 数据对象
    //设置响应头是中文格式  
    // 告诉浏览器按照什么类型进行解析和渲染(解决中文乱码) 
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    // 响应头指定了该响应的资源是否被允许与给定的origin共享
    // 设置允许访问自己的url
    res.setHeader('Access-Control-Allow-Origin', "*");
    // res.setHeader("Access-Control-Allow-Headers", '*');
    // 设置了响应用于一个预检请求指示哪个HTTP标头将通过提供
    res.setHeader("Access-Control-Allow-Headers",'content-type');
    //允許前端跨域請求

    //使用url  获取路径 和 参数
    // 第二参数 true  是把 query从 字符串  转成 对象
    // console.log(url.parse(req.url));
    //  query中存储的是 前台传进来的url参数
    let {pathname,query} = url.parse(req.url,true);
    console.log(req.method);
    // 如果请求字段超出如下内容，就是非简单请求，浏览器就先发option试探服务器是否允许跨域。
    //（1) 请求方法是以下三种方法之一：
    // HEAD
    // GET
    // POST
    // （2）HTTP的头信息不超出以下几种字段：
    // Accept
    // Accept-Language
    // Content-Language
    // Last-Event-ID
    // Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
    if(req.method == 'OPTIONS'){
        res.end();
        return;
    }
    switch (pathname) {
        case '/list': // 请求列表的接口
            read((err,data)=>{
                if (!err) {
                    obj.data = JSON.parse(data);
                    res.end(JSON.stringify(obj)); //end(字符串) 
                } else {
                    obj.errorCode = 1;
                    res.end(JSON.stringify(obj))
                }
            })
            break;
        case '/remove': // 删除数据对应ID的那一项数据
            // 先 拿到 文件中的数据； 再循环 数据； 从中删除对应ID的那一项；
            // 再把 修改后的数据写入 文件
            read((err,data)=>{
                if(!err){
                    let ary = JSON.parse(data);// 把字符串转成 数组
                    console.log(query);
                    ary = ary.filter((item)=>{
                        return item.id != query.id;
                        // 不能用 绝对不相等；
                        //通过这个筛选  ary中放的都是id不等于query.id 的项
                    });
                    console.log(ary);
                    write(ary,(err)=>{
                        // 写入成功才算是真正的成功
                        if (!err) {
                            //obj中的 errorCode 就是 0；0对于前台就是代表成功态
                            res.end(JSON.stringify(obj))
                        }else{
                            obj.errorCode = 1;
                            res.end(JSON.stringify(obj));
                        }
                    })
                }
            })
            break;
        case '/info': //根据ID 获取当前ID所在项的信息；
            read((err,data)=>{
                if(!err){
                    let ary = JSON.parse(data);
                    let option = ary.find((item)=>{
                        return item.id == query.id
                    });
                    obj.data = option;
                    res.end(JSON.stringify(obj));
                }else{
                    obj.errorCode = 1;
                    res.end(JSON.stringify(obj));
                }
            });
            break;
        case '/edit': //编辑用户信息，根据ID更新用户信息
            let str = '';
            req.on('data',(chunk)=>{
                //接受请求体中的数据时会触发这个回调函数
                // console.log(chunk); // Buffer 转成 字符串  toString或者用字符串拼接
                str+=chunk;
            });
            req.on('end',()=>{
                // 接收完毕请求体中的数据  会触发的回调函数
                console.log(str);
                let item = JSON.parse(str);// 前台传过来的对象；
                read((err,data)=>{
                    if(!err){
                        let ary = JSON.parse(data);
                        //用 item  替换  ary  中 ID与item相同的那一项
                        ary = ary.map((val)=>{
                            if(val.id == item.id){
                                //若当前项的ID跟 item的id相同；就用 item 替换当前项
                                return item
                            }else{
                                return val
                            }
                        });
                        write(ary,(err)=>{
                            if(!err){
                                res.end(JSON.stringify(obj))
                            }else{
                                obj.errorCode = 1;
                                res.end(JSON.stringify(obj));
                            }
                        })
                    }
                })
            })
            // res.end('123');
            break;
        case '/add': //添加新人物；
            let str2 = '';
            req.on('data',(chunk)=>{
                str2 += chunk;
            });
            req.on('end',()=>{
                let item = JSON.parse(str2);
                // 为了保证 ID的 唯一性； 我们要把从文件获取到的数据的最后一项的 ID+1 赋给新数据的ID
                read((err,data)=>{
                    let ary = JSON.parse(data);
                    item.id = ary[ary.length-1].id*1 + 1 + '';
                    ary.push(item);
                    write(ary,(err)=>{
                        if(!err){
                            res.end(JSON.stringify(obj))
                        }else{
                            obj.errorCode = 1;
                            res.end(JSON.stringify(obj));
                        }
                    })
                })
            })
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = 'my no found';
            break;
    }
    
}).listen(8001,()=>{
    console.log("端口8001已经启用")
})