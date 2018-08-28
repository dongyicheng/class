var reg3=/\d+/g;
var str3='珠峰2018珠峰2019';
var str4='1222珠峰wwww珠峰2019';
console.log(reg3.exec(str3));//2018  --------->reg3.lastIndex=6
console.log(reg3.exec(str4));//2019  因为lastIndex已经变成6  所以从6开始查找
console.log(reg3.exec(str4));// null
console.log(reg3.exec(str4));// 1222