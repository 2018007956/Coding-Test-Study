const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const numberOfBrothers = input[0];
const subin = input[1];
const brothers = input.slice(2, numberOfBrothers+2);

let distanceOfSubinAndBrothers = [];
brothers.forEach(element => {
    distanceOfSubinAndBrothers.push(Math.abs(subin - element));
});

const gcd = (a, b) => {
    if (b === 0) return a; 
    return gcd(b, a % b); 
};


let answer = distanceOfSubinAndBrothers[0];
for(let i = 1; i < numberOfBrothers; i++){
    answer = gcd(answer, distanceOfSubinAndBrothers[i]);
}

console.log(answer);
