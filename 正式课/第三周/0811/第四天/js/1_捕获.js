var reg = /\d+/;
var reg2 = /(\d+)/;
var reg3 = /(\d)+/;
console.log(reg.exec('zhu2018feng2019'));
console.log(reg2.exec('zhu2018feng2019'));
console.log(reg3.exec('zhu2018feng2019'));
/*
* exec  正则中的捕获
* reg 返回值
* 第一项 代表 大正则（整个正则）捕获内容
* index  是这个字符串中从哪个字符开始 符合正则的；从哪个开始捕获的；
* input  是指整个字符串
*
* reg2 返回值 比 reg 多了一项 2018 ； 多的的这一项是是小分组捕获的内容
* reg3 返回值 比 reg 多了一项 8； 也就是咱们的小分组捕获的内容
* */

/*
* 正则捕获的懒惰行  ---> 解决方案  加个全局修饰符g
* */
var reg4 = /\d+/g;
console.log(reg4.test('zhu2018feng2019'));//        true
console.log(reg4.exec('zhu2018feng2019'));// 2018   2019
console.log(reg4.exec('zhu2018feng2019'));// 2019   null
console.log(reg4.exec('zhu2018feng2019'));// null   2018
console.log(reg4.exec('zhu2018feng2019'));// 2018   2019
/*
* 利用的 reg4 的 lastIndex ;
* lastIndex  下一次查找 开始的索引;
* test 和  exec 都会改变 正则的 lastIndex
* */

var reg5 = /^w$/;
var reg6 = /^w$/m;//m  多行 匹配;  i 忽略大小写
// console.log(reg5.test('qrsw\nw')); //-->false
// console.log(reg6.test('qrsw\nw')); // --> true
console.log(reg6.exec('qrsw\nw'));// w
console.log(reg6.exec('qrsww'));// null

function execAll(str){
    //this  --- > reg5
    var ary = [];
    // while (this.exec(str)){ // 判断时执行了一次exec
    //     ary.push(this.exec(str)[0]) // 有执行了一次exec
    // };
    var temp = this.exec(str);
    if(!this.global){
        /*
        * 在这里可以新造一个正则 ；是用 this + g  拼接的一个新正则
        * */
        temp = temp || {};// 防止获取的是个 null; null不能设置属性
        temp.errorMsg = '缺少全局修饰符';
        return temp;
    };
    while (temp){
        // ary.push(temp[0]);
        ary.push(temp);
        temp = this.exec(str);
    }
    return ary;
}
var reg6 = /\d+/g;
RegExp.prototype.execAll = execAll;
var arr = reg6.execAll('zhu2018feng2019');// ---> ['2018','2019']
console.log(arr);












