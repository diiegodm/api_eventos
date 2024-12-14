console.log('Hola mundo');

const name = 'Maricarmen';

if (name !== 'Ana') {
  console.log('eres bienvenida');
}
console.log('otra cosa');
console.log('es otro cambio');

//importamos el modulo de mic
/*const obj = require('./mic');
obj.sayHi(name);
obj.sayBye(name);
*/

const { sayHi, sayBye } = require('./mic');
sayHi('Carmen');

/*modulos basicos de NodeJS, 
FS gestion de ficheros
http  creacion de servidores y gestion de peticiones HTTP
path tratamiento de rutas o directorios
os informacion del sistema operativo
events creacion de eventos personalizados
url formateo de urls 
*/
