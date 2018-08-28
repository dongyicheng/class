var reg = /^w/;
console.log(reg.test('qwer'));//false

var reg2 = /^w?/;// 以w 开头，w出现0次或一次 ；后边字符无限制；
console.log(reg2.test('qwer'));//true
console.log(reg2.test(''));//true


var reg2 = /^w*$/;//以w开头 ，以w结尾； w出现 0 或多次；
// var reg2 = /^\w*$/;//以\w开头 ，以\w结尾； \w出现 0 或多次；
console.log(reg2.test('qwer'));//false
console.log(reg2.test('wer'));//false
console.log(reg2.test('werw'));//false
console.log(reg2.test('www'));//true
console.log(reg2.test(''));//true

var reg3 = /^199|200$/; // 以199开头  或者 200结尾；其他无任何限制
console.log(reg3.test('199zhufeng200'));//true
console.log(reg3.test('200zhufeng199'));//false

var reg4 = /^(199|200)$/;
console.log(reg4.test('199zhufeng200'));//false
console.log(reg4.test('199200'));//false
console.log(reg4.test('199'));//true

/*
* 分组-->()  在正则中有三个作用
* 1、提升优先级
* 2、分组匹配
* 3、分组捕获
* */



/*
* 手机号验证
* 手机号  189 188 199 182 131-139  150-159
* 第一位 1
* 第二位 [3456789]
* 后边无限制
* */
// var reg = /^1([345789]\d{9}|66\d{8})$/;
// var reg = /^1([345789]\d|66)\d{8}$/;
console.log(reg.test(12233187958));










