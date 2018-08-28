// var data=null;
// var xhr=new XMLHttpRequest();
// xhr.open('get','json/data.json',false);
// xhr.onreadystatechange=function () {
//     if (xhr.readyState==4&&xhr.status==200){
//         data=JSON.parse(xhr.responseText)
//     }
// };
// xhr.send();
//
//
//
// let oUl=document.getElementsByClassName('ul_box')[0];
// function giveHtml(data) {
//     let str='';
//     for (let i = 0; i < data.length; i++) {
//         str+=` <li price="${data[i].price}" hot="${data[i].hot}" time="${data[i].time.toString().replace(/-/g,'')}">
//             <div class="img_box"><img src="${data[i].picImg}"></div>
//             <div>${data[i].title}</div>
//             <div>价格：<span>￥${data[i].price}.00</span></div>
//             <div>评价数：<span>${data[i].hot}</span></div>
//             <div>上架时间：<span>${data[i].time}</span></div>
//         </li>`
//     }
//     oUl.innerHTML=str;
// }
// giveHtml(data);
//
//
// //方法一
// // var btns=document.getElementsByClassName('btn');
// // var ary=['price','hot','time'];
// //
// // for (let i = 0; i < btns.length; i++) {
// //     var flag=0;
// //     btns[i].onclick=function () {
// //         if(flag==0) {
// //             data.sort((a, b) => {
// //                 return a[ary[i]].toString().replace(/-/g, '') - b[ary[i]].toString().replace(/-/g, '')
// //             });
// //             flag=1;
// //         }else{
// //             data.sort((a, b) => {
// //                 return b[ary[i]].toString().replace(/-/g, '') - a[ary[i]].toString().replace(/-/g, '')
// //             });
// //            flag=0;
// //         }
// //         giveHtml(data);
// //     }
// // }
//
// //方法二
// var oLis=oUl.getElementsByTagName('li');
// var btns=document.getElementsByClassName('btn')
// var liAry=utils.toAry(oLis);
// var ary=['price','hot','time'];
// var flag=0
//
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick=function () {
//         if (flag == 0) {
//             liAry.sort((a, b) => {
//                 return a.getAttribute(ary[i]) - b.getAttribute(ary[i]);
//             })
//             flag = 1;
//         } else {
//             liAry.sort((a, b) => {
//                return b.getAttribute(ary[i]) - a.getAttribute(ary[i]);
//             })
//             flag=0
//         }
//          liAry.forEach((item)=>{
//              oUl.appendChild(item)
//          })
//     }
// }

var data=null;
var xhr=new XMLHttpRequest();
xhr.open('get','json/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        data=JSON.parse(xhr.responseText)
    }
}
xhr.send();

var oUl=document.getElementsByClassName('ul_box')[0];
function giveHtml(data) {
    var str='';
    for (let i = 0; i < data.length; i++) {
        str+=` <li price="${data[i].price}" hot="${data[i].hot}"time="${data[i].time.toString().replace(/-/g,'')}">
            <div class="img_box"><img src="${data[i].picImg}" alt=""></div>
            <div>${data[i].title}</div>
            <div>价格：<span>￥${data[i].price}.00</span></div>
            <div>评价数：<span>${data[i].hot}</span></div>
            <div>上架时间：<span>${data[i].time}</span></div>
        </li>`
    }
    oUl.innerHTML=str;
}
giveHtml(data);


//第一种
// var btns=document.getElementsByClassName('btn');
// var flag=0,
//     ary=['price','hot','time'];
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick=function () {
//         if(flag==0){
//             data.sort((a,b)=>{
//                 return a[ary[i]].toString().replace(/-/g,'')-b[ary[i]].toString().replace(/-/g,'')
//             })
//             flag=1
//         }else{
//             data.sort((a,b)=>{
//                 return b[ary[i]].toString().replace(/-/g,'')-a[ary[i]].toString().replace(/-/g,'')
//             })
//             flag=0
//         }
//         giveHtml(data);
//     }
// }

//第二种
var oLis=oUl.getElementsByTagName('li');
var aryLis=utils.toAry(oLis);
var btns=document.getElementsByClassName('btn');
var flag=0,
  ary=['price','hot','time'];
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        if (flag == 0) {
            aryLis.sort((a, b) => {
                return a.getAttribute(ary[i]) - b.getAttribute(ary[i])
            })
            flag = 1
        } else {
            aryLis.sort((a, b) => {
                return b.getAttribute(ary[i]) - a.getAttribute(ary[i])
            })
            flag = 0
        }
        aryLis.forEach((item) => {
            oUl.appendChild(item);
        })
    }
}