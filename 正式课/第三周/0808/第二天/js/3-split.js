/*
* split 把字符串按照指定字符分割成数组
* */
var reg = /[,+-]/g;// 可以不加 g
var str = '珠峰,珠峰2-zhufeng+zhu';
console.log(str.split(reg));


var str2 = 'zhufneg123zhufeng2324zhufneg2323ee';
var reg2 = /\d+/g;
console.log(str2.split(reg2)); //使用数字分割字符串，返回结果时分割的结果组成的数组；也就是我们的单词
console.log(str2.match(reg2));// 使用match捕获匹配到的内容；也就是咱们要拿的数字
//要去拿数字
var reg3 = /\D+/g;
console.log(str2.split(reg3));