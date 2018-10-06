//fs  文件的管理模块
let fs = require('fs');

// console.log(fs);
// const path = './index.html';
const path = __dirname+'/index.html';
// readFile 是个异步过程； 读取完毕后；会触发对应的回调函数 
fs.readFile(path,'utf-8',(err,data)=>{
    //err  当读取失败时， 会有相应的错误信息
    // 成功时， err就是个null
    if(!err){
        // console.log(typeof data);
    }
})
let str = fs.readFileSync(path,'utf-8');
// console.log(str);

let path2 = __dirname+'/1.json';
let obj = {name:"珠峰"};

fs.writeFile(path2,JSON.stringify(obj),'utf-8',(err,data)=>{
    //path2 路径
    // 第二个参数是要写入的数据;是个字符串
    // 第三个参数是数据格式
    if(!err){
        console.log(data,'write');
        // fs.writeFileSync(path2, JSON.stringify(obj), 'utf-8')
    }
})

// fs.writeFileSync(path2,JSON.stringify(obj),'utf-8')
obj.age = 12;
fs.appendFile(path2,JSON.stringify(obj),'utf-8',(err,data)=>{
    if(!err){
        console.log(data,'append');
    }
})
// fs.appendFileSync(path2,JSON.stringify(obj))