/*
* 第一步 获取数据
* */
var data = null;
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','data.json',false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            data = utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();
console.log(data);

/*
* 第二步 把数据展示到页面上
* */
var box = document.getElementsByClassName('box')[0];
var oUls = box.getElementsByTagName('ul');
var oImgs = document.getElementsByTagName('img');
function giveHtml(){
    data.forEach(function (item, index) {
        var {pic,title,height} = item;
        //var pic = item.pic,title = item.title,height = item.height
        /*var str = `<li>
                <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" height="${height}" trueSrc="${pic}" alt="">
                <p>${title}</p>
            </li>`;
        // var n = index % 4;// 0 1 2 3
        // oUls[n].innerHTML += str;
        var temp = getMinUl();
        temp.innerHTML += str;*/

        var li = document.createElement('li');
        var str = `<img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" height="${height}" trueSrc="${pic}" alt="">
                <p>${title}</p>`;
        li.innerHTML = str;
        var temp = getMinUl();
        temp.appendChild(li);
    });
}
giveHtml();


/*
* 找最低的ul
* */
function getMinUl() {
    var ulAry = utils.toArray(oUls);
    ulAry.sort(function (a,b) {
        return a.clientHeight - b.clientHeight;
    });
    return ulAry[0];
}

/*
* 图片懒加载
* */
function loadImg(ele) {
    //查看 图片到body的距离是否 小于 卷去的高度+一屏的高度  说明图片露出来了
    if(ele.loaded)return;
    var scrT = utils.scrollT();
    var cliT = utils.clientH();
    var tarT = utils.offset(ele).t;
    if(scrT+cliT > tarT+ele.clientHeight/2){
        var trueSrc = ele.getAttribute('trueSrc');
        // ele.src = trueSrc;
        var temp = new Image();
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
    for(var i = 0; i < eles.length; i++){
        loadImg(eles[i]);
    }
}
loadAll(oImgs);
window.onscroll = function () {
    loadAll(oImgs);
    getMore();
};

/*
*当页面滑动至最低的ul底部露出来时，去加载新数据
* */
function getMore() {
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    if(scrT+cliH > tarT){
        getData();
        giveHtml();
    }
}



/*
* 让元素渐显
* */
function fadeIn(ele) {
    ele.style.opacity = 0;
    var opa = 0.1;
    var timer = setInterval(function () {
        opa += 0.1;
        ele.style.opacity = opa;
        if(opa >= 1){
            clearInterval(timer);
            ele.style.opacity = 1;
        }
    },20)
}



