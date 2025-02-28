// 相对路径是基于代码运行路径进行拼接的，例如在fs文件夹下执行node指令就是fs/xxx
// 为了解决这个问题一个是用绝对路径，一个是用__dirname，这个属性是当前文件所处的路径，无论node指令在哪个目录下运行均不变

console.log(__dirname);

const fs = require("fs")

fs.readFile(__dirname + "/test.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})