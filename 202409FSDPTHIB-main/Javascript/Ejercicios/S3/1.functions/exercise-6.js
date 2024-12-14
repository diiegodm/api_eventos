const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
function removeDuplicates(elements) {
    let cleanedElement = [];
    for(let element of elements) {
        if(!cleanedElement.includes(element)) {
            cleanedElement.push(element);
        }
    }

    return cleanedElement;
}

console.log(removeDuplicates(duplicates));