//1、
var str= "我是MT";
test();
function test() {
    console.log(str);//undefined
    var str= "哈哈哈";
    console.log(str);//"哈哈哈"
}
console.log(str);//"我是MT"

//2、
console.log(a);//undefined
a=12;
function fn(a){
    console.log(a);//undefined
    a=13
}
fn();
var a;
console.log(a);//12

//3、
function test(){
    if("a" in window){
        var a = 10;
    }
    console.log(a);//undefined
}
test();

//4、
var a = 1;
function fn() {
    console.log(a);//undefined
    var a = 5;
    console.log(a);//5
    a++;
    var a ;
    fn3();
    fn2();
    console.log(a);//20
    function fn2() {
        console.log(a);//6
        a = 20;
    }
}
function fn3() {
    console.log(a);//1
    a = 200;
};
fn();
console.log(a);//200


//5、
var n = 10;
function outer(){
    var n = 15;
    function inner(n){
        console.log(n);//15
        function center(){
            console.log(n);//15
        }
        center();
    }
    inner(n);
}
outer()

//6、
var n = 10;
function outer(){
    n = 15;
    function inner(){
        ++n;
        console.log(n);//16
        function center(){
            n+=2;
            console.log(n);//18
        }
        center();
    }
    inner();
};
outer();
console.log(n)//15