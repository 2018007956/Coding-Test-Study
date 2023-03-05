// 감시
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const [height, width] = input[0].split(' ').map(Number);
const office = input.slice(1).map((value) => value.split(' ').map(Number));
const cctv_idx = []; // cctv의 위치를 저장할 array
const visited = new Array(height); // office 방문 유무를 저장하는 array
let count = 0; // 사각지대의 개수

const first_rule = [[0, 1], [0, -1], [1, 0], [-1, 0]];

/* 가능한 모든 순열 구하기 */
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const permutations = getPermutations(rest, selectNumber - 1); 
        const attached = permutations.map((el) => [fixed, ...el]); 

        results.push(...attached); 
    });

    return results;
}

// let rule = getPermutations(first_rule, 2);

// let second_rule = [];
// let third_rule = [];
// for(let i=0; i<rule.length; i++){
//     let sum = [0, 0];
//     for(let j=0; j<rule[i].length; j++){
//         sum[0] += rule[i][j][0];
//         sum[1] += rule[i][j][1];
//     }
//     if(sum[0] == 0 && sum[1] == 0) second_rule.push(rule[i]);
//     else if(sum[0]*sum[1] != 0) third_rule.push(rule[i])
// }

// console.log(second_rule)

office.forEach((value, i) => {
    const j = value.map((value, index) => (value != 0 && value != 6) ? index : null).filter(index => index !== null); // 0과 6이 아닌 index을 구함
    if(j.length != 0){ // cctv가 존재한다면 cctv_idx에 위치를 저장해둠
        j.forEach(element => {
            cctv_idx.push([i].concat(element))
        });
    }
});

/* 사각지대(=0)의 개수, 방문 배열 초기화 */
function init(){
    count = 0;
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(office[i][j] == 0) count++; 
            else if(office[i][j] == '#') {
                office[i][j] = 0;
                count++;
            }
        }
    }
}

// cctv_idx.forEach(idx => {
//     if(office[idx[0]][idx[1]] === 1){ // 1번 cctv일 경우
//         // 벽을 만나거나 array의 범위를 넘어서기 전까지 탐색
        
//         for(let i=0; i<4; i++){
//             init(); // 초기화
//             let q = [];
//             q.push([idx[0], idx[1]]);

//             while(q.length != 0){
//                 const [h, w] = q.shift(); // 현재 위치한 index
//                 const [newH, newW] = [h+dx[i], w+dy[i]];
    
//                 if(newH < 0 || newH >= height || newW < 0 || newW >= width) continue; // 이동할 index가 배열범위 내에 들어가는지 체크
//                 if(office[newH][newW] == 6 || office[newH][newW] == '#') continue; // 이동할 index가 이미 방문한 데이터인지 체크
    
//                 office[newH][newW] = '#'; // 이동했다고 표시
//                 count--;
//                 q.push([newH, newW]); // 새로 탐색해야할 index를 queue에 저장
//             }
//             // console.log(office)
//             console.log(count)
//         }
//     }
//     else if(office[idx[0]][idx[1]] === 2){ // 2번 cctv일 경우

//     }
//     else if(office[idx[0]][idx[1]] === 3){ // 3번 cctv일 경우

//     }
//     else if(office[idx[0]][idx[1]] === 4){ // 4번 cctv일 경우

//     }
//     else if(office[idx[0]][idx[1]] === 5){ // 5번 cctv일 경우

//     }
// });