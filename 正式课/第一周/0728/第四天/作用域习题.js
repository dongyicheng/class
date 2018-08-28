var a = {
    x:1
};
a.c = a = {y:1};
//-------------------


console.log(a,b,c);
var a=10,b=20,c=30;
function f(a){
    console.log(a,b,c);
    var b = a = c = 100;
    console.log(a,b,c)
}
f(10,20);
console.log(a,b,c);



//----------------------------
a();
var a = c = function() {
    console.log(2)
};
a();
function a() {
    console.log(1)
};
a();

//----------------------------
console.log(a);
var a=12;
function fn(){
    console.log(a);
    var a=13;
}
fn();

//----------------
var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    console.log(foo);
}
bar();

//----------------------------

//----------------------------
function a() {
    console.log(1)
};
function c() {
    console.log(2)
}
(function(b) {
    b(), c();
    var b = c = function a() {
        console.log(3)
    };
    function b(){
        console.log(4)
    }
    b();
})(a);
c();

//----------------------------------------------------
alert(a);//undefined
console.log("a" in window);//true
if(!("a" in window)){
    var a = 10;
    function fn() {
        console.log(3)
    }
}
console.log(a);//undefined
console.log(fn);//undefined
if(9==8){
    function fn(){
        console.log(2);
    }
}

//===============================
var n=5;
function a(n){
    n++;
    n=10;
    b();
    function b(){
        n++;
        alert(n);//11
    };
}
a();
alert(n);//5

//
var a=3;
function c(a){
    alert(a);//4
}
(function(){
    var a=4;
    c(a);
})();


//
var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n)//21 22 23
    };
    f();
    return f
}
var f = fn();
f();
f();
console.log(n);//10

//======================
var i = 1;
function fn(i) {
    return function (n) {
        console.log(n+(++i))
    }
}
var f = fn(2);
f(3);//6
fn(5)(6)//12
fn(3)(2)//6
f(4);//8

//
let i = 1;
let fn = function (n) {
    i *= 2;
    return function (m) {
        i += n + m;
        console.log(i);
    }
};
let f = fn(2);
f(3);//7
fn(2)(3);//19
f(4);//25
f(5);//32


