var utils = {
    flag :window.getComputedStyle ? false : true,
    getCss:function getCss(ele,attr) {
        var str = navigator.userAgent;
        var res = null;
        if(utils.flag){
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
    },
    setCss: function setCss(ele,attr,value) {
        //常用的需要加单位的属性
        var reg = /width|height|padding|margin|left|top|bottom|right|fontsize/i;
        if(reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr]=value;
    }
};
utils.flag = true;