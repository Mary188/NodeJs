// Задача 3.
// 1.  Сделайте три файла header.html , body.html, footer.html с простой html версткой и отдайте контент за один вызов сервера.

const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const filenames = ['header.html', 'body.html', 'footer.html']

http.createServer((request, response) => {// вызов метода создания http сервера
    for ( let i = 0; i < filenames.length; i++) {
        let filename = filenames[i];
        fs.readFile(filename, 'utf-8', (err, data, i) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                if(i == 0) {
                    response.writeHead(200, {'Content-Type':'text/html'});
                }
                console.log(`The file ${filename} is read and sent to the client\n`);
                response.write(data);
                if(i + 1 == filenames.length) {
                    response.end();
                }
        }
    });
    }
    console.log("Request accepted!");
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});