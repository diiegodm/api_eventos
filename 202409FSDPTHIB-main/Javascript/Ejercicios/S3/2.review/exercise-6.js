function swap(array, i1, i2) {
    let original = array[i1];
    array[i1] = array[i2];
    array[i2] = original;

    return array;
}

let example = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(example, 2, 3));
