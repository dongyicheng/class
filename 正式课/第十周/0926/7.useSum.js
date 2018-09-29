// 导入模块；
//1.  require 导入一个模块；如果是同级的自定义模块，必须加上./;
//2. 如果文件的后缀名是.js  .json 文件，那么可以省略后缀名；
//3. require 这个方法不在全局的对象global中；
//4.require 导入的模块；会将模块中的代码从上到下执行；

// module.exports / exports： 导出；
// 1. 把当前模块中的内容进行暴露；其他模块可以使用
// 2. module.exports 可以用其他的空间地址进行覆盖；exports 不能用其他空间覆盖；只能给其新增属性；
// 3. module.exports 不仅支持空间地址，还支持基本数据类型；

let a = require("./6.sum");
console.log(a);
console.log(a.sum);
/*
console.log(a);
console.log(a.sum(1, 3, 4, "8"));
*/
// 在node的环境中，全局的对象，它是global；不存在window
//console.log(global);
// 在每个自定义模块的最外层，会默认添加一个闭包的函数，这个函数中会接收五个参数；
/*(function (module,exports,require,__dirname,__filename) {

})();*/

// module下有一个exports属性；这个属性是将当前模块的属性和方法导出去；
/*console.log(exports);
console.log(module);*/
//console.log(__dirname);// 当前文件的父级目录绝对路径
//console.log(__filename);// 当前文件的绝对路径；

let ary=[1,2,3,4];
let i=0;
for (let i = 0; i < ary.length; i++) {
    setTimeout(()=>{
        console.log(ary[i])
    },1000*(i+1))
}

let timer = setInterval(()=>{
    console.log(ary[i]);
    i++;
    if(i==ary.length){
        clearInterval(timer)
    }
},1000)

let ary = [1,2,3,4,5,6];
let i = 0;
function log(){
	setTimeout(()=>{
		console.log(ary[i])
		i++;
		if(i<ary.length){
			log()
		}
	},1000)

}

let obj = {
    a:{
        name:"我是a",
        age:5,
        b:{
            name:"我是a中的b",
            age:2,
            c:{
                name:"我是a中的c",
                sex:0,
                b:{ name:"我是a中的d",}
            }
        }
    },
    b:{
        c:{
            d:{
                name:"我是b中的d",
                age:10
            }
        }
    }
}
