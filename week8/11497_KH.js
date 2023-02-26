// 통나무 건너뛰기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for(let i=1; i<=Number(input[0]); i++){ // test round 만큼 반복

    const numberOfLog = Number(input[2*i-1]); // 통나무의 개수

    let heightOfLog = input[2*i].split(' ').map(Number); // 각 통나무의 높이를 담은 배열
    heightOfLog.sort((a, b) => a - b); // 통나무의 높이대로 정렬
   
    let sortedArray = new Array(numberOfLog); // 정규분포의 형태로 정렬할 배열

    for(let j=0; j<=Math.floor((numberOfLog-1)/2); j++){
        sortedArray[j] = heightOfLog[2*j]; // 짝수 idx인 경우
        if(2*j+1 <= numberOfLog-1)
            sortedArray[numberOfLog-j-1] = heightOfLog[2*j+1]; // 홀수 idx인 경우
    }

    // console.log(sortedArray)

    let max = Math.abs(sortedArray[sortedArray.length-1]-sortedArray[0]); // |가장 마지막 idx - 가장 첫 idx| 을 defalut로 셋팅
    for(let j=0; j<sortedArray.length-1; j++){ // 순차 순회로 더 max가 있다면 업데이트
        if(Math.abs(sortedArray[j+1]-sortedArray[j]) > max) max = Math.abs(sortedArray[j+1]-sortedArray[j]);
    }

    console.log(max);
}

// [2, 4, 5, 7, 9] : origin
// [2, 5, 9, 7, 4] : sorted

// 0
// N-1
// 1
// N-2 
// 2
// N-3 
// ... 
// i
// N-i-1

// origin의 idx -> sorted 될 idx
// 0 -> 0
// 2 -> 1
// 4 -> 2

// 1 -> N-1
// 3 -> N-2
// 5 -> N-3

// ======> 짝수의 인덱스(2*i) = i
// ======> 홀수의 인덱스(2*i+1) = N-i-1

/////////////////
// [10, 11, 12, 13, 12, 11, 10]
// [2, 5, 9, 7, 4]

// 부분정렬? 패턴?