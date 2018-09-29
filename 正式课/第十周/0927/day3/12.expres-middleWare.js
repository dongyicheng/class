let express = require('express');
let app = express();

// 在项目中，如果需要中间件，那么一般会放到所有的路由的最上面；
app.use(function (req,res,next) {
    // req: 请求信息
    // res : 响应信息
    // next : 下一步；
    console.log(1);
    req.eat= function () {
        console.log("eat dinner")
    };
    // 用于对请求的拦截；对响应或者请求的处理；
    // 只要执行了此处函数，一定要执行next,继续向下执行；
    next();
});
app.use(function (req,res,next) {
    // req: 请求信息
    // res : 响应信息
    // next : 下一步；
    console.log(100);
    // 用于对请求的拦截；对响应或者请求的处理；
    // 只要执行了此处函数，一定要执行next,继续向下执行；
    next();
});
app.get("/login",function (req,res) {
    console.log(2);
    req.eat();
    res.send("登录");
});

app.listen(8080)
