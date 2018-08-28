var banner = (function () {
    var data = null,
        timer = null,
        oDiv = document.getElementById('div1'),
        oUl = utils.getByClass('img_box')[0],
        tipBox = utils.getByClass('tip_box',oDiv)[0],
        tips = tipBox.getElementsByClassName('tip'),
        boxW = utils.css(oUl,'width'),
        n = 0,
        index = 0,
        leftBtn = utils.getByClass('leftBtn')[0],
        rightBtn = utils.getByClass('rightBtn')[0];
    //获取数据
    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('get','data.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
                data = utils.toJson(xhr.responseText);
            }
        };
        xhr.send();
    };
    //把数据放到页面上
    function giveHtml() {
        var str = '';
        var tipStr = '';
        data.push(data[0]);//把第一张图片添加到最后一张
        data.forEach(function (item, index) {
            var {pic,title} = item;
            str += `<li>
                    <img src="${pic}"  alt="">
                    <p>${title}</p>
                </li>`;
            if(index < data.length-1){// 0 1 2 3
                tipStr += `<li class="tip ${index==0?'current':''}">${index+1}</li>`;
            }
        });
        n = data.length;
        oUl.innerHTML = str;
        tipBox.innerHTML = tipStr;
        oUl.style.position = 'relative';//设置定位
        oUl.style.width = boxW*n + 'px';
        //设置oUl的宽度
    }
    //自动播放
    function autoPlay(){
        timer = window.setInterval(function () {
            play();
        },3000);
    }
    //播放函数
    function play() {
        //怎么动  动多少？
        if(utils.css(oUl,'left')%boxW != 0)return;
        index++;// 进来先加一个，然后这次的运动是走下一个图片
        if(index == -1){// 往左走的左边界
            utils.css(oUl,'left',-boxW*(n-1));//直接闪到最后一张
            index = n-2;//紧接着让ul想左移动
        }
        if(index == n){// 往右走的右边界
            utils.css(oUl,'left',0);
            index = 1;
        }
        /*
        index的取值范围  0  1  2  3  4
        tips: 0 1 2 3
        */
        [...tips].forEach((item,index)=>{
            utils.removeClass(item,'current');
        });
        if(index == n-1){
            utils.addClass(tips[0],'current');
        }else {
            utils.addClass(tips[index],'current');
        }


        var curL =  -boxW*index;
        // utils.css(oUl,'left',curL);
        myAnimate(oUl,500,{left:curL});
    }
    //事件绑定 函数
    function eventFn() {
        rightBtn.onclick = function () {
            clearInterval(timer);
            play();
            // timer = window.setInterval(function () {
            //     play();
            // },3000);
        };
        leftBtn.onclick = function () {
            if(utils.css(oUl,'left')%boxW != 0)return;
            clearInterval(timer);
            index -= 2; //让 index 整体减2 ；它在play 中又加了1；相当于ul整体左移一个宽度
            play();
            // timer = window.setInterval(function () {
            //     play()
            // },3000);
        };
        oDiv.onmouseenter = function () {
            //鼠标进入 oDiv
            clearInterval(timer);
            utils.css(leftBtn,'display','block');
            utils.css(rightBtn,'display','block');
        };
        oDiv.onmouseleave = function () {
            //鼠标离开 oDiv
            utils.css(leftBtn,'display','none');
            utils.css(rightBtn,'display','none');
            autoPlay();
        };
    }
    //tip绑定 函数
    function tipClick() {
        for(let i = 0; i < tips.length; i++){
            tips[i].onclick = function () {
                index = i-1;
                play();
            }
        }
    }
    return {
        init:function () {
            getData();
            giveHtml();
            autoPlay();
            eventFn();
            tipClick();
        }
    }
})();