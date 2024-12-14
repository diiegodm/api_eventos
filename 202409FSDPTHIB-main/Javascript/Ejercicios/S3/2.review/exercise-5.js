function rollDice(faces) {
    let n = Math.floor(Math.random() * faces);
    return n + 1;
}

for(let i = 0; i < 10; i++) {
    console.log(rollDice(6));
}