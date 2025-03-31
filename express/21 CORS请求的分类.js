/*
* 一般有两大类：简单请求，预检请求
* 简单请求必须满足两种要求：
* 请求方式：GET、POST、HEAD
* 请求头：Accept、Accept-Language、Content-Language、Content-Type、Last-Event-ID、DNT、X-Requested-With、X-Forwarded-For、X-Forwarded-Host、X-Forwarded-Proto、Front-End-Https、X-Http-Method-Override、Upgrade-Insecure-Requests、X-Att-Deviceid、X-Wap
*
* 预检请求：
* 请求方式：GET、POST、HEAD以外
* 请求头中包含自定义头部字段
* 向服务器发送了application/json格式的数据
* 在浏览器与服务器正是通信之前，浏览器会先发送OPTION请求进行预检
* 以获得服务器是否允许该师级请求，所以这一次的OPTION请求称为预检请求
* 成功之后，浏览器会发送真正的请求，这次的请求称为简单请求
*
*
* 简单请求和预检请求的区别：
* 简单请求的特点：客户端与服务器之间只发生一次请求
* 预检请求的特点：客户端与服务器之间会发生两次请求，OPTION成功之后，才会发送真正的请求
* */

const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.get("/get", (req, res) => {
    console.log("get接收到请求")
    const query = req.query;

    res.send({
        status: 0,  // 0 表示成功, 1 表示失败
        msg: "get请求成功",    // 状态的描述
        data: query // 需要响应给客户端的数据
    })
});

router.post("/post", (req, res) => {
    console.log("post接收到请求")

    const body = req.body;

    res.send({
        status: 0,  // 0 表示成功, 1 表示失败
        msg: "post请求成功",    // 状态的描述
        data: body // 需要响应给客户端的数据
    })
});

router.delete("/delete", (req, res) => {
    console.log("delete接收到请求")

    res.send({
        status: 0,  // 0 表示成功, 1 表示失败
        msg: "delete请求成功",    // 状态的描述
    })
});

const app = express();

// 一定要在路由之前配置 cors 中间件
// 注意：这里的cors一定要用()调用，否则会产生死循环
const cors = require('cors');
app.use(cors());

// 导入路由模块
app.use("/api", router);

app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})