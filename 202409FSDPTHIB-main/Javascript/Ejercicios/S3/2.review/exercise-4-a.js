function findArrayIndex(array, text) {
    //return array.indexOf(text);
    let index = false;
    for(let i = 0; i < array.length; i++) {
        let item = array[i];
        if(item === text) {
            return i;
        }
    }

    return -1;
}

let example = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(example, 'Mosquito'));