var reg=/\d+/g;
var str='zhufeng2018zhufeng2019';
var str_1=str.replace('2018','').replace('2019',',');
var str_2=str.replace(reg,',');
console.log(str_1, str_2);


/*replace  支持正则  可以对整个字符串进行匹配和替换*/
var str2=str.replace(reg,function () {
    console.log(arguments);
})
console.log(str2);


var reg2=/(\d+)/g;
var str2=str.replace(reg2,function () {
    console.log(arguments);
    //arguments
//第一项 大正则匹配的内容
//第二项 第一个分组匹配到的内容
    return '----'
    //return 的内容是要替换正则匹配到的部分
});//这个函数体是在每一次replace时 都执行一次
console.log(str2);


/*把字符串中的每个数字加1*/

var reg3=/\d+/g;
var str3=str.replace(reg3,function () {
    console.log(arguments);
    var temp=arguments[0];//字符串
    temp=temp*1+1;
    return temp;

});
//把reg3 匹配到的str的内容  组合起来  当作是实参传给后面的回调函数
//用回调函数的返回结果替换 正则匹配到的内容
console.log(str3);//zhufeng3129zhufeng31210
/*
*replace的结合正则的用法
*1.str.replace(reg,'---')--->用'---'替换reg匹配到的内容
* 2.str.replace(reg,function(){})---->先把reg匹配到的内容组合起来 当做实参传给后面的函数  返回结果替换正则匹配到的内容
* */