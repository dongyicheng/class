var reg = /\d+/;
var str = "珠峰2018珠峰2019";
reg.exec(str);
reg.exec(str);
reg.exec(str);

var reg2 = /\d+/g;
var str2 = "珠峰2018珠峰2019";
// console.log(reg2.exec(str2));//2018
// console.log(reg2.exec(str2));//2019
// console.log(reg2.exec(str2));//null
// console.log(reg2.exec(str2));//2018
//reg2.lastIndex ---> 记录上次查找结束的索引，也就是下一次开始查找的索引

//通过一个方法 一次性拿到全部
RegExp.prototype.execAll = function (str) {
    var temp = null;
    if(!this.global){// 判断是否缺少 全局修饰符；若缺少的话直接返回匹配的第一个字符或字符串；然后加上自己的错误信息
        temp = this.exec(str) || {};
        temp.errorMsg = "缺少全局修饰符";
        return temp;
    }
    var ary = [];// 存储 每次捕获到的字符或字符串
    temp = this.exec(str);//使用 exec捕获第一匹配的字符或字符串
    while(temp){//持续捕获后续的字符或字符串
        ary.push(temp[0]);
        temp = this.exec(str)
    };
    return ary;
};
console.log(reg.execAll(str2));
console.log(reg2.execAll(str2));
console.log(reg2.execAll(str2));
//


var reg3 = /\d+/g;
var str3 = '珠峰2018珠峰2019';
var str4 = '1222珠峰wwww珠峰2019';
console.log(reg3.exec(str3));// 2018 ---->  reg3.lastIndex = 6;
console.log(reg3.exec(str4));// 2019 因为上个 lastIndex 是从6开始的
console.log(reg3.exec(str4));// null
console.log(reg3.exec(str4));// 1222




