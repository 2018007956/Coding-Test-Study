// 결혼식
let list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = list.map(Number);
list = list.slice(2);

// 인접행렬(2차원 matrix) 초기화
let adjacenceList = new Array(n+1);
let visited = new Array(n+1).fill(false);
for(let i=0; i<n+1; i++){
    adjacenceList[i] = [];
}

// 인정행렬을 이용하여 그래프 생성
list.forEach(element => {
    const [idx, value] = element.split(' ').map(Number);
    adjacenceList[idx].push(value);
    adjacenceList[value].push(idx);
});

let count = 0;

function DFS(graph, v){
    visited[v] = true;

    for(let node of graph[v]){ 
        if(!visited[node]){ // 해당 친구가 초대되지 않은 친구라면 초대한다.
            visited[node] = true; 
            count++;
        }
        if(v==1) DFS(graph, node); //상근이의 직속(?)친구 인 경우에만 깊이탐색을 잇는다.
    }
}

DFS(adjacenceList, 1);

console.log(count);