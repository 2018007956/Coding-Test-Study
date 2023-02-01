// 별 찍기 - 10
const n = Number(require('fs').readFileSync('/dev/stdin'));
  
function setPattern(n, pattern){
    let newPattern = new Array(n);

    for(let i=0; i<n; i++){
        newPattern[i] = new Array(n);
        for(let j=0; j<n; j++){
            if((n/3 <= i && i < n/3+n/3) && (n/3 <= j && j < n/3+n/3)){
                newPattern[i][j] = ' ';
            }
            else newPattern[i][j] = pattern[i%(n/3)][j%(n/3)];
        }
    }
    return newPattern;
}
  
function f(n, pattern){
    if(n === 3) return [['*', '*', '*'], ['*', ' ', '*'], ['*', '*', '*']];
    else {
        pattern = setPattern(n, f(n/3, pattern));
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