const express = require('express')
const app = express()

// 定义中间件函数
const middlewareFn1 = (req, res, next) => {
    console.log('只属于/的中间件');
    next()
}


// 定义第二个中间件函数
const middlewareFn2 = (req, res, next) => {
    console.log('只属于/的第二个中间件');
    next()
}

app.get('/', middlewareFn1, middlewareFn2, (req, res) => {
    res.send('Home page')
})
app.post('/', [middlewareFn1, middlewareFn2], (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})