const express = require("express");

//调用
const app = express();

// 注意，这里的:id是一个动态参数，其中，:是一个具体的写法，但是id随意，你写的东西会变为params对象的键值
app.get('/user/:id/:name', function (req, res) {
    // 动态匹配到的URL参数，默认是一个空对象
    console.log(req.params);
    res.send(req.params);
});

app.listen(80, function () {
    console.log("server running at http://127.0.0.1:80/")
})
