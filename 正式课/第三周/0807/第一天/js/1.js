var reg = /w/;// 要检测的字符串中含有 w 字符
var reg2 = /\w/;
console.dir(reg);

var str = 'http://www.zhufeng.com';
console.log(reg.test(str));

var reg3 = /\d/;
var str3 = '2018珠峰2019珠峰';
var str3_1 = '珠峰珠峰';
reg3.test(str3);//true
reg3.test(str3_1);//false




var reg4 = /\d+/;// 检测字符串中有没有数字 数字出现的次数是 1到多次
var str4_1 = '2018珠峰2019珠峰';
var str4_2 = '珠峰珠2峰';
var str4_3 = '珠峰珠峰';
reg4.test(str4_1);// true
reg4.test(str4_2);// true
reg4.test(str4_3);// false



var reg5 = /\d?/;//检测字符串中有没有出现数字， 次数是 0或1 次；
var str5_1 = '2018珠峰2019珠峰';
var str5_2 = '珠峰珠2峰';
var str5_3 = '珠峰珠峰';
var str5_4 = '';// 只要是字符串就可以
var str5_5 = {};
console.log(reg5.test(str5_1));
console.log(reg5.test(str5_2));
console.log(reg5.test(str5_3));
console.log(reg5.test(str5_4));
console.log(reg5.test(str5_5));



var reg6 = /\d*/;
var str6_1 = '2018珠峰2019珠峰';
var str6_2 = '珠峰珠2峰';
var str6_3 = '珠峰珠峰';




var reg7 = /\d{2}/;// 检测字符串用有没有连着的两个数字
var str7_1 = '2018珠峰2019珠峰';
var str7_2 = '珠峰珠2峰';
var str7_3 = '珠峰珠峰';
var str7_4 = '珠2峰3珠峰';
console.log(reg7.test(str7_1));//true
console.log(reg7.test(str7_2));//false
console.log(reg7.test(str7_3));//false
console.log(reg7.test(str7_4));//false












