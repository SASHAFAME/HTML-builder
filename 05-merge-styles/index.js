const fs = require('fs');
const path = require('path');

const arr = new Array;

fs.readdir(
    path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
        files.forEach((item) => {
            if(path.extname(item.name) == '.css' && item.isFile()) {
                fs.readFile(
                    path.join(`${__dirname}/styles`, item.name),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        data = data.toString();
                        arr.push(data);

                        fs.writeFile(
                            path.join(`${__dirname}/project-dist`, 'bundle.css'),
                            arr.join('\n'),
                            (err) => {
                                if(err) throw err;
                            }
                        )
                    }
                )
            }
        })

    }
)