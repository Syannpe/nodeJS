const fs = require('fs/readFile,writeFile');

fs.readFile("score.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    data = data.replaceAll(" ", "\n").replaceAll("=",": ");

    fs.writeFile("score-res.txt", data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
})