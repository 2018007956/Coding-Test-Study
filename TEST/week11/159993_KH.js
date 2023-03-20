// 미로 탈출

function solution(maps) {
    let start_point = findPoint(maps, 'S'); // start_point 찾기
    let end_point = findPoint(maps, 'E'); // end_point 찾기
    let lever_point = findPoint(maps, 'L'); // lever_point 찾기
    
    const start_to_lever = bfs(maps.slice(), start_point, lever_point);
    if(start_to_lever == -1) return -1;
    
    const lever_to_end = bfs(maps, lever_point, end_point);
    if(lever_to_end == -1) return -1 
    // start->lever로 가는 경로와 lever->end로 가는 경로 중 하나라도 막히면 -1 출력

    return start_to_lever + lever_to_end; // start->lever로 가는 경로와 lever->end로 가는 경로를 더한다
}

function findPoint(maps, string){
    let point = [];
    
    for(let i=0; i<maps.length; i++){
        const index = maps[i].indexOf(string);
        if(index != -1){
            point = [i, index];
            break;
        }
    }
    return point;
}

function bfs(maps, src_index, dest_index){
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    let q = [];
    let move_count = 0;

    // string to array
    for(let i=0; i<maps.length; i++){
        maps[i] = maps[i].split('');
    }
    
    q.push([src_index[0], src_index[1]]); // queue에 start_point을 push함
    maps[src_index[0]][src_index[1]] = 'X'; // start_point 방문 표시

    while(true){
        const tempQ = [];

        while(q.length != 0){
            const [x, y] = q.shift(); // 현재 위치한 index

            if(x == dest_index[0] && y == dest_index[1]) return move_count; // 목적지에 도착했다면 cnt 리턴
            
            for(let i=0; i<4; i++){
                const [newX, newY] = [x+dx[i], y+dy[i]];

                if(newX < 0 || newX >= maps.length || newY < 0 || newY >= maps[0].length) continue; 
                if(maps[newX][newY] == 'X') continue; 
                
                maps[newX][newY] = 'X'; // 방문 표시
                tempQ.push([newX, newY]);
            }
            
        }
        move_count++; 
        if(tempQ.length == 0) break; // 새롭게 갈 index가 없다 = 즉, 벽으로 다 막혀있다. 따라서 break.
        else q = tempQ;
    }
    
    return -1; // break 상태에서 함수가 끝나면, 목적지에 도달하지 못 한 상태이므로 -1 출력
}