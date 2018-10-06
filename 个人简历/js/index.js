let loading = function () {
    /*进度条加载完成后  要让loading的这个块消失*/
    let $progressBar = $('.progress .progressBar'),
        $loadingBox = $('.loadingBox');
    //进度条进度  是由  项目中所有图片的加载完成  来决定的
    let ary = ['index_bg1.webp', 'index_bg2.webp', 'index_bottom.webp', 'index_title.webp', 'index_title1.webp', 'index_type.webp', 'name_x.webp', 'up.png', 'title_r.webp', 'title_l.webp', 'introduce.webp', 'worked.webp', 'phone.webp', 'code.png', 'music.png'];
    let n = 0; //记录 加载完成的图片个数
    ary.forEach((item) => {
        let img = new Image();
        //让临时的 img 去请求图片
        img.src = `img/` + item;
        img.onload = load;
    })

    function load() {
        n++;
        if (n == ary.length) {
            //所有图片加载完毕
            $progressBar.css({
                width: '100%'
            });
            $loadingBox.css({
                opacity: 0
            });
            let timer2 = setTimeout(function () {
                $loadingBox.hide();
                //第一个隐藏  执行第二个块相关的内容
                indexBox();
            }, 1800);
        } else {
            //没加载完
            $progressBar.css({
                width: n / ary.length * 100 + '%'
            })
        }
    }
};
loading();
let indexBox = function () {
    let $index_con = $('.index_con');
    $index_con.show();
}
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
})
var x = document.getElementById("media");
$(function () {

    $("#audio_btn").click(function () {
        $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停

        //控制背景音乐 播放或暂停            
        if ($(this).hasClass("rotate")) {
            x.play();
        } else {
            x.pause();
        }
    })
});



// function request (url) {
//     return new Promise (resolve => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         // 这里需要设置xhr response的格式为arraybuffer
//         // 否则默认是二进制的文本格式
//         xhr.responseType = 'arraybuffer';
//         xhr.onreadystatechange = function () {
//             // 请求完成，并且成功
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 resolve(xhr.response);
//             }
//         };
//         xhr.send();
//     });
// }

// function play (context, decodeBuffer) {
//     // 调用resume恢复播放
//     context.resume();
//     let source = context.createBufferSource();
//     source.buffer = decodeBuffer;
//     source.connect(context.destination);
//     source.start(0);
// }

// function playAudio (context, url) {
//     let audioMedia = await request(url);
//     context.decodeAudioData(audioMedia, decode => play(context, decode));
// }

// let context = new (window.AudioContext || window.webkitAudioContext)();
// // 如果能够自动播放
// if (audioInfo.autoplay) {
//     playAudio(url);
// }
// playAudio('../audio/bg_music.mp3');
// // setTimeout(() => playAudio(context, 'question-2.mp3'), 3000);
// // setTimeout(() => playAudio(context, 'question-3.mp3'), 3000);