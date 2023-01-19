const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const n = input[0];
const s = input[1];
const sequence = input.slice(2, n+2);
let count = 0;

function DFS(arr, i) {  
    if(arr.reduce((accumulator, curr) => (accumulator + curr)) == s)
        count++;

    for(let j = i+1; j < n; j++){
        arr_= [];

        arr.forEach((value, index) => { arr_[index] = value; });
        arr_[j] = sequence[j];

        DFS(arr_, j);
    }
};


for(let i = 0; i < n; i++){
    const arr = Array.from({length: n}, () => 0);
    arr[i] = sequence[i];

    DFS(arr, i);
}

console.log(count);

/*
1 0 0 0 0

- 1 1 0 0 0 
- 1 1 1 0 0 - 1 1 1 1 0
            - 1 1 1 1 1
            
- 1 1 0 1 0 - 1 1 0 1 1
- 1 1 0 0 1
1 0 1 0 0
1 0 0 1 0
,...

*/