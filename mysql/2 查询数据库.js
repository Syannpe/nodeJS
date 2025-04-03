// 1. 导入mysql模块
const mysql = require('mysql');

// 2. 建立与Mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '96433469m41',
    database: 'my_db_01'
});

// 3.测试模块是否可以正常工作
db.query('select * from users', (err, results) => {
    // 如果有错误，则打印错误
    if(err) return console.log(err.message);
    // 能够正常执行的话，则打印结果
    console.log(results);
})