var reg = /[abc]/;//字符串中有 a 或 b 或 c
var reg1 = /^[abc]$/;//代表单个 a  b  c
console.log(reg.test('abc'));//true
console.log(reg.test('a'));//true
console.log(reg1.test('abc'));//false
console.log(reg1.test('c'));//true




var reg2 = /^[abc]+$/;//
console.log(reg2.test('bca'));//true
console.log(reg2.test('abc'));//true
console.log(reg2.test('aaa'));//true
console.log(reg2.test('abccbac'));//true


var reg3 = /^a+$/;//
console.log(reg3.test('abc'));//true
console.log(reg3.test('aaa'));//true




var reg4 = /^abc$/; //只能匹配“abc”
// 以a开头 以c结尾  中间只能是b
console.log(reg4.test('abcabc'));//false
console.log(reg4.test('abbbbbc'));//false

var reg5 = /^ab+c$/;
console.log(reg5.test('abbbbbc'));//true



var reg6 = /^[2.3]$/;//在中括号中的 . 是代表 点这个附好本身
var reg6_2 = /^[.32]$/;//在中括号中的 . 是代表 点这个附好本身
var reg6_1 = /^[2\.3]$/;//这个跟上边一个意思
console.log(reg6.test('2.3'));//false
console.log(reg6.test('2'));//true
console.log(reg6.test('3'));//true
console.log(reg6.test('.'));//true
console.log(reg6.test('\n'));//false

var reg7 = /^2.3$/;
console.log(reg7.test('2.3'));//true
console.log(reg7.test('2+3'));//true
console.log(reg7.test('2\n3'));//false

var reg8 = /^2.+3$/;
console.log(reg8.test('2.3'));//true
console.log(reg8.test('2+3'));//true
console.log(reg8.test('2\n3'));//false


var reg9 = /^[\da-z]+$/;
var reg9_1 = /^[\da-z-+]+$/;
console.log(reg9.test('qqqq')); // true
console.log(reg9.test('q12qqq'));// true
console.log(reg9.test('q12qqQ'));// false
console.log(reg9.test('1+'));// false
console.log(reg9_1.test('1+'));// true
console.log(reg9_1.test('1-'));// true



var reg10 = /^[^abc]$/;
console.log(reg10.test('w'));
console.log(reg10.test('0'));

var reg11 = /^2\.3$/;
var str = "wer\"wr";
console.log(reg11.test('2.3'));//true
console.log(reg11.test('2..3'));//false
console.log(reg11.test('263'));//false















