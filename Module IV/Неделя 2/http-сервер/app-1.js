const http = require('http')        //Подключаем встроенный модуль http

const server = http.createServer(() => {
    console.log("Пришел запрос!")
})                                  // Создание http сервера

server.listen(3000)                 // Указываем порт, на котором будет работать приложение
