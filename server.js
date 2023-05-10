const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // čitajte datoteku index.html iz trenutnog direktorija
  fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) {
      // ako se dogodi greška, poslati 404 status i poruku
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('File not found!');
      res.end();
    } else {
      // ako se datoteka uspješno pročita, poslati 200 status i datoteku
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});