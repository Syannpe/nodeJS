const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './clock.html'), 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const css = regStyle.exec(data)[0]
    const js = regScript.exec(data)[0]
    const html = data.replace(regStyle, '<link href="index.css" rel="stylesheet" />').replace(regScript, '<script src="index.js"></script>')
    fs.writeFile(path.join(__dirname, './index.css'), css.replace('<style>', '').replace('</style>', ''), 'utf-8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('css文件写入成功');
    })
    fs.writeFile(path.join(__dirname, './index.js'), js.replace('<script>', '').replace('</script>', ''), 'utf-8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('js文件写入成功');
    })
    fs.writeFile(path.join(__dirname, './index.html'), html, 'utf-8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('html文件写入成功');
    })

})