/*
* 第一个块  loading
* */

let loading = function () {
    //进度条加载完成后 要让 loading的这个块消失
    let $progressBar = $('.progress .progressBar'),
        $loadingBox = $('.loadingBox');
    //进度条的进度 是由 项目中所有图片加载完成 来决定的
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'];
    let n = 0;// 记录 加载完成的图片个数
    ary.forEach((item)=>{
        let img = new Image();
        //让 临时的 img  去请求 图片
        img.src = `./images/`+item;
        // img.onload = function () {
        //     load()
        // }
        img.onload = load;
    });
    function load() {
        n++;
        if(n == ary.length){
            //所有图片加载完毕
            $progressBar.css({
                width: '100%'
            });
            $loadingBox.css({
                opacity: 0
            });
            let timer2 = setTimeout(function () {
                $loadingBox.hide();
                //第一个块隐藏 执行第二个块相关的内容
                phoneFn();
            },1800);
           /* let timer1 = setTimeout(function () {
                $loadingBox.css({
                    opacity: 0
                });
            },1000);*/
        }else {
            //没加载完
            $progressBar.css({
                width: n/ary.length*100 +'%'
            })
        }
    }
};
loading();

/*
* 第二个块  phoneFn
* */
let phoneFn = function () {
    let $phoneBox = $('.phoneBox'), // 整个第二个块
        $listenBox = $('.listen_box'), // 接听的盒子
        $listenBtn = $('.listenBtn'), // 接听的按钮
        $noListenBox = $('.no_listen_box'),// 挂机对应的盒子
        $noListenBtn = $('.no_listenBtn'), // 挂机键
        $timeBox = $('.phoneBox header h4');// 语音的时间
    // $listenBtn.on('touchend',)
    $listenBtn.tap(function () {
        //点击 接听按钮  让 接听的盒子隐藏 ；让挂机盒子升上来
        $listenBox.hide();
        $timeBox.show();
        $noListenBox.css({
            transform: 'translateY(0)'
        });
        //给挂机按钮绑定点击事件
        $noListenBtn.on('touchend',function () {
            let h = document.documentElement.clientHeight || document.body.clientHeight;
            // 获取到的是个以 px 为单位的 数字
            $phoneBox.css({
                transform:`translateY(${h}px)`
            });
            //设置个定时器  等待0.8s后触发 下一个(第三个)模块的函数
            setTimeout(function () {
                msgFn();
            },1000)
        })
    })
};

/*
* 第三个块  msgFn
* */

let msgFn = function () {
    //让每一个 li 先都透明 并且下移
    // 循环这些 li  让这些 li  轮着 升上去，并且显示出来
    let $msgBox = $('.msgBox'),
        $ul = $msgBox.children('ul'),
        $lis = $ul.children('li'),
        $keyboard = $msgBox.find('.keyboard'),
        $textBox = $keyboard.find('.textBox'),
        $btn = $keyboard.find('.btn');

    let h = 0,
        n = 0; //存储当前要显示的那个元素li的索引；
    let moveTimer = setInterval(function () {
        if(n == $lis.length){ // 若 已经走完 ； 则直接清除定时器
            clearInterval(moveTimer);
            return;
        }
        $lis.eq(n).css({
            transform:'translateY(0)',
            opacity:1
        });
        // ul向上移动  根据索引； 索引大于 3；就让 ul向上移动
        if(n >= 3){
            h += $lis[n].clientHeight;
            $ul.css({
                transform:`translateY(-${h}px)`
            })
        }
        if(n == 2){
            $keyboard.css({
                transform: 'translateY(0)'
            });
            clearInterval(moveTimer);
        }
        n++;
    },2000);

    /*$lis.each(function (index,item) {
        setTimeout(function () {
            $(item).css({
                opacity:1,
                transform:'translateY(0)'
            });
            if(index >= 3){
                h += item.clientHeight;
                $ul.css({
                    transform:`translateY(-${h}px)`
                })
            };
            if(index == 2){
                $keyboard.css({
                    transform:'translateY(0)'
                })
            }
        },index*2000)
    })*/
};