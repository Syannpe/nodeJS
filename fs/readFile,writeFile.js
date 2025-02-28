const fs = require('fs/readFile,writeFile');


// fs.readFile(path[,options],callback)
fs.readFile('./index.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// fs.writeFile(file, data[,options],callback)
fs.writeFile("test.txt", "Hello World!", (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

