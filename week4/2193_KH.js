// 이친수
let input = Number(require('fs').readFileSync('/dev/stdin'));

let arr = [0, 1, 1];
for(let i=3; i<=input; i++){
    arr[i] = BigInt(arr[i-1]) + BigInt(arr[i-2]);
}
console.log((BigInt(arr[input])).toString());