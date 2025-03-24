const express = require('express');

const app = express();

/*
* 注意：这里next调用后即可将流转关系 传给下一个中间件
* */
const middleware1 = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    next();
}

// 注册为全局生效的中间件
app.use(middleware1)

app.get('/', (req, res) => {
    console.log('调用了/路由');
    res.send('Home page');
});
app.get('/user', (req, res) => {
    res.send('User page');
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})