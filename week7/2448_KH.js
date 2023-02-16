// 별 찍기 - 11
const n = Number(require('fs').readFileSync('/dev/stdin'));
  
// 0 ->           5
// 1 ->         4   6
// 2 ->       3 4 5 6 7
// 3 ->     2           8
// 4 ->   1   3       7   9
// 5 -> 0 1 2 3 4   6 7 8 9 10
// i -> |(n-1)-i|



// 0 ->     2
// 1 ->   1   3
// 2 -> 0 1 2 3 4


// 밑변의 길이
// 5 -> 11 -> ... -> 2n-1

// 세로의 길이
// 3 -> 6 -> ... -> n

function setPattern(n, pattern){
    let newPattern = new Array(n);

    for(let i=0; i<n; i++){
        newPattern[i] = new Array(2*n-1);
        for(let j=0; j<2*n-1; j++){
            if(j >= (n-1)-i && j <= (n-1)+i){
                if(i > n/2-1){
                    if(j == n-1) newPattern[i][j] = ' ';
                    else newPattern[i][j] = pattern[i%(n/2)][(j%n)];
                }
                else newPattern[i][j] = pattern[i%(n/2)][j-n/2];
            }
            // newPattern[i][j] = '*';
            else newPattern[i][j] = ' ';
        }
    }
    return newPattern;
}
  
function f(n, pattern){
    if(n === 3) return [[' ', ' ', '*', ' ', ' '], [' ', '*', ' ', '*', ' '], ['*', '*', '*', '*', '*']];
    else {
        pattern = setPattern(n, f(n/2, pattern));
    }
    return pattern;
}


let star = f(n, []);
let result = '';
star.forEach(element => {
    result += element.join('');
    result += '\n';
});

console.log(result);