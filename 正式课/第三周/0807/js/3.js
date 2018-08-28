var reg1 = /x|y/;//字符串出现一个 x或 y
var reg1_1 = /[xy]/;//字符串出现一个 x或 y
var str1 = 'axyt';
var str1_1 = 'abs';
var str1_2 = 'abxs';
var str1_3 = 'abys';
console.log(reg1.test(str1));//true
console.log(reg1.test(str1_1));//false
console.log(reg1.test(str1_2));//true
console.log(reg1.test(str1_3));// true






var reg2 = /^1|2$/;// 以1开头   或  以 2结尾 的字符串
console.log(reg2.test('13455'));//true
console.log(reg2.test('34552'));//true
console.log(reg2.test('134552'));//true
console.log(reg2.test('213werwrew455'));//false
console.log(reg2.test('3455'));//false




var reg3 = /^18|19$/;//以18 开头； 以 19结尾
console.log(reg3.test('1891'));
console.log(reg3.test('18923'));
console.log(reg3.test('192319'));
console.log(reg3.test('182319'));
console.log(reg3.test('819'));
console.log(reg3.test('1828'));
console.log(reg3.test('1918'));
console.log(reg3.test('118'));
console.log(reg3.test('189'));
console.log(reg3.test('1619'));


var reg4 = /^118|119$/;
console.log(reg4.test('18119'));
console.log(reg4.test('19'));
console.log(reg4.test('11819'));


var reg5 = /^(18|19)$/;//代表18  或者  19
//         /^18$/ /^19$/
console.log(reg5.test('1819'));
console.log(reg5.test('119'));
console.log(reg5.test('189'));
console.log(reg5.test('18'));
console.log(reg5.test('19'));
/*
*分组的作用:
* 1. 提升优先级
* 2. 分组匹配  可以理解为大正则里的小正则
* 3. 分组捕获
* */