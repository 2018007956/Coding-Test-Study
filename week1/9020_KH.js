const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const T = input[0];
const n = input.slice(1, T+1);

function isPrime(num) {
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
};

n.forEach(element => {
    let a = element/2;
    let b = element/2;

    while(!isPrime(a) || !isPrime(b)){
        a--; b++;
    }
    console.log(a + " " + b);
});

