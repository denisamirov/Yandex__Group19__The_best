const mainRoute = require('express').Router();

mainRoute.get('/', (req, res) => {
    fs.readFile('./public/index.html', 'utf8').then((data) => {
        res.header('Content-Type', 'text/html');
        res.send(data);
    })
})

module.exports = mainRoute;