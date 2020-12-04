
const findLongestWord = function (string) {
    let total = string.split(" ");
    let theLongest = '';
    for (word of total) {
    if (theLongest.length < word.length){
        theLongest = word;
    }
    }
    return theLongest;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
console.log(findLongestWord('Google do a roll')); // 'Google'
  
console.log(findLongestWord('May the force be with you')); // 'force'