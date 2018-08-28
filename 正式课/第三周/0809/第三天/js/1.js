var oDiv = document.getElementById('div1');
// var oDiv = document.getElementsByTagName('div')[0];
// oDiv.getElementsByTagName('li');
// function getCss(ele,attr) {
//     var res = null;
//     try{
//         res = window.getComputedStyle(ele)[attr];
//     }catch (e) {
//         res = ele.currentStyle[attr];
//         // 兼容 IE 6-8
//     }
//     return res;
// }
// console.log(getCss(oDiv, 'width'));

// function getCss(ele,attr) {
//     var res = null;
//     if(window.getComputedStyle){
//         // 先去判断 window下有没有这个属性；若是 undefined  则直接走else中的代码
//         res = window.getComputedStyle(ele)[attr]
//     }else {
//         res = ele.currentStyle[attr]
//     }
//     return res;
// }

function getCss(ele,attr) {
    var res = null;
    if(typeof window.getComputedStyle != 'undefined'){
        // 先去判断 window下有没有这个属性；若是 undefined  则直接走else中的代码
        res = window.getComputedStyle(ele)[attr]
    }else {
        res = ele.currentStyle[attr]
    }
    return res;
}

console.log(getCss(oDiv, 'width'));


/*
* 使用 浏览器版本判断 是否是IE 浏览器
* "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; McAfee)"
* */

function getCss(ele,attr) {
    var res = null;
    var reg = /MSIE *[5-8]/;
    if(!reg.test(navigator.userAgent)){
        res = window.getComputedStyle(ele)[attr]
    }else {
        res = ele.currentStyle[attr]
    }
    return res;
}


/*
* 提高函数的适用率
*
* 把返回值是数字加单位的 直接处理成数字返回
* 不是数字加单位的   直接返回原值
* */

function getCss(ele,attr){
    var res = null;
    try {
        res = window.getComputedStyle(ele)[attr]
    }catch (e) {
        res = ele.currentStyle[attr];
    }
    //判断 res 是否是 数字加单位的类型；reb() 200px 233
    var reg = /[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?/;//
    if(reg.test(res)){
        res = parseFloat(res);
    }
    return res;

    // parseFloat(res)
    // if(parseFloat(res)){
    //     // 直接用 parseFloat(res)判断 若是 0px  则返回的 是 0
    //     // 那么就进不到这个判断条件里边 ；返回值 就成了 0px
    //     res = parseFloat(res);
    // }
    // if(!isNaN(parseFloat(res))){//都是 数字+ 单位  或者直接纯数字
    //     res = parseFloat(res);
    // }
    // return res;

}

console.log(getCss(oDiv, 'padding'));


