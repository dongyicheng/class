var reg = /w/;
console.dir(reg);
reg.test('qerasd');//false

var reg2 = /\w+/;
reg2.test('_');//true

var reg3 = /\\w/; // 测试结果 是 转化斜杠     ?????
// 前边的 \  把 后边的 \w 转译成普通的 \w
console.dir(reg3);
console.log(reg3.test('w'));
console.log(reg3.test('\w'));

var reg4 = /\\\w/;
console.log(reg4.test('\\q'));//true
console.log(reg4.test('\q'));//false
var str = '\'';
var str = '\132';// ---> 代表 把相应的ASCII码 转成对应的字符

var reg5 = /\d{4}/;// 连序出现4次数字
console.log(reg5.test('zhufeng2423zhufeng'));;//true
console.log(reg5.test('12zhu23feng'));;//false


var reg6 = /\d{2,4}/;
console.log(reg6.test('zhufeng2423zhufeng'));;//true
console.log(reg6.test('12zhu23feng'));;//true
console.log(reg6.test('1zhu23feng'));;//true