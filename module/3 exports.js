/*
* 在外界使用require方法导入一个自定义模块的时候，得到的成员
* 就是模块对象中exports所指向的对象
* */
const m = require("./3 exports-module.js");

console.log(m);