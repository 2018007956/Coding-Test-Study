// 색종이 만들기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...paper] = input.map(value => value.split(' '));

let result = { blue: 0, white: 0 };

function isSameColor(paper){
    const color = paper[0][0] == '1' ? '0' : '1';

    if(paper.map(value => value.some(element => element == color)).includes(true))
    return 'false';

    else return paper[0][0];
}

function makeColoredPaper(paper){
    const color = isSameColor(paper);

    if(color == '1') {
        result.blue++;
        return;
    }
    else if(color == '0') {
        result.white++;
        return;
    }
    
    let mid = Math.floor(paper.length/2);

    makeColoredPaper(paper.map(value => value.slice(0, mid)).slice(0, mid));
    makeColoredPaper(paper.map(value => value.slice(0, mid)).slice(mid));
    makeColoredPaper(paper.map(value => value.slice(mid)).slice(0, mid));
    makeColoredPaper(paper.map(value => value.slice(mid)).slice(mid));
}


makeColoredPaper(paper);

console.log(result.white + '\n' + result.blue);
    
