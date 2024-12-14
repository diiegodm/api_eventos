const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
for(let user of users) {
    console.log((user.years >= 18 ? 'Usuario mayor de edad: ' : 'Usuario menor de edad: ') + user.name);
}