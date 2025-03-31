/*
* 使用<script>标签中的src属性发起的请求就是JSONP
*
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


const app = express();

app.use(express.urlencoded({extended: false}));
// 必须在配置cors中间件之前配置JSONP的接口
app.get("/api/jsonp", (req, res) => {
    console.log("jsonp接收到请求")

    // 定义JSONP接口具体的实现过程
    // 获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback;
    // 得到要通过JSONP形式发送给客户端的数据
    const data = {
        name: "why",
        age: 18
    }
    // 根据前两部得到的数据拼接处一个函数调用字符串，之后进行发送
    res.send(`${funcName}(${JSON.stringify(data)})`);
})

// 一定要在路由之前配置 cors 中间件
// 注意：这里的cors一定要用()调用，否则会产生死循环
const cors = require('cors');
app.use(cors());

// 导入路由模块
app.use("/api", router);

app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})