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

/*
* match 属于字符串中的方法
* */
var reg = /\d+/;
var str = "珠峰2018珠峰2019";
// console.log(str.match(reg));
// console.log(reg.exec(str));

/*
* 当正则上边不加 全局修饰符g时； match 方法 和 exec 返回的结果是一样的
* */


var reg2 = /\d+/g;
var str2 = "珠峰2018珠峰2019";
// console.log(str2.match(reg2));
// console.log(reg2.exec(str2));

/*
* 当正则加上 全局修饰符g时；match 方法会把字符串中所有符合大正则的内容捕获到
* */





var reg3 = /(\d+)([a-z]+)/g;
var reg3_1 = /\d+/g;
var str3 = "zhufeng2018zhufeng2019zhufeng2020zhufeng2021";
console.log(str3.match(reg3));
console.log(str3.match(reg3_1));
//有g 这个修饰符时； match 只能捕获到大正则捕获的内容

// console.log(reg3.exec(str3));
// 第一项 是大正则捕获到的内容
// 第二项 是第一个小分组捕获到的内容
// 第三项 是第二个小分组捕获到的内容

console.log(reg3.execAll(str3));
