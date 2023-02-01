// 2xn 타일링 2 
const input = Number(require('fs').readFileSync('/dev/stdin'));

const DP = new Array(input + 1).fill(0);
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= input; i++) {
    DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}
console.log(DP[input]);

// 마지막에 놓은 사각형이 (세로 / 가로 / 정사각형) 의 경우의 수를 가진다.
// i번째 = i-1번째에서 1x2 타일 1개 붙이는 경우
//        i-2번째에서 2x1 타일 2개
//        i-2번째에서 2x2 타일 1개
// A(n) = A(n-1) + A(n-2) + A(n-2)