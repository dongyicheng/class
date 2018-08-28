var reg = /\d+/g;
var str = 'zhufeng2018zhufeng2019';
var str_1 = str.replace('2018',',').replace('2019',',');
var str_2 = str.replace(reg,',');
console.log(str_1, str_2);

/*
* replace 支持 正则，可以对整个字符串进行匹配和替换
* */

//
// var str2 = str.replace(reg,function () {
//     console.log(arguments);
// });
// console.log(str2);
//Arguments(3) ["2018", 7, "zhufeng2018zhufeng2019", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//Arguments(3) ["2019", 18, "zhufeng2018zhufeng2019", callee: ƒ, Symbol(Symbol.iterator): ƒ]



var reg2 = /(\d+)/g;
var str2 = str.replace(reg2,function () {
    console.log(arguments);
    //arguments
    // 第一项 大正则匹配的内容
    // 第二项 第一个分组匹配的内容
    return '----'
    // return 的内容 是要替换正则匹配到的部分
});// 这个函数体是在每一次要replace时，都先执行一次
console.log(str2);


/*把字符串中的 数字每一位加1*/
var reg3 = /\d/g;
var str3 = str.replace(reg3,function () {
   var temp = arguments[0]; //字符串
   temp = temp*1 + 1;
   return temp;
});
// 把 reg3 匹配到str的内容 组合起来 当作实参传给给后边的回调函数；
// 用回调函数的返回结果替换 正则匹配到的内容
console.log(str3);//'zhufeng3129zhufeng31210';
//                  'zhufeng2018zhufeng2019';

/*
* replace的结合正则时的用法
* 1、str.replace(reg,'---')-->用'---'替换reg匹配到的内容
* 2、str.replace(reg,function(){}) --->先把reg匹配的内容组合起来；当作实参传给后边的函数；再用函数的返回结果替换正则匹配到的内容
*
* */









