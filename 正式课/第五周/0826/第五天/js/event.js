function on(ele,type,f) {
    if(/^my/.test(type)){ //若是自己的事件，就走自己的发布订阅
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if(n == -1){
            ele[type].push(f)
        }
    }else {
        type = type.replace(/^on/g,'');
        ele.addEventListener(type,f,false);
    }

}

function fire(ele,type) {
    ele[type] = ele[type] || [];
    ele[type].forEach((item)=>{
        item && item.call(ele);
    })
}

function off(ele,type,f){
    if(/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if(n != -1){
            ele[type].splice(n,1);
        }
    }else {
        type = type.replace(/^on/,'');
        ele.removeEventListener(type,f,false);
    }

}