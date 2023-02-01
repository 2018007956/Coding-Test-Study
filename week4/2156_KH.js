// 포도주 시식 
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
input = input.slice(1, input.length).map(Number);

let dp = new Array(n).fill(0);

dp[1] = input[0];
dp[2] = input[0] + input[1];

for(let i=3; i<=n; i++){
    dp[i] = Math.max(dp[i-3]+input[i-1]+input[i-2],
                     dp[i-2]+input[i-1],
                     dp[i-1]);
}
// console.log(dp);
console.log(dp[n]);

// 먹는다 -> 먹는다 -> ...
// 먹는다 -> 안 먹는다 -> ...
// 안 먹는다 -> 먹는다 -> ...
// 안 먹는다 -> 안 먹는다 -> ...

// 1. dp[i] = 지금 먹는다 + (i-1)은 거른다 + (i-2)까지의 최대선택값을 먹는다.
// 2. dp[i] = 지금 먹는다 + (i-1)도 먹는다 + (i-2)은 거른다 + (i-3)까지의 최대선택값을 먹는다.
// 3. dp[i] = 지금 먹지 않는다.
