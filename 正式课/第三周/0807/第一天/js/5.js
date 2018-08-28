/*
* 匹配 10-29 的年龄段
*
* */
// var num = 19;
// var reg = /^[12][\d]$/;
var reg = /^[12]\d$/;
console.log(reg.test(10));// true
console.log(reg.test(9));//false
console.log(reg.test(98));//false
console.log(reg.test(20));//true


/*
* 匹配 18 - 65 的年龄段
* 18-19
* 20-59
* 60-65
* 满足上边这三个中的任意一个都可以
* */
// var reg2 = /^[1-6][5-8]$/;
// var reg2_1 = /^[18-65]$/;// 这个代表 1 或者 8-6之间的数字  或 5 三者中的一个
var reg2 = /^(1[89]|[2-5]\d|6[0-5])$/;
// var reg2_2 = /^(18|19|[2-5]\d|6[0-5])$/;
// var reg2 = /^(1[89]|[2-5][0-9]|6[0-5])$/;
// var reg2_1 = /(1[89]|[2-5]\d|6[0-5])/;// 只要有就可以；没必要非得是数字
console.log(reg2.test(19));// true
console.log(reg2.test('17'));// false
console.log(reg2.test('66'));// false
console.log(reg2.test('60'));// true
for(var i =10; i<=70; i++){
    console.log(i, reg2.test(i));
}







