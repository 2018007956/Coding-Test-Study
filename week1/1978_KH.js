const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
let numberOfPrimes = input[0];
const primeNumber = input.slice(1, input[0]+1);
 
primeNumber.forEach(element => {
    if(element == 1){
        numberOfPrimes--;
    }
    
    for(let i=2; i<=Math.sqrt(element); i++){
        if(element % i == 0){
            numberOfPrimes--;
            break;
        }
    }
});

console.log(numberOfPrimes);