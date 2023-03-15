// 타겟 넘버

// 00000
// 00001
// 00010
// 00100
// 01000
// 10000
// 10001
// ...
// 11111

let target = [1, 1, 1, 1, 1];
let decimal = 0;
let result = new Array(32).fill(0);
let prefix_array = new Array(32);
prefix_array[0] = new Array(5).fill('-');

for(let i=1; i<32; i++){
    prefix_array[i] = new Array(5).fill('-');
    decimal += 1;
    const binary = (decimal).toString(2);

    for(let j=binary.length-1; j>=0; j--){ // 00000 패턴에 맞춰주기 위해 array에 덮어쓰기
        if(binary[j] == 1) prefix_array[i][j] = '+'; // 1 이면 +
        else prefix_array[i][j] = '-'; // 0 이면 -
    }
}


for(let i=0; i<prefix_array.length; i++){ // 각 경우의 수 계산
    for(let j=0; j<prefix_array[i].length; j++){
            result[i] += eval(prefix_array[i][j] + target[j]);
    }
} 

console.log(result.filter((value) == numbers).length);