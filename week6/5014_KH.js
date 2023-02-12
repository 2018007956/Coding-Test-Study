// 스타트링크
const input = require('fs').readFileSync('/dev/stdin').toString();
const [F, S, G, U, D] = input.split(' ').map(Number);

let array = Array.from({length: F}, (value, index)=>value=index);
let visited = new Array(F).fill(false);

// up, down
const dx = [U, -D];

let q = [];
let click = 0;

q.push(S-1); // 현재 강호가 있는 층에서 시작한다
visited[S-1] = true;

while(true){
    if(visited[G-1]) break; // G층에 방문했으면 break

    const tempQ = [];

    while(q.length != 0){
        const x = q.shift(); // 현재 위치한 index

        for(let i=0; i<2; i++){
            const newX = x+dx[i];

            if(newX < 0 || newX >= F) continue; // 이동할 index가 배열범위 내에 들어가는지 체크
            if(visited[newX]) continue; // 이동할 index가 이미 방문한 데이터인지 체크

            visited[newX] = true; // 이동했다고 표시

            tempQ.push(newX); // 새로 탐색해야할 index를 queue에 저장
        }
    }
    click++; // 버튼 누른 횟수 증가
    q = tempQ; // 다음 번 이동할 index을 갱신한다
    
    if(!tempQ.length) break; // 모든 객체를 탐색해서 더 이상 방문할 큐가 없으면 break
}


if(!visited[G-1]) console.log('use the stairs');
else console.log(click);