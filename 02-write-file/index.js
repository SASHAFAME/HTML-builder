const fs = require('fs');
const path = require('path');
const process = require('process');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on('beforeExit', () => {
    console.log('Bye!');
})

rl.question('Hello, write your name, please: ', newName => {

    if (newName == 'exit') {
        rl.close();
    } else {

    fs.writeFile(
        path.join(__dirname, 'names.txt'),
        newName + ' ',
        (err) => {
            if(err) throw err;
            console.log('Name added')
        }
    )};

    waitAnother()
    function waitAnother() {
        rl.question('', anotherName => {
            if (anotherName == 'exit') {
                rl.close();
            } else {
        fs.appendFile(
            path.join(__dirname, 'names.txt'),
            anotherName + ' ',
            (err) => {
                if (err) throw err;
                console.log('One more name added');
                waitAnother();
            })}
} 
)};

})




