const fs = require('fs');

fs.writeFileSync('mensaje.txt', 'Hola soy dayana');

//asincrona
fs.writeFile('mensaje.txt', 'segundo mensaje', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Escribiendo en el archivo');
});

const texto = fs.readFileSync('archivo.txt', 'utf-8');
console.log(texto);

//leerarchivo
