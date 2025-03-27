/*
* 应用级别的中间件
* 通过app.use()或app.get()等绑定到app上的中间件叫做应用级别的中间件
*
* 路由级别的中间件
* 绑定到express.Router()实例上的中间件叫做路由级别的中间件
*
* 错误级别的中间件
* 专门用来捕获整个项目中发生的异常错误，从而防止项目崩溃的
* 错误级别中间件的function处理函数中必须由四个形参，分别是error,req,res,next
* 错误级别中间件示例如下：
* */


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('服务器挂了');
    res.send('home page');
});

// 定义错误级别中间件，必须定义在所有路由之后
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send('Error:' + err.message);
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})

