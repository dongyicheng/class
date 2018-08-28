function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
Fn.prototype.sum();





function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName();//2  //函数是个对象
getName();//4
Foo().getName();//1
getName();//1
var a=new Foo.getName();//2
//a 是把Foo当做对象时, 调取到他身上的getName ; 把这个getName当做构造函数执行, 返回的实例赋给a
var b=new Foo().getName();//3  new Foo()  返回的Foo的实例  3
//先执行 new Foo; 返回Foo的一个实例 , 再通过 实例.getName去找getName这个属性, 然后执行
var c= new new Foo().getName();//3
//先执行new Foo;返回Foo的一个实例, 再通过 实例.getName去找getName这个属性, 然后当做构造函数执行
// new Foo()返回的  Foo的实例
//new Foo实例.getName()
//c 是 getname的实例
console.log(c.getName);//undefined
console.log(a, b, c);//Foo.getName{} undefined Foo.getName{}


function Fn(){
    var a =1;
    this.a = a
}
Fn.prototype.say = function(){
    this.a = 2
};
Fn.prototype = new Fn;
var f1 = new Fn;

f1.__proto__.b = function (){
    this.a = 3
};
console.log(f1.a);//1
console.log(f1.prototype);//undefined
console.log(f1.b);//function(){this.a =3}
console.log(f1.hasOwnProperty('b'));//false
console.log('b' in f1);//true
console.log(f1.constructor == Fn);//true
console.log(Fn.prototype);//Fn {a: 1, b: ƒ}


function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function () {
    console.log(this.name)
};
Person.prototype.name = '珠峰培训';
var per1 = new Person('小明',18);
per1.__proto__.getName = function () {
    console.log(12);
}
per1.getName();//12
var per2 = new Person('小红',20);
per2.getName()//12
Person.prototype = {
    name:'珠峰',
    getName: function () {
        console.log('www.zhufengpeixun.com')
    }
}
var per3 = new Person();
per3.getName();//'www.zhufengpeixun.com'
per2.getName();//12
per1.getName();//12





var name = '中国',age = 5000;
function Person() {
    getName = function () {
        console.log(this.name)
    };
    this.name = 'zfpx';
    this.age = 9;

}
Person.name = '珠峰';
Person.getName = function () {
    console.log(this.age);
};
Person.prototype.getName = function () {
    console.log(this.name);
};
var obj = {name:'培训',f:Person};
var per = new Person();
per.getName = function(){
    console.log(12)
};
var per2 = new Person();
obj.f();//
Person();//
per.getName();//12
per2.getName();//‘zfpx’
getName();//zfpx
Person.getName();//Person  改不了
/*体现了函数的三种角色
*1.作为普通函数
*2.构造函数
*3.普通对象
* */


function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);}; // 当作对象
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}

Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
var a = new Foo.getName();//2
var b = new Foo().getName();//3
var c = new new Foo().getName();//3


var F=function () {};
Object.prototype.a=function(){
    console.log('a()');
};
Function.prototype.b=function () {
    console.log('b()');
};
var f=new F;

f.a();//a()
f.b();//报错
F.a();//a()
F.b();//b()




