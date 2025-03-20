const express = require("express");

//调用
const app = express();

// 监听get和post请求，并向客户端响应具体的内容
app.get('/user',function (req,res){
    // res.send('hello express');
    // res.send({name:'zhangsan',age:18});
    // res.send('<h1 style="color:red">hello express</h1>');
    res.send({name:'zhangsan',age:18});
})

// 监听post请求
app.post('/user',function (req,res){
    res.send('请求成功');
})

app.listen(80,function (){
    console.log("server running at http://127.0.0.1:80/")
})
