const express = require('express');

const app = express();

/*
* 利用中间件获取到请求到达服务器的时间
* */

app.use((req, res, next) => {
    const date = new Date();
    req.requestTime = date.toLocaleString();
    next();
})

app.get('/', (req, res) => {
    console.log('调用了/路由');
    res.send('Home page' + req.requestTime);
});
app.get('/user', (req, res) => {
    res.send('User page' + req.requestTime);
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})