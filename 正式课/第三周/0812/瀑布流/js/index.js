/*第一步 获取数据*/
var data=null;
function getData() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','json/data.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            data=utils.toJson(xhr.responseText);
        }
    }
    xhr.send();
}
getData()

/*第二步  把数据渲染到页面上*/
var box=document.getElementsByClassName('box')[0];
var oUls=document.getElementsByTagName('ul');
var ulAry=utils.toArray(oUls);//把类数组转成数组
var oImgs=document.getElementsByTagName('img')
function giveHtml(data) {
    var str=''
    data.forEach(function (item, index) {
        /*
        * index是从0-length;
        * 要知道每条数据放到哪个ul里 ; 在这里 把前四条依次放到 ul 中
        * 后四条在依次放入 四个 ul中 ; 这样依次放入就可以了
        * */
        var {pic, title, height} = item;//这个是对象的解构赋值
        str = `<li>
            <img src="img/default.gif" height="${height}" trueSrc="${pic}" alt="">
            <p>${title}</p>
        </li>`
        //依次放入的  会导致长短差距越来越大
        // var n=index%4;//0 1 2 3
        // oUls[n].innerHTML+=str;

        //排序的方式 换成每次给最矮的那个ul 排数据
        getMinUl().innerHTML += str
        //获取最短的ul ; 给这个ul 排数据
    })
}
// }//是把每加载一张图片就改变页面上的内容   会有闪屏的现象   下面是优化的方法
//优化的方法  是新建li标签  把内容加到li里  再把li添加到短的ul后面
    function giveHtml2(data) {
        data.forEach(function (item, index) {

            var {pic, title, height} = item;//这个是对象的解构赋值
            var li = document.createElement('li')
            var str = `
            <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif
"  trueSrc="${pic}" height="${height}" alt="">
            <p>${title}</p>
        `
            li.innerHTML = str;
            getMinUl().appendChild(li);
        })
    }


    /*找个子最低的ul  minUl*/

    function getMinUl() {
        ulAry.sort((a, b) => {
            return a.clientHeight - b.clientHeight;
        })
        return ulAry[0];
    }

    giveHtml2(data);

    /*
    *接下来实现图片的懒加载 ; 需要先把真实的路径存放到 img 自定义的属性上 给img一个默认的小图
    * */

    /*
    * 图片的懒加载
    * */
    function loadImg(ele) {
        if (ele.loaded) return;
        var srcT = utils.scrollT();
        var cliH = utils.clientH();
        var tarT = utils.offset(ele).t;
        if (srcT + cliH > tarT) {
            var temp = document.createElement('img');
            var trueSrc = ele.getAttribute('trueSrc');//真实路径
            temp.src = trueSrc;
            temp.onload = function () {
                ele.src = trueSrc;
                ele.loaded = true;
                fadeIn(ele)
            }
            temp = null;
        }
    }

    function loadAll(eles) {
        for (let i = 0; i < eles.length; i++) {
            loadImg(eles[i])
        }
    }

    loadAll(oImgs);
    window.onscroll = function () {
        loadAll(oImgs);
        getMore();
    };

    /*加载新数据*/
    function getMore() {
        var scrT = utils.scrollT();
        var cliH = utils.clientH();
        var temp = getMinUl();
        var tarT = temp.clientHeight + utils.offset(temp).t;//最低的ul的高度 + ul到body的距离
        if (scrT + cliH > tarT) {
            getData();//获取新数据
            giveHtml2(data);
        }
    }

    function fadeIn(ele) {
        ele.style.opacity = 0;
        var opa = 0.1;
        var timer = setInterval(function () {
            opa += 0.1;
            ele.style.opacity = opa;
            if (opa >= 1) {
                clearInterval(timer);
                ele.style.opacity = 1;
            }
        }, 20)
    }

