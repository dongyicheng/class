/*
*match 属于字符串的方法
* 1*/

var reg=/\d+/;
var str="珠峰2018珠峰2019";
console.log(str.match(reg));
console.log(reg.exec(str));
//["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]*2



/*当正则上边不加  全局修饰符g 时  ;  match和exec返回结果一样*/


var reg2=/\d+/g;
var str2="珠峰2018珠峰2019";
console.log(str2.match(reg2));//['2018','2019']
console.log(reg2.exec(str2));//["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]

/*当加上全局修饰符 g 时  ; match 方法会把字符串中所有符合的捕获到*/


var reg3=/(\d+)([a-z])/g;
var str3='zhufeng2018zhefeng2019';
console.log(str3.match(reg3));//["2018z"]
/*
*有g时  match只能捕获到大正则捕获的内容
* 没g时  和exec一样
* */

console.log(reg3.exec(str3));
//
/*第一项是大正则捕获到的内容
*第二项是第一个小分组的内容
* 第三项 是第二个小分组
* */

