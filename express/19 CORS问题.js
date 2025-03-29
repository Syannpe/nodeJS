const express = require('express');
const router = require("./18 路由对象");

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