var data=null;
var xhr=new XMLHttpRequest();
xhr.open('get','json/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        // data=JSON.parse(xhr.responseText)
        data=utils.toJson(xhr.responseText);
    }
};
xhr.send();
var oUl=document.getElementsByClassName('ul_box')[0];
var oBtn=document.getElementsByClassName('ul_btn')[0];
var btns=oBtn.getElementsByTagName('li');
function giveHtml() {
    var str='';
    for (let i = 0; i < data.length; i++) {
        str+=`<li price="${data[i].price}" hot="${data[i].hot}" time="${data[i].time.toString().replace(/-/g,'')}">
            <div class="img_box "><img src="${data[i].picImg}" alt=""></div>
            <div class="til">${data[i].title}</div>
            <div class="price_box public_class">
                价格:<span>￥${data[i].price}.00</span>
            </div>
            <div class="desc_box public_class">
                评价数：<span>${data[i].hot}</span>
            </div>
            <div class="time_box public_class">
                上架时间：<span>${data[i].time}</span>
            </div>
         </li>`
}
    oUl.innerHTML=str;
}
giveHtml(data);

// var ary=['price','hot','time'];
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick=function () {
//         data.sort(function (a,b) {
//             return a[ary[i]].toString().replace(/-/g,'')-b[ary[i]].toString().replace(/-/g,'')
//         });
//         giveHtml(data);
//     };
// }

//上个思路 是 直接改变原数据； 改变后直接让数据重新放到页面上
//DOM 的 重绘  和   回流
//DOM的重绘；改变， 背景颜色   color   font-size ...
//回流   DOM位置改变  添加元素  删除元素
//减少页面的回流是前端优化的一个方向


//操作DOM  实现排序
var oLis=oUl.getElementsByTagName('li');//获取要排序的元素
var liAry=utils.listToAry(oLis);//为了下边操作方便  把类数组转成数组
var btns=document.getElementsByClassName('btn');//获取要点击的元素

var ary=['price','hot','time'];
var flag=0;
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick=function () {
        if(flag==0){
            liAry.sort((a,b)=>{
                return a.getAttribute(ary[i])-b.getAttribute(ary[i]);
            });
            flag=1
        }else{
            liAry.sort((a,b)=>{
                return b.getAttribute(ary[i])-a.getAttribute(ary[i]);
        });
          flag=0;
        }
        // liAry.forEach((item)=> {
        //     oUl.appendChild(item);
        //     //若页面有该元素 ； 再去appendChild 时 ； 只是改变该元素在页面中的位置
        // })
        /*创造一个文件碎片*/
        var frag=document.createDocumentFragment();
        liAry.forEach((item)=> {
            frag.appendChild(item);
            //若页面有该元素 ； 再去appendChild 时 ； 只是改变该元素在页面中的位置
        })
        oUl.appendChild(frag);
        frag=null;
    }
}

