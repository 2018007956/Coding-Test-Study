// 미로 탐색
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const array = input.slice(1).map((value) => value.split('')); // 미로를 담은 array

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let q = [];
let moveCnt = 1;

q.push([0, 0]);
array[0][0] = moveCnt;

while(true){
    const tempQ = [];
    while(q.length != 0){
        const [x, y] = q.shift(); // 현재 위치한 index

        for(let i=0; i<4; i++){
            const [newX, newY] = [x+dx[i], y+dy[i]];

            if(newX < 0 || newX >= n || newY < 0 || newY >= m) continue; // 이동할 index가 배열범위 내에 들어가는지 체크
            if(array[newX][newY] !== '1') continue; // 이동할 index가 이미 방문한 데이터인지 체크

            array[newX][newY] = moveCnt; // 이동했다고 표시

            tempQ.push([newX, newY]); // 새로 탐색해야할 index를 queue에 저장
        }
    }
    moveCnt++; // 이동횟수 증가
    q = tempQ; // 다음 번 이동할 index을 갱신한다
    if(array[n-1][m-1] != '1') break; // 마지막 index에 도달했다면 탐색 중지
}

console.log(moveCnt);