var reg = /[.we]/;
var reg2 = /.we/;
console.log(reg.test('aaa'));//false
console.log(reg2.test('1we'));//true
console.log(reg2.test('\nwe'));//false
console.log(reg2.test('qwwe'));//true
console.log(reg2.test('qwee'));//true
console.log(reg2.test('qwte'));//false
console.log(reg2.test(' we'));//true
console.log(reg2.test('we'));//true

var reg3 = /18|19/;
// var reg3 = /1[89]/;
// var reg3 = /1[8-9]/;
console.log(reg3.test('119'));

/*
* 匹配 18-65的合法年龄
* 1819
* 20 - 59
* 60 - 65
* */
var reg4 = /^(18|19)$/
var reg4 = /^(1[89]|[2-5]\d|6[0-5])$/ //1990

