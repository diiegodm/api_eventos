const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    let result = callback(a, b);
    numbersList.push(result);
}


father(2, 2, sum);
father(10, 5, substract);

console.log(numbersList);