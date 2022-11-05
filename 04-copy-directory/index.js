const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname, 'files')

console.log(dirPath)

// Create folder
fs.mkdir(
    path.join(__dirname, 'files-copy'),{ recursive: true }, () => {
        (err) => {
            if(err) throw err;
            console.log('Folder create')
        }
    }
)

fs.readdir(
    dirPath, { withFileTypes: true }, (err, files) => {
        files.forEach((item) => {
                fs.readFile(
                    path.join(`${__dirname}/files`, item.name),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        data = data.toString()

                        fs.writeFile(
                            path.join(`${__dirname}/files-copy`, item.name),
                            data,
                            (err) => {
                                if(err) throw err;
                            });
                    }
                );
        })
    }
)