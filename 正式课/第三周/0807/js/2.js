var reg=/^\d/;//在这里 ^ 表示以什么开头；  在[^]中的^代表非
var str='珠峰2018珠峰2019';
var str2_1='2017珠峰2018珠峰2019';
console.log(reg2.test(str2));//false
console.log(reg2.test(str2_1));//true


var reg3=/^\d{4}/;//匹配  以四个数字开头的字符串
var str3='2018珠峰';
var str3_1='18珠峰';
console.log(reg3.test(str3));//true
console.log(reg3.test(str3_1));//false


var reg4=/\d+$/;//匹配 以一个数字或者多个数字结尾的字符串
var reg4_1=/\d$/;//匹配 以一个数字结尾的字符串  和上面的一样
var reg4_2=/\d{2}$/;//匹配 以两个连续数字结尾的字符串
var str4='2018珠峰';
var str4_1='2018珠峰2019';
var str4_2='2018珠峰0';
console.log(reg4.test(str4));//false
console.log(reg4.test(str4_1));//true
console.log(reg4.test(str4_2));//true

console.log(reg4_2.test(str4));//false
console.log(reg4_2.test(str4_1));//true
console.log(reg4_2.test(str4_2));//false


var reg5=/\d/;//字符串中有没有数字
var reg5_1 = /^\d$/;//以数字开头，并且以数字结尾
var str5='珠峰2018珠峰';
var str5_1 = '2018珠峰2018珠峰2019';
console.log(reg5.test(str5));//true
console.log(reg5_1.test(str5));//false
console.log(reg5_1.test(str5_1));//false


var reg6=/^\d$/;//以数字开头  且以数字结尾  只能是一个数字
var str6='2珠峰23';
console.log(reg6.test(str6));//false

var reg6_1=/^q$/;//以q开头  以q结尾  一个字符 只能是一个q 只有 'q' 才是true
var reg6_2=/^q{1,}$/;//以q开头  以q结尾  的  至少连续出现一次
//         /\d{n,}/----->至少连续出现n次数字 ---->量词元字符都是代表连续出现
var reg6_3=/^q+$/;//以q开头  以q结尾  的  至少连续出现一次
var reg6_4=/^q*$/;//以q开头  以q结尾  的  至少连续出现0次或多次  可以出现空字符串是满足的

var str6_1='q';
var str6_2='qqq';//除了 reg6_1  全是true
var str6_3='qwq';//全是false


var reg7=/^\d$/;//只能是一个数字
var reg7_1=/^\d+$/;//以数字开头 以数字结尾 ； 数字连续出现1到多次
var reg7_2=/^\d*$/;//以数字开头 以数字结尾 ； 数字连续出现1到多次  空字符串可以满足
var str7='1';
var str7_1='12345';
var str7_2='12www45';
console.log(reg7.test(str7));//true
console.log(reg7.test(str7_1));//false
console.log(reg7_1.test(str7));//true
console.log(reg7_1.test(str7_1));// true
console.log(reg7_1.test(str7_2));// false


var reg8 = /hello world/;
var str8 = 'helloworld';
var str8_1 = '121 hello world sddf';
var str8_2 = '121hello worldsddf';
console.log(reg8.test(str8));//false
console.log(reg8.test(str8_1));//true
console.log(reg8.test(str8_2));//true


var reg=/\\w/;//把斜杠给转化了
var reg1=/\\\w/;
console.log(reg.test('w'));//false
console.log(reg.test('\w'));//false
console.log(reg.test('\\w'));//true
console.log(reg1.test('\\q'));//true
console.log(reg1.test('\q'));//false