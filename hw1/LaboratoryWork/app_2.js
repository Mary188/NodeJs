// Задача 2.
// 1. Запустите сервер. Перешлите клиенту свою простую страницу. 
// 2. Отдайте пользователю ошибку 404

const http = require('http');// подключение модуля
http.createServer((request,response) => { // вызов метода создания http сервера 
    console.log("HTTP works!");
    response.writeHead(404, {'Content-Type':'text/html'});
    response.write('<h1>404</h1>');
    response.end();
}).listen(8080);