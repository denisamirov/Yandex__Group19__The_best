const readline = require('readline');


function ask() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Введите имя!: ', (line) => {
        console.log(line);
        rl.close();
    })

}

ask()