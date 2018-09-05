
let $oul = $('.ulBox'),
    $listBox=$('.listBox'),
    $tabs=$('.tab_box>ul li'),
    $tabBox=$('.tab_box'),
    $tabContents=$('.tab_content'),
    $nextabs=$('.next_tab li'),
    $nextBox=$('.tab_bg');
/*
*实现轮播图
* */
function bannerFn() {
    let mySwiper = new Swiper('.bannerBox',{
        autoplay:{
            disableOnInteraction:false,//用户划过之后 默认不动  改成false就会动
            delay:1000,//图片在当前窗口的等待时间  默认3s
        },//自动播放
        loop:true,//无缝滚动
        pagination: {
            el: '.pageBox',//分页器盒子
            type: 'fraction',//分页的样式 数字 1/2
            currentClass:'currentPage',//换变动数字的盒子的默认类名
            totalClass:'totalPage'//总共数字 盒子的类名
        },//分页器

    })
}


/*
* 获取数据
* */
// $.ajax({
//     type:'get',//请求方式
//     url:'data/banner.json',//请求路径
//     data:{t:123,q:456},//发送给后台的数据
//     //get 会把data拼到请求路径后面
//     //post 会把data直接放from data这个请求体中
//     success:function (data) {
//         //请求成功后执行的函数
//         giveHtml(data);//把数据放到页面上
//     },
//     error:function () {
//         //请求失败后执行的函数
//     }
// });
//把数据转成页面可见的元素
 function giveHtml(data) {
     data=data||[];
     let str='';//存储拼接好的结构字符串
     data.forEach((item)=>{
         str+=`<li class="swiper-slide">
                    <a href="##">
                        <img src="${item.img}" alt="">
                        <div>${item.title}</div>
                    </a>
                </li>`
     });
     $oul.html(str);
     // bannerFn();
 }
 //先请求数据  再把数据放到页面上  在执行轮播图函数

//promise 写法
let p = new Promise(function (resolve,reject) {
   $.ajax({
       type:'get',
       url:'data/banner.json',
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
     return data;
 },function () {
     //promise执行的失败函数
 }).then(function (data) {
     bannerFn()
 },function () {
     
 });
 /*
 *新闻列表
 *
 * */
 let listPro = new Promise(function (resolve,reject) {
     $.ajax({
         type:'get',
         url:'data/list.json',
         data:{t:1},
         success:function (data) {
            resolve(data)
         },
         error:function (res) {
             reject(res)
         }
     })
 });
 function giveListHtml(data) {
     data =data||[];
     let str='';
     data.forEach((item)=>{
         switch (item.type){
             case 0://无图
                str+=`<a href="##">
            <div class="text_box">
                <p>${item.title}</p>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>
            </div>
        </a>`;
                 break;
             case 1://一张图
                 str+=`<a href="##">
            <div class="img_box">
                <img src="${item.img}" alt="">
            </div>
            <div class="text_box">
                <p>${item.title}</p>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>
            </div>
        </a>`;
                 break;
             case 3://三张图
                 str+=`<a class="three_box" href="##">
            <p>${item.title}</p>
            <div class="three_pic">
                <div><img src="${item.img[0]}" alt=""></div>
                <div><img src="${item.img[1]}" alt=""></div>
                <div><img src="${item.img[2]}" alt=""></div>
            </div>
            <div class="comment_box">
                <em class="">
                    <span class="">${item.num}</span>
                    <span class="icon_com"></span>
                </em>
            </div>
        </a>`;
                 break;
         }
     });
     $listBox.html(str);
 }
 listPro.then(function (data) {
     giveListHtml(data);
 });

 /*
 * 三个tab 绑定点击事件
 * */
function changeTab() {
    $(this).addClass('current').siblings().removeClass('current');
    $tabContents.eq($(this).index()).show().siblings('.tab_content').hide();
}

 $tabs.on('touchend',function () {
     changeTab.call(this);
     $nextabs.eq($(this).index()).addClass('current').siblings().removeClass('current')
 });

$nextabs.on('touchend',function () {
     changeTab.call(this);
     $tabs.eq($(this).index()).addClass('current').siblings().removeClass('current')
 });

 window.onscroll=function () {
     let t=$tabBox.offset().top,
         wT=document.documentElement.scrollTop||document.body.scrollTop;
     if(t>=wT){
        $nextBox.hide();
     }else{
         $nextBox.show();
     }
 };
