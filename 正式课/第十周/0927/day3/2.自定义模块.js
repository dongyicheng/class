let fs = require("fs");

fs.readFile("./3.txt","utf8",function(err,data){
    console.log(data); 
})
let data=fs.readFileSync("./3.txt","utf8")
console.log(data)

fs.writeFile("./3.txt",data,"utf8",function(err,data){
    console.log(err,data);
})
fs.writeFileSync("./3.txt","7654321","utf8");
//
fs.appendFile("./3.txt",JSON.stringify({a:1}),function (err) {
    console.log(err);
})