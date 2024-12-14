const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
function finderName(names, name) {
    let index = false;
    for(let i = 0; i < names.length; i++) {
        let item = names[i];
        if(item === name) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(finderName(nameFinder, 'Peter'));