RegExp.prototype.execAll = function (str) {
    var temp = null;
    if(!this.global){
        temp = this.exec(str) || {};
        temp.errorMsg = "缺少全局修饰符";
        return temp;
    }
    var ary = [];
    temp = this.exec(str);
    while(temp){
        ary.push(temp);
        temp = this.exec(str)
    };
    return ary;
};
var str = "https://www.souyidai.com/soeasy/invest/onlinelist?productType=1&pageNo=0&repayMode=-1&orderBy=DEFAULT&t=0.642114887216358";
/*
* 获取字符串中的参数
* */

var reg = /([^?=&]+)=([^?=&]+)/g;
console.log(str.match(reg));
console.log(reg.execAll(str));

