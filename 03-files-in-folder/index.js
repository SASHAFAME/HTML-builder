const fsPromises = require('fs/promises');
const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'secret-folder');

let fileSize = 0;
fs.readdir(dirPath, {withFileTypes: true}, (err,files) => {
    files.forEach((item) => {
        if(item.isFile()) {

            const ext = path.extname(item.name);
            fs.stat(`${dirPath}/${item.name}`, (err, stats) => {
                fileSize = stats.size/1000;
                console.log(`${item.name.replace(/\.[^.]+$/, "")} - ${ext.slice(1)} - ${fileSize}kb`);
            })

        }
    })
})