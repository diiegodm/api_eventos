const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
 
  function repeatCounter(words) {
    let counter = {};
    for(let word of words) {
        if(!counter.hasOwnProperty(word)) {
            counter[word] = 0;
        }

        counter[word] += 1;
    }
    return counter;
  }

  let counter = repeatCounter(counterWords);
  console.log(counter);