// 적록색약 
function makeVisitedArray(){
    let visited = new Array(n);
    for(let i=0; i<n; i++){
        visited[i] = new Array(n).fill(false);
    }
    return visited;
}

function isNotVisitedIndex(array, value){
    for(let i=0; i<n; i++){ 
        let index = array[i].indexOf(value);
        
        if(index != -1) return [i, index];
    }
    return -1;
}

function BFS(visited){
    let count = 1;

    while(true){
        
        let q = [];
        let isBreak = true; // 모두 방문했다면 break 하기 위한 Flag

        // 방문하지 않았던 데이터인지 확인한다
        let index = isNotVisitedIndex(visited, false); 
        if(index != -1){
            q.push(index);
            visited[index[0]][index[1]] = count;
            isBreak = false;
        }
        
        while(q.length != 0){
            const [x, y] = q.shift();
            
            for(let i=0; i<4; i++){
                const [newX, newY] = [x+dx[i], y+dy[i]];
                
                if(newX >= 0 && newX < n && newY >= 0 && newY < n){ // 이동할 index가 배열범위 내에 들어가는지 체크
                    if(visited[newX][newY] == false){ // 이동할 index가 방문한 데이터인지 체크(숫자이면 방문한 데이터로 인식)
                       
                        if(grid[x][y] == grid[newX][newY]){ // 이동할 index가 같은 색상이라면 같은 숫자로 입혀준다
                            visited[newX][newY] = count;
                            q.push([newX, newY]); // 같은 숫자로 뻗어나갈 index를 queue에 담는다
                        }
                    }
                }
            }
        }
        if(isBreak) break;
        else count++;
    }

    return count;
}

function RGBtoGB(){
    while(true){
        let q = [];
        let isBreak = true;
    
        let index = isNotVisitedIndex(grid, 'R'); // R 인 데이터를 찾아낸다
        if(index != -1){ // R인 데이터가 남아 있는 경우, 탐색 시작
            q.push(index);
            grid[index[0]][index[1]] = 'G';
            isBreak = false;
        }
    
        while(q.length != 0){
            const [x, y] = q.shift();
    
            for(let i=0; i<4; i++){
                const [newX, newY] = [x+dx[i], y+dy[i]];
                
                if(newX >= 0 && newX < n && newY >= 0 && newY < n){ // 이동할 index가 배열범위 내에 들어가는지 체크
                    if(grid[newX][newY] == 'R'){ // 이동할 index가 'R'인지 체크하고 'G'로 바꾸어 준다
                        grid[newX][newY] = 'G';
                        q.push([newX, newY]);
                    }
                }
            }
        }
        if(isBreak) break; 
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const [...grid] = input.slice(1).map(value => value.split('')); 

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let totalCount = [];

let visitedA = makeVisitedArray(); //적록색약이 아닌 사람의 visited 배열
let visitedB = makeVisitedArray(); //적록색약인 사람의 visited 배열
    
totalCount.push(BFS(visitedA)-1);

RGBtoGB();

totalCount.push(BFS(visitedB)-1);

console.log(totalCount.join(' '));