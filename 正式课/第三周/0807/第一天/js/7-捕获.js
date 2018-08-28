/*
* 捕获  获取字符串中 满足正则条件的 字符或字符串
* */
var reg = /\d+/;
var reg2 = /(\d+)/;
var str = '珠峰2018珠峰2019';
console.log(reg.test(str));
console.log(reg.exec(str));
console.log(reg2.exec(str));

/*
* ["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]
* 第一项 是整个正则捕获的内容
* 第二项开始  捕获的是每一个分组捕获的内容
* index  捕获的项开始的索引
* input  原始字符串
*
* */


var reg3 = /(\d+)([a-z])+/;
var reg3_1 = /(\d+)([a-z]+)/;
var reg3_2 = /(\d+)([a-z])/;
var reg3_3 = /(\d)+([a-z])/;
var str3 = "feng2018zhu2019";
console.log(reg3.exec(str3));
console.log(reg3_1.exec(str3));
console.log(reg3_2.exec(str3));
console.log(reg3_3.exec(str3));

var reg4 = /\d+/;
var reg4_1 = /\d+/g;
var str4 = '珠峰2018珠峰2019';
console.log(reg4.exec(str4));
console.dir(reg4);
console.log(reg4.exec(str4));
console.dir(reg4);
// console.log(reg4_1.exec(str4));

/*
* 正则捕获的懒惰性； 他只捕获字符串中第一个符合规则的部分；即使多次执行，也不会再去后边捕获；
* 解决这个问题 我们需要在 正则的后边加上全局修饰符 g；
*
* */


/*
* reg4_1.lastIndex 记录的是下一次查找开始的索引
* 没有全局修饰符 g 时；每次都是从索引0 开始查找
* 加上全局 g  时；每次都是从上次查找完毕后结束的索引处开始；
* 查不到时，返回 null  lastIndex的值重新赋为 0；
* */

/*
* 需求 获取到字符串中所有满足条件的 字符或字符串； 返回找到的内容组成数组；
* 思路： 利用 全局修饰符的特性；一直查找，找到一个就放到数组中；直到返回null时，停止查找，返回数组
* */
RegExp.prototype.execAll = function (str) {
    //this --> reg4
    var temp;
    if(!this.global){
        //若没有全局修饰符
        temp = this.exec(str) || [];
        temp.errorReason = '你没加全局修饰符';
        return temp;
    }
    var ary = [];
    temp = this.exec(str);
    while (temp){
        ary.push(temp[0]);
        temp = this.exec(str);
    }
    return ary;
};
console.log(reg4_1.execAll(str4));




