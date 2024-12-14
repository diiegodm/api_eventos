const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function sumNumbersAndStrings(elements) {
    let sum = 0;
    for(let element of elements) {
        if(typeof element === 'string') {
            sum += element.length;
        } else {
            sum += element;
        }
    }

    return sum;
}

console.log(sumNumbersAndStrings(mixedElements));