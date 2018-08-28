
/*
* 需求:  根据身份证号码; 展示出这个人的基本信息
* 这个人是xxx年xxx月xxx日出生的
* 是性别 xxx
*
* 用正则写
*用正则 捕获到要的部分  然后把要的部分拼接成 想要的结果
*
* */

var str='131081199603022524';
var reg=/^\d{6}(\d{4})(\d{2})(\d{2})\d{2}(\d)[\dX]$/;
// console.log(str.match(reg));
// console.log(reg.exec(str));
var ary=str.match(reg);

var str2=`这个人是${ary[1]}年${ary[2]}月${ary[3]}日出生的;性别${ary[4]%2==0?'女':'男'}`
console.log(str2);


var str3=str.replace(reg,function () {
    var ary=[...arguments];//解构成一个数组
    return `这个人是${ary[1]}年${ary[2]}月${ary[3]}日出生的;性别${ary[4]%2==0?'女':'男'}`
})
console.log(str3);

