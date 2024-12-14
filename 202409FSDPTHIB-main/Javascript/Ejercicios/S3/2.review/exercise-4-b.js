function findArrayIndex(array, text) {
    //return array.indexOf(text);
    for(let i = 0; i < array.length; i++) {
        let item = array[i];
        if(item === text) {
            return i;
        }
    }

    return -1;
}

function removeItem(array, text) {
    let index = findArrayIndex(array, text);
    if(index > -1) {
        array.splice(index, 1);
    }
    
    return array;
}

let example = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(removeItem(example, 'Mosquito'));