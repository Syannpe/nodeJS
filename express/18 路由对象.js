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

module.exports = router;