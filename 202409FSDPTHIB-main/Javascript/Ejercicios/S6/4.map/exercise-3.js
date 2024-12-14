const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let cityNames = cities.map(city => city.name + (city.isVisited ? ' (Visitado)' : ''));
console.log(cityNames);