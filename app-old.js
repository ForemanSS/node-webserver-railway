
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'content-Type': 'application/json'})
    res.sertHeader('Content-Disposition', 'attachment; filename-lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});

    res.write('Hola Mundo');
    res.end();

})
.listen(8080);

console.log('Esuchando el puerto', 8080 );
