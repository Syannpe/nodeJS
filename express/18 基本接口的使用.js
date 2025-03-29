const express = require('express');
const router = require("./18 路由对象");

const app = express();

// 导入路由模块
app.use("/api", router);

app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})