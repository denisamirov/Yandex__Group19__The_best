const http = require('http')                                //Подключаем встроенный модуль http

const server = http.createServer((req, res) => {
    //Читаем данные, которые пришли в запросе
    console.log(req.url);                                   // /hello
    console.log(req.method);                                // GET
    console.log(req.headers);                               // Здесь будут заголовки запроса,
    console.log(req.body);                                  // а здесь тело запроса, но у GET-запроса его нет

    //Отдаем ответ
    res.statusCode = 200;                                   // Статус ответа
    res.statusMessage = 'OK';                               // Сообщение ответа
    res.setHeader('Content-Type', 'text/plain');            // Добавление заголовка ответу
    res.write('Hello, ');                                   // Отправление части ответа — строки 'Hello, '
    res.write(`${req.body}`);                                    // Отправление части ответа — строки 'world!'
    res.end();                                              // Окончание отправки ответа
})                                                          // Создание http сервера

server.listen(3000)                                         // Указываем порт, на котором будет работать приложение
