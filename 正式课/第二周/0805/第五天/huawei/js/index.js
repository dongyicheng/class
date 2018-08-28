/*
* 思路：
* 第一步  去后台 获取数据
* 第二步  把数据放到页面上
* 第三步  实现排序
* */
var data = null;//存拿到的数据
var oUl = document.getElementsByClassName('li_box')[0];

var xhr = new XMLHttpRequest();
xhr.open('get','./data/data.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        // data = JSON.parse(xhr.responseText);
        data = utils.toJson(xhr.responseText);
    }
};
xhr.send();
console.log(data);

function giveHtml(data) {
    var str = '';
    for(var i = 0; i < data.length; i++){
        str += `<li price="${data[i].price}" hot="${data[i].hot}" time="${data[i].time.toString().replace(/-/g,'')}">
                <div class="img_box">
                    <img src="${data[i].picImg}" alt="">
                </div>
                <h3 class="common_class">${data[i].title}</h3>
                <div class="price common_class">
                    价格：<span>￥${data[i].price}.00</span>
                </div>
                <div class="price common_class">
                    热度：<span>${data[i].hot}</span>
                </div>
                <div class="price common_class">
                    上架时间：<span>${data[i].time}</span>
                </div>
            </li>`
    }
    oUl.innerHTML = str;
}
giveHtml(data);

// 上个思路 是 直接改变原数据； 改变后直接让数据重新放到页面上
//DOM的重绘  和  回流
// DOM的重绘；　改变　，背景颜色 color font-size ....
// 回流  DOM位置改变、添加元素 删除元素 ；
// 减少页面的回流是前端优化的一个方面

//操作DOM 实现排序
var oLis = oUl.getElementsByTagName('li');// 获取要排序的ＤＯＭ元素
var liAry = utils.listToAry(oLis);//为了下边操作方便；我们把类数组转成数组
var btns = document.getElementsByClassName('btn');// 获取要点击的元素
console.log(liAry,oLis);

/*// 把数组里的LI按照指定要求排好序
liAry.sort((a,b)=>{
    return a.getAttribute('price') - b.getAttribute('price')
});
console.log(liAry);
// 把排好序的li重新放到页面当中
liAry.forEach(function (item, index) {
    oUl.appendChild(item);
    //若页面上又该元素;那么再去 appendChild 时；只是会改变该元素在页面中位置
});*/
var typeAry = ['price','hot','time'];
var flag = 0;
for(let i = 0; i < btns.length; i++){
    btns[i].onclick  = function () {
        if(flag == 0){
            liAry.sort((a,b)=>{
                return a.getAttribute(typeAry[i]) - b.getAttribute(typeAry[i])
            });
            flag = 1;
        }else {
            liAry.sort((a,b)=>{
                return b.getAttribute(typeAry[i]) - a.getAttribute(typeAry[i])
            });
            flag = 0;
        }

        liAry.forEach((item)=>{
            oUl.appendChild(item)
        })
    }
}






