function Banner(id,url) {
    this.data = null;
    this.timer = null;
    this.url = url;
    this.oDiv = document.getElementById(id);
    this.oUl = utils.getByClass('img_box',this.oDiv)[0];
    this.tipBox = utils.getByClass('tip_box',this.oDiv)[0];
    this.tips = this.tipBox.getElementsByClassName('tip');
    this.boxW = utils.css(this.oDiv,'width');
    this.n = 0;
    this.index = 0;
    this.leftBtn = utils.getByClass('leftBtn',this.oDiv)[0];
    this.rightBtn = utils.getByClass('rightBtn',this.oDiv)[0];
    this.init();
};
Banner.prototype = {
    constructor: Banner,
    getData: function getData() {
        var xhr = new XMLHttpRequest();
        // var _this = this; 保存this指向
        xhr.open('get',this.url,false);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
                this.data = utils.toJson(xhr.responseText);
            }
        };
        xhr.send();
    },
    giveHtml: function giveHtml() {
        var str = '';
        var tipStr = '';
        this.data.push(this.data[0]);//把第一张图片添加到最后一张
        this.data.forEach((item, index) => {
            var {pic,title} = item;
            str += `<li>
                    <img src="${pic}"  alt="">
                    <p>${title}</p>
                </li>`;
            if(index < this.data.length-1){// 0 1 2 3
                tipStr += `<li class="tip ${index==0?'current':''}">${index+1}</li>`;
            }
        });
        this.n = this.data.length;
        this.oUl.innerHTML = str;
        this.tipBox.innerHTML = tipStr;
        this.oUl.style.position = 'relative';//设置定位
        this.oUl.style.width = this.boxW*this.n + 'px';
        //设置oUl的宽度
    },
    autoPlay: function autoPlay(){
        this.timer = window.setInterval(() => {
            this.play();
        },3000);
    },
    play: function play() {
        if(utils.css(this.oUl,'left')%this.boxW != 0)return;
        this.index++;
        if(this.index == -1){
            utils.css(this.oUl,'left',-this.boxW*(this.n-1));
            this.index = this.n-2;
        }
        if(this.index == this.n){
            utils.css(this.oUl,'left',0);
            this.index = 1;
        }
        [...this.tips].forEach((item,index)=>{
            utils.removeClass(item,'current');
        });
        if(this.index == this.n-1){
            utils.addClass(this.tips[0],'current');
        }else {
            utils.addClass(this.tips[this.index],'current');
        }
        var curL =  -this.boxW*this.index;
        myAnimate(this.oUl,500,{left:curL});
    },
    eventFn: function eventFn() {
        this.rightBtn.onclick = () => {
            clearInterval(this.timer);
            this.play();
        };
        this.leftBtn.onclick = () => {
            if(utils.css(this.oUl,'left')%this.boxW != 0)return;
            clearInterval(this.timer);
            this.index -= 2;
            this.play();
        };
        this.oDiv.onmouseenter = () => {
            clearInterval(this.timer);
            utils.css(this.leftBtn,'display','block');
            utils.css(this.rightBtn,'display','block');
        };
        this.oDiv.onmouseleave = () => {
            utils.css(this.leftBtn,'display','none');
            utils.css(this.rightBtn,'display','none');
            this.autoPlay();
        };
    },
    tipClick: function tipClick() {
        for(let i = 0; i < this.tips.length; i++){
            this.tips[i].onclick = () => {
                this.index = i-1;
                this.play();
            }
        }
    },
    init: function () {
        this.getData();
        this.giveHtml();
        this.autoPlay();
        this.eventFn();
        this.tipClick();
    }
};
