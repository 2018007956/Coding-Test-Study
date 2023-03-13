let number_of_tower = [0, 0];

function solution(n, wires) {
    let distances = [];
    
    for(let i=0; i<n; i++){
        number_of_tower = [0, 0]; // init
        
        const new_wires = wires.slice(0); // wires의 원본 백업 array
        new_wires.splice(i,1);
        // 배열에서 i번째 edge을 delete 함
        
        let visited = new Array(new_wires.length).fill(false); // 각 node의 방문 요소를 나타내는 array
        
        for(let j=0; j<2; j++){ // 전력망의 네트워크가 2분할 되므로 총 2번 탐색
            const start_point = visited.indexOf(false); // 방문하지 않은 node 중에 가장 앞에 있는 index를 return (2분할 째에 방문했던 노드를 또 방문하면 안 됨)
            if(start_point != -1) { // 방문하지 않은 node가 있다면 dfs로 node 탐색 시작
                dfs(new_wires, visited, new_wires[start_point][0], j); // (연결정보, 방문정보, 시작노드, n번째 타워)
            }
        }
        
        distances.push(Math.abs(number_of_tower[1]-number_of_tower[0])); 
    }
    return Math.min(...distances);
}


function dfs(wires, visited, node, n_tower){    
    
    for(let i=0; i<wires.length; i++){
        
        if(wires[i][0] == node && visited[i] == false){ // 1. 해당 노드가 출발지인 경우
            number_of_tower[n_tower]++; // n번째 전력망 네트워크의 전선수 + 1
            visited[i] = true; // 방문 표시
            
            dfs(wires, visited, wires[i][1], n_tower); // 목적지 노드를 시작노드의 인자로 넣어서 다시 재귀를 돌림
        }
        
        else if(wires[i][1] == node && visited[i] == false){ // 2. 해당 노드가 목적지인 경우
            number_of_tower[n_tower]++;
            visited[i] = true;
            
            dfs(wires, visited, wires[i][0], n_tower); // 출발지 노드를 시작노드의 인자로 넣음
        }
    }
}