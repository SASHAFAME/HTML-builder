const fs = require('fs');
const path = require('path');

// Create folder

fs.mkdir(
    path.join(__dirname, 'project-dist'), { recursive: true }, () => {
        (err) => {
            if(err) throw err;
            console.log('Folder create');
        }
    }
);

// index.html concatenate

let articles;
let footer;
let header;

fs.readFile(
    path.join(`${__dirname}/components`, 'articles.html'),
    (err, data) => {
        if(err) throw err;
        articles = data.toString();
    }
)
fs.readFile(
    path.join(`${__dirname}/components`, 'footer.html'),
    (err, data) => {
        if(err) throw err;
        footer = data.toString();
    }
)
fs.readFile(
    path.join(`${__dirname}/components`, 'header.html'),
    (err, data) => {
        if(err) throw err;
        header = data.toString();
    }
)
fs.readFile(
    path.join(__dirname, 'template.html'),
    (err, data) => {
        if(err) throw err;
        let template = data.toString()
        template = template.replace('{{articles}}', articles).replace('{{header}}', header).replace('{{footer}}', footer)
        
        fs.writeFile(
            path.join(`${__dirname}/project-dist`, 'index.html'),
            template,
            (err) => {
                if(err) throw err;
            }
        )
    }
)

// styles

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
                            path.join(`${__dirname}/project-dist`, 'style.css'),
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

// assets

// Create folders
fs.mkdir(
    path.join(`${__dirname}/project-dist`, 'assets'),{ recursive: true }, () => {
        (err) => {
            if(err) throw err;
        }
    }
)
fs.mkdir(
    path.join(`${__dirname}/project-dist/assets`, 'fonts'),{ recursive: true }, () => {
        (err) => {
            if(err) throw err;
        }
    }
)
fs.mkdir(
    path.join(`${__dirname}/project-dist/assets`, 'img'),{ recursive: true }, () => {
        (err) => {
            if(err) throw err;
        }
    }
)
fs.mkdir(
    path.join(`${__dirname}/project-dist/assets`, 'svg'),{ recursive: true }, () => {
        (err) => {
            if(err) throw err;
        }
    }
)


// copy assets/fonts

fs.readdir(
    path.join(`${__dirname}/assets`, 'fonts'), { withFileTypes: true }, (err, files) => {
        files.forEach((item) => {
                fs.readFile(
                    path.join(`${__dirname}/assets/fonts`, item.name),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        data = data.toString();

                        fs.writeFile(
                            path.join(`${__dirname}/project-dist/assets/fonts`, item.name),
                            data,
                            (err) => {
                                if(err) throw err;
                            });
                    }
                );
        })
    }
)

// copy assets/img

fs.readdir(
    path.join(`${__dirname}/assets`, 'img'), { withFileTypes: true }, (err, files) => {
        files.forEach((item) => {
                fs.readFile(
                    path.join(`${__dirname}/assets/img`, item.name),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        data = data.toString();

                        fs.writeFile(
                            path.join(`${__dirname}/project-dist/assets/img`, item.name),
                            data,
                            (err) => {
                                if(err) throw err;
                            });
                    }
                );
        })
    }
)

// copy assets/svg

fs.readdir(
    path.join(`${__dirname}/assets`, 'svg'), { withFileTypes: true }, (err, files) => {
        files.forEach((item) => {
                fs.readFile(
                    path.join(`${__dirname}/assets/svg`, item.name),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        data = data.toString();

                        fs.writeFile(
                            path.join(`${__dirname}/project-dist/assets/svg`, item.name),
                            data,
                            (err) => {
                                if(err) throw err;
                            });
                    }
                );
        })
    }
)

console.log('project-dist created')