var name = "zhufengpeixun.com";
var person = {
    name: "zhufeng",
    pro: {
        name: "peixun",
        getName: function() {
            return this.name;
        },
        getName2: function () {
            return function () {
                return this.name
            }
        }
    }
};
console.log(person.pro.getName());//'peixun'
var pepole = person.pro.getName;
console.log(person.pro.getName2()());//'"zhufengpeixun.com"'
console.log(pepole());//"zhufengpeixun.com"



//2
var num = 2;
var obj = {
    num: 2,
    fn: (function (num) {
        num *= 2;
        this.num +=1;
        return function () {
            this.num *=3;
            ++num;
            console.log(num);//5 6
        }
    })(num)
};
var fn = obj.fn;
fn();
obj.fn();
console.log(num, obj.num);//9 6


//3、
function a(xx){
    this.x=xx;
    return this
};
var x=a(5);
console.log(x.x);//window
var y=a(6);
// console.log(x);//6
console.log(x.x);//undefined
console.log(y.x);//6

//4
var number = 4;
var obj = {
    'number': 4,
    'tbl': (function(num){
        this.number *= 2;
        num+=2;
        console.log(this.number);//8
        return function(){
            this.number *= 2;
            num++;
            console.log(num,this.num)//7 undefined  8 undefined
        }
    })(number)
};
var tbl = obj.tbl;
tbl();
obj.tbl();

var a=2;
var obj={a:8,fn:(function (a) {
        console.log(a);//2
    })(a)
}

