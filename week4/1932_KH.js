// 정수삼각형
let dp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(dp[0]);
dp = dp.slice(1, dp.length);
 
dp.forEach((value, index) => {
    dp[index] = value.split(' ').map(Number);
});

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        let prev;
        if (j == 0) prev = dp[i - 1][j]; // index의 이동: 0>0>0>0>...
        else if (j == i) prev = dp[i - 1][j - 1]; // index의 이동: 0>1>2>3>...
        else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]); // 이전 layer의 (ㅓ-1에서 온 경우 || j에서 온 경우)
       
        dp[i][j] += prev;
    }
}
// console.log(dp);
console.log(Math.max(...dp[n - 1]));