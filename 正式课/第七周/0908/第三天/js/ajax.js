/*
ajax({
    type:'get', 请求方式
    url:'./1.json', 请求路径
    data:{name:'珠峰'}, 请求参数
    dataType:'json',  请求的数据类型
    async:true,  同步异步
    cache:false,  是否缓存
    success:function (data) {
        console.log(data);
    },
    error:function (res) {
        console.log(res);
    }
});*/
/*
* 接收一个对象作为参数；
* 根据对象中的参数 决定下边代码编辑
* 先创建一个ajax实例，
* open --> 对于url的处理
* onreadystatechange  ---> 根据dataType返回固定格式数据
* send() ---> 根据type 决定要不要传参
* */

function ajax(options) {
    let {
        type = 'get',
        url,
        data = {},
        dataType = 'json',
        async = true,
        cache = false,
        success,
        error
    } = options;// 拿到所有参数；

    //处理 data 数据； 不管是放到 url 后边还是 放到 send里边；都要求是一个字符串
    let str = '';
    for(let k in data){
        if(data.hasOwnProperty(k)){
            // 查看 k  是否是 data 的私有属性
            str += `${k}=${data[k]}&`
        }
    }
    //str 最后多了一个 &
    str = str.slice(0,str.length-1);// 'name=12&age=12&name2=14';
    let isGet = null;
    if(/get|head|delete/.test(type)){
        isGet = true;
    }else if(/post|put/.test(type)){
        isGet = false;
    }

    let xhr = new XMLHttpRequest();
    if(isGet){
        //需要我们判断传进来的url上是否有 ? ;若有则直接把str拼接到url后即可；若无则需要添加一个 ? 再去拼接
        if(url.indexOf('?') === -1){
            url += `?${str}`;
        }else {
            url = url.replace(/&$/,'');// 把url最后边的& 去掉；
            url += `&${str}`;
        }
        if(cache == false){
            //不要缓存
            url += `&_=${Math.random()}`;
        }
    }
    xhr.open(type,url,async);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && /^2\d{2}|304/.test(xhr.status)){
            //代表请求成功
            // 要判断用户要的数据格式
            switch (dataType){
                case 'json':
                    let data = JSON.parse(xhr.response)//正常的JSON对象
                    success && success(data);// 若success存在；则直接执行success,并把实参 data传给success；
                    break;
                case 'xml':
                    success && success(xhr.responseXML);
                    break;
                default:
                    success && success(xhr.response);
            }
        }
        if(xhr.readyState === 4 && /^[45]\d{2}/.test(xhr.status)){
            //只要HTTP状态码是 4开头或5 开头；就代表了 http请求失败
            error && error(xhr);
        }
    };
    //若请求是 post 则需要把参数写到send中；若是get则不用；但是 若是get 写上了也不会对请求有任何影响；所以我们在这里直接写上这个实参
    // 我们发现JQ传给后台的是个formData格式的；
    if(!isGet){
        // 如果是post请求 我们把参数转成formdata格式
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    }
    xhr.send(str);
};
/*ajax({
    type:'get',
    url:'./2.json?n=12&',
    data:{name:'珠峰'},
    success:function (d) {
        console.log(d);
    },
    error:function (res) {
        console.log(res);
    }
});*/
ajax.get = function(url,data,fn,dataType){
    // 1 四个参数都正常传
    // let obj = {type:'get',url,data,success:fn,dataType};// 属性名和属性值一样时可以简写
    // 2 不传参数时 ---data就是传进来的那个函数； 只要判断data是不是函数 就可以了
    let obj = {};
    if(data instanceof Function){
        obj = {type:'get',url,success:data,dataType:fn}
    }else {
        obj = {type:'get',url,data,success:fn,dataType};
    }
    ajax(obj);
};

/*ajax.get('./1.json',{name:'珠峰培训'},function(data){
    console.log(data);
},'json');*/
//
ajax.get('./1.json',function(data){
    console.log(data);
});
