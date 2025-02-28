const path = require("path/join()");

// path.join([..paths])
// ../ 会抵消一层目录
console.log(path.join("a", "b", "c","../","./d",'e'));

const fs = require("fs");

fs.readFile(path.join(__dirname, "index.js"),"utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})