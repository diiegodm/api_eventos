const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let copyColors = [...colors];
copyColors.splice(2, 1);

console.log(colors);
console.log(copyColors);