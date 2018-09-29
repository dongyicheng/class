let $oul = $('.ulBox'),
    $aside=$('.aside'),
    $close=$aside.find('.aside_close'),
    $table_head=$('.table_head_item'),
    $table_body=$('.table_item_body'),
    tarT=new Date('2018/9/13 10:59').getTime(),
    $hBox=$('.countdown_h>span')[0],
    $mBox=$('.countdown_m>span')[0],
    $sBox=$('.countdown_s>span')[0];

//删除广告
$close.on('click',function () {
    $aside.hide();
})

//banner 轮播图
let p = new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'json/data.json',
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            reject(res)
        }
    })
});
p.then(function (data) {
    //promise执行的成功函数
    giveHtml(data);
    bannerFn();
},function () {
    //promise执行的失败函数
});
function giveHtml(data) {
    data=data||[];
    let str='';//存储拼接好的结构字符串
    data.forEach((item)=>{
        str+=`<li class="swiper-slide">
                            <a href="##">
                                <img src="${item.img}" alt="">
                            </a>
                        </li>`
    });
    $oul.html(str);
}
function bannerFn() {
    let mySwiper = new Swiper('.bannerBox',{
        autoplay:{
            disableOnInteraction:false,//用户划过之后 默认不动  改成false就会动
            delay:3000,//图片在当前窗口的等待时间  默认3s
        },//自动播放
        loop:true,//无缝滚动
        allowTouchMove:false,
        disableOnInteraction:false,
        pagination: {
            el: '.pageBox',//分页器盒子
            clickable:true,
            currentClass:'currentPage',//换变动数字的盒子的默认类名
            totalClass:'totalPage'//总共数字 盒子的类名

        },//分页器
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}

//table_banner 选项卡
$table_head.on('click',function () {
    let n=$(this).index();
    $table_body.eq(n).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
});

//倒计时
function timeCount(TatT,hBox,mBox,sBox) {
    let now=new Date(),
        nowT=now.getTime();

    let time=tarT-nowT;
    if(time<=0){
        window.clearInterval(timer);
        hBox.innerHTML='结';
        mBox.innerHTML='束';
        sBox.innerHTML='了';
        return;
    }

    let h=Math.floor(time/3600000);
    time-=3600000*h;

    let m=Math.floor(time/60000);
    time-=60000*m;

    let s=Math.floor(time/1000);

    hBox.innerHTML=`${h<10?'0'+h:h}`;
    mBox.innerHTML=`${m<10?'0'+m:m}`;
    sBox.innerHTML=`${s<10?'0'+s:s}`;
}

let timer=window.setInterval(function () {
    timeCount(tarT,$hBox,$mBox,$sBox);
},1000);