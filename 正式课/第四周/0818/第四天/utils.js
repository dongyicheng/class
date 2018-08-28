var utils = (function () {
    var flag = window.getComputedStyle ? false : true;
    // flag 为true表示 IE6-8
    // 惰性思想
    function getCss(ele,attr) {
        var str = navigator.userAgent;
        var res = null;
        if(flag){
            //IE 6-8
            res = ele.currentStyle[attr]
        }else {
            res = getComputedStyle(ele)[attr];
        }
        /*
        * 先用parseFloat  处理这个字符串 若是 NaN ；则直接返回之前的字符串
        * */
        // if(!isNaN(parseFloat(res))){
        //     res = parseFloat(res);
        // }
        /*
        *
        * 用正则处理 --->
        * /[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?/
        * */
        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?$/;
        res = reg.test(res) ? parseFloat(res) : res;
        return res;
    }
    function setCss(ele,attr,value) {
        //常用的需要加单位的属性
        var reg = /width|height|padding|margin|left|top|bottom|right|fontsize/i;
        if(reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr]=value;
    }
    function setGroup(ele,obj){
        if(Object.prototype.toString.call(obj) == '[object Object]'){
            for(var k in obj){
                if(obj.hasOwnProperty(k)){
                    setCss(ele,k,obj[k])
                }
            }
        }
    }
    function css() {
        var arg = arguments;
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1])
            }
            setGroup(arg[0],arg[1])
        }else {
            setCss(arg[0],arg[1],arg[2]);
        }
    }
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var temp = ele.offsetParent;
        while (temp && temp.nodeName.toLowerCase() != 'body'){
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l,t
        }
    }
    function toArray (a) {
        var ary = [];
        try {
            ary = [].slice.call(a)
        }catch (e) {
            for(let i = 0; i < a.length; i++){
                ary.push(a[i])
            }
        }
        return ary
    }
    function toJson (str) {
        var obj = {};
        try{
            obj = JSON.parse(str);
        }catch (e) {
            obj = eval(`(${str})`);
        }
        return obj;
    }
    function scrollT() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
    function clientH() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
    function clientW() {
        return document.documentElement.clientWidth || document.body.clientWidth;
    }
    function win(str) {
        return document.documentElement[str] || document.body[str];
    }
    function children(ele) {
        var childs = ele.children;
        var ary = [];
        for(var i = 0; i < childs.length; i++){
            if(childs[i].nodeType == 1){
                ary.push(childs[i]);
            }
        }
        return ary;
    }
    function getByClass(str,context) {
        context = context || document;
        str = str.replace(/^ +| +$/g,'');
        var classAry = str.split(/ +/g);
        var eles = context.getElementsByTagName("*");
        for(var k = 0; k < classAry.length; k++){
            var reg = new RegExp("(^| +)"+classAry[k]+"( +|$)");
            var ary = [];
            for(var i = 0; i < eles.length; i++){
                if(reg.test(eles[i].className)){
                    ary.push(eles[i])
                }
            }
            eles = ary;
        }
        return ary

    }

    return{
        getCss,setCss,setGroup,css,toArray,toJson,offset,scrollT,clientH,children,getByClass,clientW,win
    }
})();