// 전력망을 둘로 나누기
let number_of_tower = [0, 0];

function solution(n, wires) {
    let answer = -1;
    let distances = [];
    
    for(let k=1; k<n; k++){
        let visited = new Array(wires.length).fill(false);
        number_of_tower[0] = 0;
        number_of_tower[1] = 1;
        
        const new_wires = wires.slice(0);
        new_wires.splice(k,1);
        console.log(new_wires)
        for(let i=0; i<2; i++){
            for(let j=0; j<new_wires.length; j++){
                dfs(new_wires, visited, new_wires[j][0], i)
            }
        }
        
        distances.push(number_of_tower[1]-number_of_tower[0]);
        console.log(number_of_tower[1])
        console.log(number_of_tower[2])
        // console.log(distances)
    }
    return answer;
}

function dfs(wires, visited, src_node, n_tower){    
    for(let i=0; i<wires.length; i++){
        // console.log(wires[i][0] + ' ' + src_node)
        if(wires[i][0] == src_node && visited[i] == false){
            number_of_tower[n_tower]++;
            console.log(src_node + ' ' + wires[i][1] + ' ')
            visited[i] = true;
            
            dfs(wires, visited, wires[i][1], n_tower);
        }
    }
}