// 단지번호붙이기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, ...graph] = input;
n = Number(n);
graph = graph.map(value => value.split(''));

let countOfHouse = [];
let totalCnt = 0;

function DFS(x, y, count){
    if(x < 0 || x >= n || y < 0 || y >= n) return count;

    if(graph[x][y] == '0') return count;
    else{
        graph[x][y] = '0';
        count++;

        count += DFS(x, y-1, 0); // down
        count += DFS(x, y+1, 0); // up
        count += DFS(x-1, y, 0); // left
        count += DFS(x+1, y, 0); // right

        return count;
    }
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        let count = DFS(i, j, 0)
        if(count !== 0){
            totalCnt++;
            countOfHouse.push(count);
        }
    }
}

console.log(totalCnt + '\n' + countOfHouse.sort((a, b) => a-b).join('\n'));