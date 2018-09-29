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
    } = options;
    let str = '';

    for (var k in data) {
        if (data.hasOwnProperty(k)) {
            str += `${k}=${data[k]}`
        }
    }

    if(/get|head|delete/.test(type)) {
        if (url.indexOf('?') === -1) {
            url += `?${str}`
        } else {
            url = url.replace(/&$/, '')
            url += `&${str}`
        }
        cache ? null : url += `&t=${Math.random()}`
    }
        let xhr = new XMLHttpRequest();
        xhr.open(type, url, async)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}|304/.test(xhr.status)) {
                let data = null;
                switch (dataType) {
                    case 'json':
                        data = JSON.parse(xhr.responseText);
                        success && success(data)
                        break;
                    case 'xml':
                        success && success(xhr.responseXML);
                        break;
                    default:
                        success && success(xhr.response);
                }
            }
            if (xhr.readyState === 4 && /^[45]\d{2}/.test(xhr.status)) {
                error && error(data)
            }
        }
        if(/post|put/.test(type)){
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        }
        xhr.send(str);
}
ajax({
    type:'post',
    url:'./1.json?n=12&',
    data:{name:'珠峰'},
    success:function (d) {
        console.log(d);
    },
    error:function (res) {
        console.log(res);
    }
});