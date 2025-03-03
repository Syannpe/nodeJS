const http = require("http/1 基础服务器");

const server = http.createServer();

//req 是请求对象，包含了与客户端相关的数据和属性
server.on("request", (req, res) => {
    // req.url 是客户端请求的URL地址
    const url = req.url;
    // req.method 是客户端请求的method 类型;
    const method = req.method;
    const str = "ur request url is " + url + " and method is " + method;
    console.log(str);

    //更改字符集，防止中文乱码
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // res 是响应对象，包含了与服务器相关的数据和属性
    res.end(str);
});

server.listen(80, () => {
    console.log("server running at http://localhost:80/");
});