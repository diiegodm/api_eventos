function sayHi(nameUser) {
  console.log('Holisss ' + nameUser);
}
function sayBye(nameUser) {
  console.log(' Chao ' + nameUser);
}

//module.exports = sayHi;
module.exports = { sayHi, sayBye };
