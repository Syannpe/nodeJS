const path = require('path');

// path.basename(path[,ext])
// path一个路径字符串
// 文件扩展名

const fpath = "/a/b/c/index.html"

let fullName = path.basename(fpath)
console.log(fullName)

let name = path.basename(fpath, ".html")
console.log(name)

console.log(path.extname(fpath))