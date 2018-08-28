var utils = (function () {
    var getCss = function (ele,attr) {
        var res = null;
        try {
            res = window.getComputedStyle(ele)[attr]
        }catch (e) {
            res = ele.currentStyle[attr];
        }
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
    var css = function () {
        var arg = arguments;
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1])
            }
            setGroup(arg[0],arg[1])
        }else {
            setCss(arg[0],arg[1],arg[2])
        }
    };
    return {
        getCss:getCss,
        setCss, // === setCss:setCss
        setGroup,
        css
    }
})();