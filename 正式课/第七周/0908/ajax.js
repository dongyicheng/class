function ajax(options){
let{
    url,
    data={},
    type='get',
    dataType='json',
    cache=false,
    async=true,
    success,
    error,
}=options;
    let str='';
    for (var k in data) {
        if(data.hasOwnProperty(k)){
            str+=`${k}=${data[k]}$`
        }
    }
    str=str.slice(0,str.length-1);

    let isGet=null;
    if(/get|head|delete/.test(type)){
        isGet=true;
    }else if(/post|put/.test(type)){
        isGet=false;
    }

    let xhr=new XMLHttpRequest();
    if(isGet){
        if(url.indexOf('?') === -1){
            url +=`?${str}`
        }else{
            url=url.replace(/&$/,'')
            url+=`&${str}`;
        }
        if(cache == false){
            url+=`$_=${Math.random()}`
        }
    }
    xhr.open(type,url,async);
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4&&/^2\d{2}|304/.test(xhr.status)){
            switch(dataType){
                case 'json':
                    let data=JSON.parse(xhr.response)
                    success&&success(data);
                    break;
                case 'xml':
                    success&&success(xhr.responseXML)
                    break;
                default:
                    success&&success(xhr.response)
            }
        }
        if(xhr.readyState===4&&/^[45]\d{2}/.test(xhr.status)){
            error&&error(xhr)
        }
    }
    if(!isGet){
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    }
    xhr.send(str)
}
ajax({
    type: 'post',
    url: '1.json?n=12&',
    data: {name: '珠峰'},
    success: function (d) {
        console.log(d);
    },
    error: function (res) {
        console.log(res);
    }
})