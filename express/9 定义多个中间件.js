const express = require('express')
const app = express()

// 定义第一个全局中间件
app.use((req, res, next) => {
    console.log('第一个全局中间件');
    next()
})

// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('第二个全局中间件');
    next()
})

// 定义第一个路由
app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/user', (req, res) => {
    res.send('User page')
})
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})