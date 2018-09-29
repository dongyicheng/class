
// import obj from './a.js'; // 这种引用方式 需要导出的文件加一个 default
// console.log(obj); // 输出结果是 {obj: {…}}

import {obj} from './a.js';
// import {obj,str} from './a.js';
//大括号中的名字必须跟 导出的名字保持一致

import * as qqq from './a.js';
console.log(qqq);
