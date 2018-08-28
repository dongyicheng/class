var utils = (function () {
    var getCss = function (ele,attr) {
        var res = null;
        try {
            res = window.getComputedStyle(ele)[attr]
        }catch (e) {
            res = ele.currentStyle[attr];
        }
        //rgb(203,234,345)
        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?$/;
        if(reg.test(res)){
            res = parseFloat(res);
        }
        return res;
    };
    var setCss = function (ele,attr,value) {
        var reg = /width|height|margin|padding|top|left|bottom|right|fontSize/i;
        if(reg.test(attr)){
            value = parseFloat(value)+'px';
        };
        ele.style[attr] = value;
    };
    var setGroup = function(ele,obj) {
        if(Object.prototype.toString.call(obj) !== "[object Object]"){return;}
        for(var k in obj){
            if(obj.hasOwnProperty(k)){
                setCss(ele,k,obj[k]);
            }
        }
    };
    var css = function (...arg) {
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1])
            }
            setGroup(arg[0],arg[1])
        }else {
            setCss(arg[0],arg[1],arg[2])
        }
    };
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var temp = ele.offsetParent;
        while (temp && temp.nodeName.toLowerCase() != 'body'){
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {// l:l,t:t
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

    return {
        getCss, setCss, setGroup, css, offset, toArray, toJson,clientH,scrollT

    }
})();