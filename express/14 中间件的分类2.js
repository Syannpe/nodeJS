
/*
* Express内置的中间件
* Express4.16 版本后，express提供了一些内置的中间件：
* express.static()：快速对外提供静态资源的，无兼容性
* express.json()：解析json格式的请求体数据，仅在4.16后可用
* express.urlencoded()：解析urlencoded格式的请求体数据，仅在4.16后可用
*
*
* */

const express = require('express');
const app = express();

// 通过express.json() 解析表单中的json格式数据
app.use(express.json())
app.post('/user', (req, res) => {
    // 在服务器可以使用req.body属性来接受客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    res.send('ok');
});

// 通过express.urlencoded() 解析表单中的urlencoded格式数据
app.use(express.urlencoded({extended: false}));
app.post('/book', (req, res) => {
    // 在服务器可以使用req.body属性来接受客户端发送过来的请求体数据
    console.log(req.body)
    res.send('ok');
});


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
