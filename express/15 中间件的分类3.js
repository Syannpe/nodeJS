/*
* 第三方中间件：
* 非Express官方内置，而是由第三方开发出来的中间件，需自行下载，例如比较常用的body-parser
* */



const express = require('express');
const app = express();

// 导入解析表单数据的中间件body-parser
// Express内置的express.urlencoded中间件就是基于body-parser这个第三方中间件进一步封装出来的
app.use(require('body-parser').urlencoded({extended: false}));
// 使用app.use()来注册中间件

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok');
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})