// 注意：exports是module.exports的引用，是一个语法糖
console.log(exports === module.exports)

exports.age = 18
exports.name = "张三"
exports.sayHello = function () {
    console.log("hi")
};