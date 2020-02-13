let http = require('http'); // подключение модуля для работы с http
let fs = require('fs'); // подключение модуля для работы с файлом



let filename;
/*if(process.argv.length < 3) {
    filename = 'ru.html';
} else if(process.argv.length === 3 && process.argv[2] === 'en') {
    filename = 'en.html'
} else {
    console.log('Unsupported arguments: ', process.argv.slice(2));
    process.exit(1);
}*/

let lang = process.env['LANG'].substr(0, 2);
if(lang == 'ru') {
    filename = 'ru.html';
} else if(lang == 'en') {
    filename = 'en.html';
} else {
    console.log('Unsupported locale: ', lang);
    process.exit(1);
}


http.createServer((request, response) => {
            console.log("Request: " + request.url);
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                console.log(`The file ${filename} is read and sent to the client\n`);
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(data);
            }
        });
    }).listen(8080, ()=>{
        console.log("HTTP server works in 8080 port!\n");
    });