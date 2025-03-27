// 初始化express服务器
const express = require('express');
const myBodyParser = require('./16 自定义解析表单数据的中间件');

const app = express();
app.use(myBodyParser)

app.post('/user', (req, res) => {
    // 获取客户端发送到服务器的请求体数据
    console.log(req.body);
    res.send('ok');
})
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})