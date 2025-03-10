// 在nodejs中，module是一个对象，它包含当前模块的信息
// 可以用这个对象中的exports属性来导出数据
// 默认情况下是一个空对象
console.log(module);


// 向module.exports对象上挂在username属性
module.exports.name = "aa";
// 向module.exports对象上挂在sayHello方法
module.exports.sayHello = function (){
    console.log("hi");
};

//注意，module.exports就是一个全局对象，他是可被覆盖的
module.exports = {
    name: "张三",
    age: 18,
    sayHello: function () {
        console.log("hello");
    },
};

