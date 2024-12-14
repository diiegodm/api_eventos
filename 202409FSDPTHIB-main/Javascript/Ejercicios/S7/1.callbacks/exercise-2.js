const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    let result = callback(description);
    userAnwsers.push(result);
}

father('Seguro que quieres borrar a marta?', confirmExample);
father('Que queso está más rico?', promptExample);

console.log(userAnwsers);
