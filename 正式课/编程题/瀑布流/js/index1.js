var data=null;
function getData() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','json/data.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            data=utils.toJson(xhr.responseText)
        }
    }
    xhr.send();
}
getData();
var oUls=document.getElementsByTagName('ul');
var ulAry=utils.toArray(oUls);
var oImgs=document.getElementsByTagName('img');
console.log(oImgs);

function giveHtml(data) {
    data.forEach(function (item,index) {
        var {pic,title,height}=item;
        var li=document.createElement('li');
        var str=`<img src="img/default.gif" realSrc="${pic}" height="${height}"
alt="">
            <p>${title}</p>`
        li.innerHTML=str;
        getMinUl().appendChild(li)
    })
}
function getMinUl() {
    ulAry.sort((a,b)=>{
        return a.clientHeight-b.clientHeight;
    })
    return ulAry[0];
}
giveHtml(data);

function imgLoad(ele) {
    if(ele.loaded)return;
    var cliH=utils.clientH();
    var scrT=utils.scrollT();
    var tarT=utils.offset(ele).t;
    if(cliH+scrT>=tarT){
        var temp=document.createElement('img');
        var realSrc=ele.getAttribute('realSrc');
        temp.src=realSrc;
        temp.onload=function () {
            ele.src=realSrc;
            ele.loaded=true;
            fadeIn(ele);
        }
        temp=null;
    }
}
function loadAll(eles) {
    for (let i = 0; i < eles.length; i++) {
        imgLoad(eles[i]);
    }
}
loadAll(oImgs);
window.onscroll=function () {
    loadAll(oImgs);
    getMore();
}
function getMore() {
    var scrT=utils.scrollT();
    var cliH=utils.clientH();
    var temp=getMinUl();
    var tarT=temp.clientHeight+utils.offset(temp).t;
    if(scrT+cliH>=tarT){
        getData();
        giveHtml(data);
    }
}
function fadeIn(ele) {
    ele.style.opacity=0;
    var opa=0.1;
    var timer=setInterval(function () {
        opa+=0.1;
        ele.style.opacity=opa;
        if(opa>=1){
            clearInterval(timer);
            ele.style.opacity=1;
        }
    },20)
}