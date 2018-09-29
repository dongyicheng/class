//需要有一个 遵循 commonJS规范 的导出文件
let path = require('path'); // node 中 用来处理文件路径的模块
console.log(path.resolve('./dist'));
module.exports = {
    mode:"development",
    entry:'./src/index.js', // 打包的入口文件
    output:{
        filename:'index.js', //打包后的文件名字
        path:path.resolve('./dist') // 打包后的文件输出路径，在这里必须是一个 绝对路径; 若没有这个文件夹时。会默认创建一个该文件夹
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
            // 符合 .js 结尾的文件  ，使用Babel-loader转义； 其中 node_modules 中的 文件不进行转义
        ]
    }
};