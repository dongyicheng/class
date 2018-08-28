var oDiv = document.getElementById('div1');
function getGroup(ele,arr) {
    //循环
}
getGroup(oDiv,['width','height']);// --> [200,200]；

function setCss(ele,attr,value) {
    //这里我们需要知道 attr 这个属性需不需要加单位
    // width height left top margin padding border fontSize...
    // 第一种 用数组
    // var ary = ["width", "height", "left", "top", "margin", "padding", "border", "fontSize"];
    // if(ary.indexOf(attr) !== -1){
    //     value = parseFloat(value)+'px';
    // }

    //第二种 用正则
    var reg = /width|height|margin|padding|top|left|bottom|right|fontSize/i;//i忽略大小写
    if(reg.test(attr)){
        value = parseFloat(value)+'px';
    }
    ele.style[attr] = value;
}
setCss(oDiv,'color','#ccc');
setCss(oDiv,'fontSize','25');
// setCss(oDiv,'font-size','25px');// 在JS中， 所有用-分离的属性 我们都转成驼峰命名
setCss(oDiv,'marginTop','10');



function setGroup(ele,obj) {
    if(Object.prototype.toString.call(obj) !== "[object Object]"){return;}
    for(var k in obj){
        //for in循环 会把Object原型上自定义的属性也拿到  所以先判断是不是私有属性
        if(obj.hasOwnProperty(k)){
            setCss(ele,k,obj[k]);
        }
    }
}
setGroup(oDiv,{width:400,height:500,color:'red'});
function css(){
    var arg = arguments;
    if(arg.length == 2){
        if(typeof arg[1] == 'string'){
            //获取样式值
            return getCss(arg[0],arg[1])
        }
        // 批量设置
        setGroup(arg[0],arg[1])
    }else {
        //单个设置
        setCss(arg[0],arg[1],arg[2])
    }
}

css(oDiv,'width');// ---> 获取
css(oDiv,'height',300);// ---> 设置
css(oDiv,{width:100,color:'#ccc'});// ---> 批量设置