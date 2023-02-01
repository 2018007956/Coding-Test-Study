// 가장 긴 증가하는 부분 수열
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const n = input[0];
input = input.slice(1, input.length);

let dp = new Array(n).fill(0); // dp = 최대길이의 개수
dp[0] = 1;

for(let i=1; i<n; i++){
    let max = 0;
    for(let j=0; j<i; j++){
        if(input[i] > input[j]){ // 자신보다 작은 값이 있으면 dp중에 최대값+1을 저장
            max = Math.max(max, dp[j]);
            dp[i] = max;
        } 
    }
    dp[i]++;
}
console.log(Math.max(...dp));

// A = {10, 20, 10, 30, 20, 50} 
//   => {10, 20, 30, 50}
//   => 4

// index을 비교해가며 붙일 수 있으면 dp[i]+1
