const http = require('http')                                //Подключаем встроенный модуль http

const server = http.createServer((req, res) => {
    //Читаем данные, которые пришли в запросе
    console.log(req.url);                                   // /hello
    console.log(req.method);                                // GET
    console.log(req.headers);                               // Здесь будут заголовки запроса,
    console.log(req.body);                                  // а здесь тело запроса, но у GET-запроса его нет

    //Отдаем ответ
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Привет, мир!</h1>', 'utf8');
})                                                          // Создание http сервера

server.listen(3000)                                         // Указываем порт, на котором будет работать приложение
