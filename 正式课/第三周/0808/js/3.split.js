/*
*split 把字符串按指定字符分成数组
*
* */
var reg=/[,+-]/g;
var str='珠峰,珠峰2-zhufeng+zhu';
console.log(str.split(reg));//["珠峰", "珠峰2", "zhufeng", "zhu"]


var str2='zhufeng123zhufeng2324zhufeng2323ee';
var reg2=/\d+/g;
console.log(str2.split(reg2));//拿到单词
// ["zhufeng", "zhufeng", "zhufeng", "ee"]
console.log(str2.match(reg2));
//["123", "2324", "2323"]
var reg3=/\D+/g;
console.log(str2.split(reg3));//拿到数字
// ["", "123", "2324", "2323", ""]