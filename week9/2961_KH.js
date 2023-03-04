// 도영이가 만든 맛있는 음식
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

/* 가능한 모든 조합을 구하는 함수 */
const getCombinations = function (arr, N) {
    let results = [];
    if (N === 1) return arr; // 재귀 종료조건

    arr.forEach((fixed, index, arr) => {
        const rest = arr.slice(index + 1); // fixex을 제외한 나머지 요소에 대한 combination을 구한다
        const combinations = getCombinations(rest, N-1); 

        combinations.forEach((value, index) => { // 구한 부분 조합들에 대해 신맛, 짠맛을 연산하여 result에 push
            results.push([fixed[0]*value[0], fixed[1]+value[1]]);
        });
    });

    return results; // i개에 대한 모든 부분조합 return
}

/* Main */
const number = Number(input[0]); // 식재료의 개수

const ingredients = []; // 식재료 배열 ([0]: 신맛, [1]: 짠맛)
for(let i=1; i<=number; i++){
    ingredients.push(input[i].split(' ').map(Number));
}

let minDistance = Infinity; // 최소값을 무한대로 초기화 함

for (let i = 1; i <= number; i++){ // i개에 대한 모든 부분조합 탐색
    getCombinations(ingredients, i).forEach((value) => {
        const newDistance = Math.abs(value[0]-value[1]); // 지금 구한 조합의 차이가 가장 최소인지 체크
        
        if(newDistance < minDistance) minDistance = newDistance; // 가장 min 값이라면 업데이트
    });
}

console.log(minDistance)