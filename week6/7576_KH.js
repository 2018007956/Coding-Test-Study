// 토마토 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const [...graph] = input.slice(1).map(value => value.split(' '));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let days = 0;
let q = [];

for(let i=0; i<n; i++){ // 초기 익은 토마토 찾기
    for(let j=0; j<m; j++){
        if(graph[i][j] == '1') {
            q.push([i, j]);
        }
    }
}

let prevIdx = 0; // shift() -> 시간초과의 원인[O(n)] -> 탐색 조건의 공간복잡도를 늘림

while(q.length!=0){
    let isChanged = false;
    let curIdx = q.length; // 전날에 익은 토마토의 개수를 세어준다

    for(let j=prevIdx; j<curIdx; j++){ // (전날 - 전전날) 까지 탐색해야할 범위가 된다
        const [x, y] = q[j];

        for(let i=0; i<4; i++){
            const newY = y + dy[i];
            const newX = x + dx[i];
            if(newX < 0 || newX >= n || newY < 0 || newY >= m) continue; // 이동할 index가 배열범위 내에 들어가는지 체크
            
            if(graph[newX][newY] == '0'){ // 이동할 index가 덜 익은 토마토라면 익은 토마토로 바꾼다
                graph[newX][newY] = days + 1;

                isChanged = true;
                q.push([newX, newY]); // 이동한 index을 저장하여 새롭게 이동한 index만 탐색하도록 한다
            }
        }
    }

    if(!isChanged) break;
    else {
        days++;
        prevIdx = curIdx;
    }
}


for (let i=0; i<n; i++) {
    if (graph[i].includes('0')) {
      console.log(-1); return;
    }
}
console.log(days);