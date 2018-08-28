/*
* 通过正则 把下边的日期字符串  转化成对应的汉字的年月日时间
* */
var str="2018/08/08 12:24:34";
var str2="今天是2018年8月8日 中午12点24分34秒";//目标字符串
/*
*split结合正则
* replace
* match
* */
var ary=str.split(/[/: ]/);//['2018','08','12','24','34']
var str3=`今天是${ary[0]}年${ary[1]}月${ary[2]}日 ${ary[3]<10?"上午":(ary[3]<14?"中午":"下午")}${ary[3]}点${ary[4]}分${ary[5]}秒`
console.log(str3);



var reg=/(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
var str4=str.replace(reg,function (...ary) {
    return `今天是${ary[1]}年${ary[2]}月${ary[3]}日 ${ary[4]<10?"上午":(ary[4]<14?"中午":"下午")}${ary[4]}点${ary[5]}分${ary[6]}秒`
});
console.log(str4);


var reg=/(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
var ary=str.match(reg);
var str5=`今天是${ary[1]}年${ary[2]}月${ary[3]}日 ${ary[4]<10?"上午":(ary[4]<14?"中午":"下午")}${ary[4]}点${ary[5]}分${ary[6]}秒`
console.log(str5);
