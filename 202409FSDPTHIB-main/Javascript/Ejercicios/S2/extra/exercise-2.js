const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
for(let food of foodSchedule) {
    if(!food.isVegan) {
        food.name = fruits.pop();
        food.isVegan = true;
    }
}
console.log(foodSchedule);