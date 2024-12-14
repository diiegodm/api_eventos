const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(nums) {
    let sum = 0;
    for(let n of nums) {
        sum += n;
    }

    return sum / nums.length;
}

console.log(average(numbers));