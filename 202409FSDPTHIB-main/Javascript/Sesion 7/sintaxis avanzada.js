let person = {
    name: 'Héctor',
    age: 28,
    isPretty: true
};

//let name = person.name;
//let age = person.age;
//let isPretty = person.isPretty;

let {name:personName, age:edad, isPretty} = person;

console.log(personName, edad, isPretty);

let names = ['María', 'Héctor', 'Paula', 'Alberto'];
//let name1 = names[0];
//let name2 = names[1];
//let name3 = names[2];
//let name4 = names[3];

let [name1, name2, name3, name4] = names;
console.log(name1, name2, name3, name4);

let namesCopy = [...names];
console.log(namesCopy);

function sum(...nums) {
    let sum = 0;
    for(let n of nums) {
        sum += n;
    }

    return sum;
}

console.log(sum(2, 3, 5, 6, 7, 3, 1, 23));

function sumArray(nums) {
    let sum = 0;
    for(let n of nums) {
        sum += n;
    }

    return sum;
}
console.log(sumArray([10, 20]));


