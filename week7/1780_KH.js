// 종이의 개수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...paper] = input.map(value => value.split(' '));


let result = { '-1': 0, '0': 0, '1': 0 };

function isSameNumber(paper){
    for(let i=0; i<paper.length; i++){
        for(let j=0; j<paper.length; j++){
            if(paper[i][j] != paper[0][0]) return 'false';
        }
    }
    return paper[0][0];
}

function makePaper(paper){
    const number = isSameNumber(paper);

    if(number != 'false') return result[number]++;


    let split = Math.floor(paper.length/3);

    let tempPaper = paper.map(value => value.slice(0, split));
    makePaper(tempPaper.slice(0, split)); // [0,0]
    makePaper(tempPaper.slice(split, split*2)); // [1,0]
    makePaper(tempPaper.slice(split*2)); // [2,0]

    tempPaper = paper.map(value => value.slice(split, split*2));
    makePaper(tempPaper.slice(0, split)); // [0,1]
    makePaper(tempPaper.slice(split, split*2)); // [1,1]
    makePaper(tempPaper.slice(split*2)); // [2,1]

    tempPaper = paper.map(value => value.slice(split*2));
    makePaper(tempPaper.slice(0, split)); // [0,1]
    makePaper(tempPaper.slice(split, split*2)); // [1,1]
    makePaper(tempPaper.slice(split*2)); // [2,1]
}


makePaper(paper);
console.log(result['-1'] + '\n' + result['0'] + '\n' + result['1']);