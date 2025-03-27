const qs = require("querystring");


const myBodyParser = (req, res, next) => {
//     通过监听data事件来获取客户端发送到服务器的数据，
//     如果数据量比较大无法一次性发送完成，则客户端会把数据切割后分批发送到服务器，
//     所以data事件可以被触发多次，每次获取到数据的一部分，需要手动拼接
    let str = "";
    // 监听data事件，获取到客户端发送到服务器的数据
    req.on('data', (chunk) => {
        str += chunk;
    });

    // 监听end事件，获取到客户端发送到服务器的数据
    req.on('end', () => {
        // 在监听end事件时，获取到客户端发送到服务器的数据
        console.log(str);
        // 将字符串格式的请求体数据，解析为对象格式
        req.body = qs.parse(str);
        next();
    });
};

module.exports = myBodyParser;