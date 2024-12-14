const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
let {name:carName, itv} = car;

console.log(carName, itv);

let [year1, year2, year3] = itv;
console.log(year1, year2, year3);