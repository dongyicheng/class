/*
* 通过正则 把 下边的日期字符串转化成对应的汉字的年月日时间
* */
var str = "2018/08/08 15:24:34";
var str2 = "今天是2018年8月8号 中午12点24分34秒";//目标字符串
/*
* split 结合正则
* replace
* match
* */

// var str = 'we are the children';
// str.split(' ');

var ary = str.split(/[/: ]/g); // ['2018','08','08','12','24','34'];
var str3 = `今天是${ary[0]}年${ary[1]*1}月${ary[2]*1}号 
${ary[3] <10 ? "上午" : (ary[3] <14 ? "中午" : "下午")}${ary[3]}点${ary[4]}分${ary[5]}秒`;
console.log(str3);


var reg = /(\w{4})\/(\w{2})\/(\w{2}) (\w{2}):(\w{2}):(\w{2})/;
var str3 = str.replace(reg,function (...ary) {
    console.log(ary);
    return `今天是${ary[1]}年${ary[2]*1}月${ary[3]*1}号
${ary[4] <10 ? "上午" : (ary[4] <14 ? "中午" : "下午")}${ary[4]}点${ary[5]}分${ary[6]}秒`
});
console.log(str3);


var reg = /(\w{4})\/(\w{2})\/(\w{2}) (\w{2}):(\w{2}):(\w{2})/;
var ary = str.match(reg);
console.log(ary);
