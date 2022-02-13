import { createRequire } from "module"

const require = createRequire(import.meta.url)

const fs = require('fs')
const exec = require('child_process').exec;

// const name = process.argv[2] || 'Demo'

var html = `<link rel="stylesheet" href="app.css">
<script src="app.js"></script>
`


const makeProject = (name) => {
    fs.mkdir(`D:/Miscellaneous/${name}`, { recursive: true }, (err) => {
        if (err) throw err;
        fs.writeFileSync(`D:/Miscellaneous/${name}/index.html`, html, (err) => {
            if (err) throw err;
        })
        fs.writeFileSync(`D:/Miscellaneous/${name}/app.js`, '', (err) => {
            if (err) throw err;
        })
        fs.writeFileSync(`D:/Miscellaneous/${name}/app.css`, '', (err) => {
            if (err) throw err;
        })
    });
    exec(`code D:/Miscellaneous/${name}`, (e, stdout, stderr) => {
        if (e instanceof Error) {
            console.error(e);
            throw e;
        }
    });
    console.log("Folder made! Hav fun!")
}

export default makeProject


