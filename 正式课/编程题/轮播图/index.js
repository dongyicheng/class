function Banner(id, url) {
    this.box = document.getElementById(id);
    this.data = null;
    this.url = url;
    this.oUl = utils.getByClass('ul_box', this.box)[0]
    this.n = null;
    this.boxW = utils.css(this.box, 'width');
    this.index = 0;
    this.timer = null;
    this.btn_box = utils.getByClass('btn_box', this.box)[0];
    this.leftBtn = utils.getByClass('leftBtn', this.btn_box)[0];
    this.rightBtn = utils.getByClass('rightBtn', this.btn_box)[0];
    this.tip_box = utils.getByClass('tip_box', this.box)[0];
    this.tips=this.tip_box.getElementsByClassName('tips')

    this.init()
}

Banner.prototype = {
    constructor: Banner,
    getData: function () {
        return new Promise((res, rej) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get', this.url)
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && /^[23]\d{2}$/.test(xhr.status)) {
                    this.data = utils.toJson(xhr.responseText)
                    res()
                }
                if (!/^[23]\d{2}$/.test(xhr.status)) {
                    rej()
                }
            }
            xhr.send()
        })

    },
    giveHtml: function () {
        let str = '';
        let tipStr = ''
        this.data.push(this.data[0]);
        this.data.forEach((item, index) => {
            let {pic, title} = item;
            str += `<li>
            <img src="${pic}" alt="">
            <p>${title}</p>
        </li>`
            if ( index >= this.data.length - 1) return;
            tipStr += `<li class="tips ${index==0?'current':''}">${index + 1}</li>`;
        });
        this.oUl.innerHTML = str;
        this.tip_box.innerHTML=tipStr;
        this.n = this.data.length;
        utils.css(this.oUl, {width: this.boxW * this.n, position: 'relative'})
    },
    play: function () {
        if (utils.css(this.oUl, 'left') % this.boxW !== 0) return;
        this.index++;
        if (this.index >= this.n) {
            utils.css(this.oUl, 'left', 0)
            this.index = 1;
        }
        if (this.index <= -1) {
            utils.css(this.oUl, 'left', -this.boxW * (this.n - 1))
            this.index = this.n - 2;
        }
        [...this.tips].forEach((item)=>{
            utils.removeClass(item,'current')
        });
        if(this.index == this.n-1){
            utils.addClass(this.tips[0],'current')
        }else{
            utils.addClass(this.tips[this.index],'current')
        }
        myAnimate(this.oUl, 500, {left: -this.boxW * this.index})
    },
    autoPlay: function () {
        this.timer = setInterval(() => {
            this.play()
        }, 3000)
    },
    eventFn: function () {
        this.box.onmouseenter = () => {
            clearInterval(this.timer);
            utils.css(this.btn_box, 'display', 'block')
        };
        this.box.onmouseleave = () => {
            this.autoPlay()
            utils.css(this.btn_box, 'display', 'none')
        };
        this.leftBtn.onclick = () => {
            if (utils.css(this.oUl, 'left') % this.boxW !== 0) return;
            this.index -= 2;
            this.play();
        };
        this.rightBtn.onclick = () => {
            this.play();
        };
    },
    tipClick:function () {
        for (let i = 0; i < this.tips.length; i++) {
            this.tips[i].onclick=()=>{
                if(this.index==this.n-1){
                    utils.css(this.oUl,'left',0)
                }
                this.index=i-1
                this.play();
            }
        }
    },


    cb: function () {
        this.giveHtml()
        this.autoPlay()
        this.eventFn()
        this.tipClick()
    },
    init: function () {
        let p = this.getData()
        p.then(() => {
            this.cb()
        }, () => {
            console.log('fail');
        })
    }
}

let banner = new Banner('box', 'data.json');


