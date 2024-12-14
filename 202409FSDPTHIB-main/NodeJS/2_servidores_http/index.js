const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.end('Estoy en el home');
  } else if (url === '/characters') {
    res.end('listado de personajes');
  } else {
    res.end('cualquier otra ruta');
  }
});

server.listen(3000, () => {
  console.log('Servidor ejecutando en http://localhost:3000');
});
