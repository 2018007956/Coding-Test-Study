// 신입 사원
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let idx = 1; // 각 케이스의 첫째 줄

let result = [];

while(idx <= input.length-1){
    let numberOfApplicant = Number(input[idx++]); // 현재 케이스의 지원자 수
    let maxNumber = 1; // 선발 가능한 최대 인원수

    let ranking = new Array(numberOfApplicant); // 지원자의 서류심사 및 면접 순위을 담은 배열
    for(let i=0; i<numberOfApplicant; i++){
        ranking[i] = input[idx+i].split(' ').map(Number); // i번째 지원자의 [서류순위, 면접순위]의 배열형태로 score에 push함
    }
    /*  ranking = [
                    [ [ 3, 2 ] ],
                    [ [ 1, 4 ] ],
                    [ [ 4, 1 ] ],
                    [ [ 2, 3 ] ],
                    [ [ 5, 5 ] ]
                ]
    */

    ranking.sort(function(a, b){ // 서류순위로 오름차순 정렬
        if(a[0]<b[0]) return -1;
        else if(a[0]>b[0]) return 1;
        else return 0;
    });
    // console.log(ranking);

    let top = ranking[0][1]; // 면접순위 최고등수
    
    for(let i=0; i<ranking.length; i++){
        if(top > ranking[i][1]) { // i번째 지원자의 면접순위와 현재 최고등수와 비교함
            maxNumber++;
            top = ranking[i][1]; // i번째 지원자의 면접순위가 더 높다면 top 등수를 갱신함 
        }
    }

    console.log(maxNumber);
    idx += numberOfApplicant; // 다음 테스트 케이스의 지원자 수 index을 계산
}