/*
*捕获  获取字符串中  满足正则条件的  字符或者字符串
* */
var reg=/\d+/;
var str='珠峰2018珠峰2019';
console.log(reg.test(str));//true
console.log(reg.exec(str));
/*["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]
*第一项 是整个正则捕获的内容
*第二项开始  捕获的是每一个分组的小正则
*index  捕获的项开始的索引
*input  原始字符串
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
* 正则捕获的懒惰性  只捕获字符串中第一个符合规则的 ; 即使多次执行 也不会再去后面捕获
* 解决这个问题  需要在  正则的后面加上全局修饰符 g;
* */

/*
* reg4_1.lastIndex 记录的是下一次查找开始的索引
* 没有全局修饰符 g 时；每次都是从索引0 开始查找
* 加上全局 g  时；每次都是从上次查找完毕后结束的索引处开始；
* 查不到时，返回 null  lastIndex的值重新赋为 0；
* */


/*
*需求 获取到字符串中所有满足条件的  字符或者字符串 ; 返回找到内容的数组
* 思路: 利用 全局修饰符的特性  ; 一直查找  直到返回null  停止查找
* */

RegExp.prototype.execAll=function(str) {
    var temp=this.exec(str);
    if(!this.global){
        temp=temp||[];
        temp.ereorReason='亲没加全局修饰符';
        return temp;
    }
    var ary=[];
    while(temp){
        ary.push(temp[0]);
        temp=this.exec(str);
    }
    return ary;
}
var str='dd126dd111e';
var reg9=/(\d+)([a-z])/g;
console.log(reg9.execAll(str))






RegExp.prototype.execAll= function (str) {
    if (!this.global) {
        //若没有全局修饰符  有g global这个属性的属性值为true; 没有的话为false
        //在这里可以新造一个正则; 使用this + g  拼接的一个新正则
        var _this = eval(this + 'g');
    } else {
        _this = this;
    }
    var temp = _this.exec(str);
    var ary = [];
    while (temp) {
        ary.push(temp);
        temp = _this.exec(str)
    }
    return ary;
}
    var str='dd126dd111';
    var reg9=/(\d+)([a-z])/;
    console.log(reg9.execAll(str));