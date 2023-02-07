// 섬의 개수 
function DFS(x, y, count){
    if(x < 0 || x >= h || y < 0 || y >= w) return count;

    if(graph[x][y] == 0) return count;
    else{
        graph[x][y] = 0;
        count++;

        count += DFS(x, y-1, 0); // down
        count += DFS(x, y+1, 0); // up
        count += DFS(x-1, y, 0); // left
        count += DFS(x+1, y, 0); // right

        count += DFS(x-1, y-1, 0);
        count += DFS(x-1, y+1, 0);
        count += DFS(x+1, y+1, 0);
        count += DFS(x+1, y-1, 0);

        return count;
    }
}


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let w;
let h;
let graph;
let idx = 0;

while(input.length-1 > idx){
    [w, h] = input[idx].split(' ').map(Number);
    graph = input.slice(++idx, idx+h).map((value) => value.split(' ').map(Number));

    let numberOfIslands = 0;
    
    for(let i=0; i<h; i++){
        for(let j=0; j<w; j++){
            let count = DFS(i, j, 0);

            if(count !== 0){
                numberOfIslands++;
            }
        }
    }
    
    console.log(numberOfIslands);


    idx += h;
}