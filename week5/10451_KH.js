// 순열 사이클
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function DFS(v, index){
    if(visited[v] == true) return;
    
    visited[v] = true;

    if(index+1 == graph[v]) count++; // start과 현재 graph의 값이 맞닿았을 때 사이클로 인지하고 count 증가
    else if(!visited[graph[v]-1]){
        DFS(graph[v]-1, index);
    }
}

let graph;
let visited;
let count;

for(let i=1; i<=Number(input[0]); i++){
    const num = Number(input[2*i-1]);

    graph = input[2*i].split(' ').map(Number);
    /* 
        numArray = [ 3, 2, 7, 8, 1, 4, 5, 6 ]
    */
    visited = new Array(num).fill(false);
    count = 0;

    for(let j=0; j<num; j++){
        DFS(j, j);
    }
    
    console.log(count);
}