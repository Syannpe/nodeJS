const express = require('express');

const app = express();
const router = express.Router();

// 定义路由
router.get('/', (req, res) => {
    res.send('hello router');
})

router.post('/', (req, res) => {
    res.send('hello router post');
})

//使用router挂载路由
// 第一个参数是挂载路径，也就是前缀
app.use('/router', router);

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})