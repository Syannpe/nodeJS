const express = require("express");

const app = express();

// 在这里 ，调用express.static()方法，快速对外提供静态资源
app.use(express.static("./clock"));
/*
* 注意：
* 这里static()方法中的参数是指发布路径，但是发布的时候不包括此路径
* 这里的app.use(express.static());方法可以书写多次，用来发布多个静态目录
* 如果发布多个静态目录并且目录中有同名文件，则按照先后顺序进行覆盖
* */
// 这里的第一个参数是路径前缀，如果访问路径是/public/index.html，则直接访问./public/index.html
app.use("/public", express.static("./public"));

app.listen(80, function (){
    console.log("express server running at http://127.0.0.1")
})