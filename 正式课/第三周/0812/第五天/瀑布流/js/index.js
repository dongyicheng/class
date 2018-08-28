/*
* 第一步 从后台获取数据
* */
var data = null; // 用来存储从后台获取的数据
/*var xhr = new XMLHttpRequest();
xhr.open('get','./data.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
        data = utils.toJson(xhr.responseText)
    }
};
xhr.send();*/
function getData(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','./data.json',false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            data = utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();
/*
* 第二步  把数据渲染到 页面上
*
* */
var box = document.getElementsByClassName('box')[0];
var oUls = document.getElementsByTagName('ul');
var ulAry = utils.toArray(oUls);//把类数组转成数组   [...oUls]
var oImgs = document.getElementsByTagName('img');
// var imgAry = [...oImgs];
// var oImgs2 = document.querySelectorAll('img');
function giveHtml(data) {
    data.forEach(function (item,index) {
        /*
        * index 是从 0  到 data.length;
        * 要知道每一条数据放到哪个ul里边；我们在这里，我们把 前四条一次放到四个ul中；
        * 后四条再一次放入 四个ul中； 这样依次进行就可以了
        * index%4
        * */
        var {pic,title,height} = item;//
        //这个是对象的解构赋值 item{id:0,pic:'http',title:'ttt',height:''}
        // var [a,,b] = [1,2,3];
        var str = `<li>
                <img src="img/default.gif" height="${height}" trueSrc="${pic}" alt="">
                <p>${title}</p>
            </li>`;
        //这个是挨个排的； 导致长短差距越来越大
        // var n = index % 4;// 0 1 2 3
        // oUls[n].innerHTML += str;

        //排的方式，换成每次给最矮的那个 ul 排数据；
        // getMinUl().innerHTML += str;
        var temp = getMinUl();// 获取最低的ul
        temp.innerHTML += str; //给这个ul 排数据
    });
}
function giveHtml2(data) {
    data.forEach(function (item,index) {
        /*
        * index 是从 0  到 data.length;
        * 要知道每一条数据放到哪个ul里边；我们在这里，我们把 前四条一次放到四个ul中；
        * 后四条再一次放入 四个ul中； 这样依次进行就可以了
        * index%4
        * */
        var {pic,title,height} = item;
        var li = document.createElement('li');
        var str = `
                <img src="img/default.gif" height="${height}" trueSrc="${pic}" alt="">
                <p>${title}</p>`;
        li.innerHTML = str;
        var temp = getMinUl();
        temp.appendChild(li);
    });
}
/*
* 找个子最低的ul  minUl
* */
function getMinUl(){
    ulAry.sort((a,b)=>{
        return a.clientHeight - b.clientHeight;
    });
    return ulAry[0];
}
giveHtml(data);
console.log(oImgs);
// console.log(imgAry);
// console.log(oImgs2);

/*
* 接下来实现图片的懒加载；我们需要先把真实路径存放到 img自定义属性上，给img一个默认的小图
* */

/*
* 图片的懒加载
* */
function loadImg(ele) {
    if(ele.loaded)return;
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var tarT = utils.offset(ele).t;
    if(scrT+cliH > tarT){
        var temp = document.createElement('img');
        var trueSrc = ele.getAttribute('trueSrc');//真实路径
        temp.src = trueSrc;
        temp.onload = function () {
            ele.src = trueSrc;
            ele.loaded = true;
            fadeIn(ele);
        };
        temp = null;
    }
}
function loadAll(eles) {
    for(var i = 0; i < eles.length ; i++){
        loadImg(eles[i])
    }
}
loadAll(oImgs);
window.onscroll = function () {
    loadAll(oImgs);
    getMore();
};
/*
* 加载新数据
* */
function getMore() {
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;// 最低的ul的高度 + ul到body的距离；
    if(scrT+cliH > tarT){
        getData();//获取新数据
        giveHtml(data);
    }
}
function fadeIn(ele) {
    ele.style.opacity = 0;
    var opa = 0.1;
    var timer = setInterval(function () {
        opa+=0.1;
        ele.style.opacity = opa;
        if(opa >=1){
            clearInterval(timer);
            ele.style.opacity = 1;
        }
    },20)
}