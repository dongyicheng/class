var data=null;
var xhr=new XMLHttpRequest();
xhr.open('get','json/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        data=JSON.parse(xhr.responseText)
    }
};
xhr.send();
var oUl=document.getElementsByClassName('ul_box')[0];
var oBtn=document.getElementsByClassName('btn_box')[0];
var btns=oBtn.getElementsByTagName('li');
function giveHtml(data) {
    var str = '';
    for (let i = 0; i < data.length; i++) {
        str += `<li>
            <div class="img_box"><img src="${data[i].picImg}" alt=""></div>
            <div class="public">${data[i].title}</div>
            <div class="public">价格<span>￥${data[i].price}.00</span></div>
            <div class="public">评价数<span>${data[i].hot}</span></div>
            <div class="public">上架时间：<span>${data[i].time}</span></div>
        </li>`
    }
    oUl.innerHTML=str;
}
giveHtml(data);

var ary=['price','hot','time'];
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick=function () {
        data.sort((a,b)=>{
            return a[ary[i]].toString().replace('-','').replace('-','')-b[ary[i]].toString().replace('-','').replace('-','')
        });
        giveHtml(data);
    };
}