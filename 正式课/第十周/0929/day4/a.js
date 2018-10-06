const obj = {
    name:"珠峰",
    age:9
};
const str = 'qwer';
// exports = str;// 不能空间地址
// exports.o = obj;
// exports.s = str;

// module.exports = obj; // 权重较高
// exports.o = obj;
// exports.s = str;
console.log(module.exports === exports)
console.log(__dirname) //当前文件夹的绝对路径
console.log(__filename) //当前文件的绝对路径
