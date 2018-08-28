//1.通过ajax获取数据 2.把获取到的数据动态绑定在页面上
~(function(){
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("get","json/data.json",false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState ===4 && /^2\d{2}$/.test(xhr.status)){
            let jsonStr = xhr.responseText;
            data = JSON.parse(jsonStr)

        }
    };
    xhr.send(null);

    //绑定数据
    function bindHtml(data){
        let oUl = document.getElementById("list");
        let str = ``;
       data.forEach((item,index,ary)=>{
           let {picImg, title, price, hot, time } = item;
           str+=`
               <li data-price="${price}" data-hot = "${hot}" data-time="${time}">
                <img src="${picImg}" alt="">
                <h3>${title}</h3>
                <span>价格：<i>¥${price}</i></span>
                <span>评价数：<i>${hot}</i></span>
                <span>上架时间：<i>${time}</i></span>
              </li>
            `
       });
        oUl.innerHTML = str;
    }
    bindHtml(data);
})();

~(function(){
    //1.获取所有的a标签并且绑定点击事件
    let menu = document.getElementById("menu");
    let oAs = menu.getElementsByTagName("a");
    let aAs = [...oAs];//类数组转换成数组
    aAs.forEach((oA,index)=>{
        oA.onclick = ()=>{ //点击时执行排序的功能
            sortFn(index);
        }
    });
    //对li进行排序
    var flag = 1;
    let oUl  = document.getElementById('list');
    let oLis =oUl.getElementsByTagName("li");
    let aLis = [...oLis];
    function sortFn(index){
        let arr = ["data-price","data-hot","data-time"];
       /*0 ->data-price
        1 ->data-hot
        2 ->data-time*/
        let key  = arr[index]; //根据索引拿到对应自定义属性名
        if(flag == 1){
            flag = 2;
            aLis.sort((a,b)=>{
                let prev = a.getAttribute(key);
                let next = b.getAttribute(key);
                prev = prev.replace(/-/g,"");//把日期里的-去掉
                next = next.replace(/-/g,"");
                return prev-next;
            });
        }else {
            flag = 1;
            aLis.sort((a,b)=>{
                let prev = a.getAttribute(key);
                let next = b.getAttribute(key);
                prev = prev.replace(/-/g,"");//把日期里的-去掉
                next = next.replace(/-/g,"");
                return next - prev;
            });
        }

        //排序完后重新添加到页面
        aLis.forEach((item,index)=>{
           oUl.appendChild(item);
        })
    }
})();

