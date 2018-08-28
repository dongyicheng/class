/*
* split
* match
* replace
*
* exec test 正则方法
* */
var str = '珠峰-2018 珠峰+2019';

console.log(str.split(''));//['珠',...]
console.log(str.split(/[ +-]/)); //空格 或者 + 或 -
// console.log(str.split(/[ -+]/));// 从 空格 到 加号
// console.log(str.split(/[ \-+]/));
// console.log(str.split(/[a-]/));
// var reg = /[a-za-z+-]/;
// console.log(reg.test('-'));

//match
// 匹配的正则没有 全局修饰符g时； 结果是跟exec一样的
// 加上 g 时；只捕获大正则捕获的内容
var str = '珠峰-2018 珠峰+2019ww';
console.log(str.match(/(\d+)([a-z]+)/));
console.log(str.match(/(\d+)([a-z]+)/g));

var str = '130234199001271013';//身份证
var reg = /^\d{6}(\d{4})(\d{2})(\d{2})\d{3}[\dX]$/;
console.log(str.match(reg));
console.log(reg.exec(str));

//replace
var str = 'zhufeng2018zhufeng2019';

console.log(str.replace(/\d+/g, ''),str);
str.replace(/\d+/g,function () {
    console.log(arguments);
});

// var str2 = str.replace(/(\d+)([a-z]+)/g,'$2----$1');
var str2 = str.replace(/(\d+)([a-z]+)/g,'---$2----$1---');
// $1 代表正则的第一个小分组(2018)；  $2 代表第二个小分组(zhufeng)
console.log(str2);





/*
* 获取一个字符串中出现次数最多的字母 及其 次数
* */
var str = 'abdeabhcvdbsbbdgnggsv';
/*
* 思路1：循环这个字符串； 把字符串放到一个对象中；每次放的时候先去查看有没有这个属性；如果有的话 就给这个属性值+1；若没有； 赋初始值为1；
* */
var obj = {};
for(let i = 0; i < str.length; i++){
    if(obj.hasOwnProperty(str[i])){
        obj[str[i]]++;
    }else {
        obj[str[i]] = 1;
    }
}
console.log(obj);
var n = 1; // 假设 出现最多的次数时一次
var str = '';//用最大值对应的字符
for(var k in obj){
    if(obj[k]>n){
        n = obj[k];
        str = k;
    }
}
console.log(str, n);

/*
*
*
* */
var reg = /(\w)(\w)\1/; // \1代表匹配到的第一个分组的字符
console.log(reg.test('qwq'));//true
console.log(reg.test('awa'));//true
console.log(reg.test('qww'));//false

var reg = /(\w)(\w)\2/; // \2代表匹配到的第2个分组的字符
console.log(reg.test('qwq'));//false
console.log(reg.test('qww'));//true

var reg = /(\w)(\w)\2\1/;
console.log(reg.test('abba'));//true
var reg = /(\w)(\w)\1\2/;
console.log(reg.test('abab'));


var str = 'abafdafbabafgahaba';
/*
* 思路2  把字符串 变成  aaaaabbbbzzzvvvvv ----->  /(\w)\1* /
* 使用split分割成数组，给数组排序；然后再把数组结合成 字符串
* 然后再用 正则 结合 replace方法求出最大值
* */

var str2 = str.split('').sort((a,b)=>{return a.localeCompare(b)}).join('');
var str2 = str.split('').sort().join('');

var arr = str2.match(/(\w)\1*/g);// ['aaaaa','bbbbb','ww']
arr = arr.sort((a,b)=>{return b.length - a.length}); //排好序的数组
// arr.forEach(function (item,index) {
//
// });
console.log(arr,arr[0],arr[0][0],arr[0].length);



var str = '12345633'; //12,345,633
var reg = /(\d)(?=(\d{3})+$)/g;
str.replace(reg,'$1,');
/*
* 千分符
*
* */


