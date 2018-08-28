    var a = {
        x:1
    };
    var b = a;
    b.c = a = {y:1};//点的优先级  高于  等号的优先级
    console.log(a, b);//{y:1} {x:1,c:{y:1}}
    console.log(b.c);//{ y: 1 }
    //----------------------------

    var n=13;
    function fn(n){
       alert(n);//13
       var n=14;
       alert(n);//14
    }
    fn(n);
//----------------------------
    var n = 13;
    function fn(){
         n = 15;
         alert(n);//15
    }
    fn();
    alert(n);//15
//----------------------------
    var n = 10;
    function outer(){
        function inner(){
            function center(){
                alert(n);//undefined
            }
            center();
        }
        inner();
        var n=15;
    }
    outer()
//-----------------------------
    var n=0;
    function a(){
        var n=10;
        function b(){
            n++;
            alert(n);//11
        }
        b();
    }
    a();
    alert(n);//0
//--------------------------
    console.log(num,str);//undefined*2
    var num = 18;
    var str = "lily";
    function fn2(){
        console.log(str,num);//报错  undefined
        num = 19;
        str = "candy";
        var num = 14;
        console.log(str,num);//"candy" 14
    }
    fn2();
    console.log(str,num);//"candy" 19
//----------------------------------------------------
    alert(a);//undefined
    console.log("a" in window);//"a" in window
    if(!("a" in window)){
        var a = 10;
    }
    alert(a);//undefined

    console.log(fn);//fn的函数体
    if(9==8){
        function fn(){
            alert(2);
        }
    }


