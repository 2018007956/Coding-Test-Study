// 하노이 탑
const n = Number(require('fs').readFileSync('/dev/stdin'));
let result = [];
let count = 0; 

function hanoi(n, src, mid, dest){
    if(n === 1) {
        result.push([src, dest]);
    }
    else {
        hanoi(n-1, src, dest, mid); // 1,2,3 -> 1,3,2
        result.push([src, dest]);
        hanoi(n-1, mid, src, dest); // 1,2,3 -> 2,1,3
    }
}
 
let pow = 1n;
for(let i=0; i<n; i++){
    pow *= 2n;
}
console.log((pow-1n).toString());
if(n <= 20) {
    hanoi(n, '1', '2', '3');
    console.log(result.map(value => value.join(' ')).join('\n'));
}