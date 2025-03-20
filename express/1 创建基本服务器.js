const express = require("express");

//调用
const app = express();

app.listen(80,function (){
    console.log("server running at http://127.0.0.1:80/")
})
