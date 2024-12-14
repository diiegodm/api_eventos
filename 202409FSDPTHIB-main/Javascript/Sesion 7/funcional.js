//ARRAY MAP
let officers = [  
    { id: 20, name: 'Captain Piett' },  
    { id: 24, name: 'General Veers' },  
    { id: 56, name: 'Admiral Ozzel' },  
    { id: 88, name: 'Commander Jerjerrod' }
];
//[20, 24, 56, 88]

/*
let idsArray = [];
for(let officer of officers) {
    idsArray.push(officer.id);
}
*/
/*
let idsArray = officers.map(function(officer) {
    return officer.id;
});
*/
let idsArray = officers.map(officer => officer.id);
//console.log(idsArray);

//ARRAY FILTER
let pilots = [ 
    { id: 2, name: "Wedge Antilles", faction: "Rebels" }, 
    { id: 22, name: "Dark Vader", faction: "Empire" },
    { id: 19, name: "Thanos", faction: "Empire" },
    { id: 66, name: "Thane Kyrell", faction: "Rebels" }];

/*
let rebelPilots = [];
for(let pilot of pilots) {
    if(pilot.faction === 'Rebels') {
        rebelPilots.push(pilot);
    }
}
*/
/*
let rebelPilots = pilots.filter(function(pilot) {
    return pilot.faction === 'Rebels';
});
*/
let rebelPilots = pilots.filter(pilot => pilot.faction === 'Rebels');
//console.log(rebelPilots);

//FIND
const array1 = [5, 12, 8, 130, 44];

/*
let numberFound;
for(let n of array1) {
    if(n > 10) {
        numberFound = n;
        break;
    }
}
*/
/*
let numberFound = array1.find(function(n) {
    return n > 10;
});
*/
let numberFound = array1.find(n => n > 10);
//console.log(numberFound);

//REDUCE
let pilots2 = [ 
	{ id: 10, name: "Poe Dameron", years: 14, }, 
	{ id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
	{ id: 41, name: "Tallissan Lintra", years: 16, }, 
	{ id: 99, name: "Ello Asty", years: 22, }
];

/*
let totalYears = 0;
for(let pilot of pilots2) {
    totalYears += pilot.years;
}
*/
/*
let totalYears = pilots2.reduce(function(acc, pilot) {
    return acc + pilot.years;
}, 0);
*/
let totalYears = pilots2.reduce((acc, pilot) => acc + pilot.years, 0);
//console.log(totalYears);