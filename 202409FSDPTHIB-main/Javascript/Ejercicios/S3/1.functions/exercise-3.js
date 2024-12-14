const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(nums) {
    let sum = 0;
    for(let n of nums) {
        sum += n;
    }

    return sum;
}

console.log(sumAll(numbers));