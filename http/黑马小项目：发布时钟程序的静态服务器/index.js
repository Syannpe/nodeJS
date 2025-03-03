/**
 * 1.1 导入http模块
 * 1.2 导入fs模块
 * 1.3 导入path模块
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on("request", (request, response) => {
    /*
    * 3.1 获取到客户端请求的URL
    * 3.2 把请求的URL映射为具体文件的存放路径
    * */
    const url = request.url;

    console.log('你访问了' + url);
    // __dirname代表当前文件所处的目录
    // url的格式如下：/clock/index.html
    const fpath = path.join(__dirname, url);

    // 4.1 根据映射过来的文件路径来读取文件内容
    fs.readFile(fpath, "utf8", (err, data) => {
        if (err) {
            response.end("<h1>404 NOT FOUND</h1>");
            return;
        }
        response.end(data);
    })
});

server.listen(80, () => {
    console.log(`Server started on port ${server.address().port}`);
})