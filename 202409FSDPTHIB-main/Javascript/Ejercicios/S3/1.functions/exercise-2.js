const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

findLongestWord(avengers);

function findLongestWord(words) {
    let longestWord = '';
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord(avengers));