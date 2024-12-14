//Bucle que ejecuta un código n veces, en este caso 10
console.log('EJEMPLO BUCLE FOR');
for(let i = 0; i < 10; i++) {
    console.log(i);
}

//Ejemplo de bucle while que ejecuta el código hasta que el usuario mete un número correcto. Solo funciona en HTML.
/*console.log('EJEMPLO BUCLE WHILE');
let number;
while(isNaN(number)) {
    number = prompt('Dime un número');
    console.log('Has escrito: ' + number);
    number = parseInt(number);
}
console.log('El número es: ' + number); */

//Este ejemplo recorre los elementos de un array usando un bucle for tradicional
console.log('EJEMPLO RECORRER ARRAY CON FOR');
let names = ['Paco', 'Luis', 'Ana', 'Luisa'];
for(let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(name);
}

//Ejemplo de recorrer el mismo array que antes con un bucle for of
console.log('EJEMPLO BUCLE FOR OF')
for(let name of names) {
    console.log(name);
}

//Este ejemplo es de recorrer los atributos de un array con bucle for in
console.log('EJEMPLO BUCLE FOR IN');
let person = {
    name: 'Paco',
    age: 18
};
for(let key in person) {
    console.log(key + ': ' + person[key]);
}