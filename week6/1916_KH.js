// 최소비용 구하기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.slice(0, 2).map(Number);
const [src, dest] = input[input.length-1].split(' ').map(Number);

class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
        let added = false;

        for(let i=0; i<this.values.length; i++){
            if(priority < this.values[i][1]){
                this.values.splice(i, 0, [val, priority]);
                added = true;
                break;
            }
        }
        if(!added) this.values.push([val, priority]);
    }
    dequeue() {
      return this.values.shift();
    }
}

function Dijkstra(adjacencyList, start, finish) {
    const nodes = new PriorityQueue();
    nodes.enqueue(start, 0); // 출발노드를 큐에 넣는다

    const distances = {}; // 각 노드까지의 최단 거리를 저장하는 객체

    let curNode;

    // 거리 비용을 담은 객체 초기화 
    for (const vertex in adjacencyList) {
        if (vertex == start) {
            distances[vertex] = 0;
        } else {
            distances[vertex] = Infinity;
        }
    }
    /*
        distances { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
    */

    while (true) {
        curNode = nodes.dequeue()[0]; // 우선정리 큐를 이용하므로 dequeue 로 최소 거리를 얻는다

        if (curNode == finish) break;// 현재 가려는 노드가 목적지면 break;


        else{
            for (const neighbor in adjacencyList[curNode]) {
                const nextNode = adjacencyList[curNode][neighbor];
                
                const candidate = distances[curNode] + nextNode.weight; // 시작점에서 현재 노드까지 거리 + 현재 노드와 다음 노드 사이의 거리
                const nextNeighbor = nextNode.node; // 현재 노드의 이웃 노드들 
        
                // 기존에 저장된 거리보다 후보로 계산한 새로운 거리값이 더 작으면 업데이트 한다.
                if (candidate < distances[nextNeighbor]) {
                    distances[nextNeighbor] = candidate;
        
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    return distances; // start 노드에서 각 노드까지 가는 최소 비용을 반환
}



// main
const graph = {};
for(let i=1; i<=n; i++) graph[i] = [];

for(let i=2; i<input.length-1; i++){
    const [start, end, weight] = input[i].split(' ').map(Number);

    const index = graph[start].findIndex(value => value.node == end) // 시간초과 문제: 목적지가 같은 노드는 weight을 비교하여 더 작은 값만을 남긴다(노드의 중복제거)
    if(index != -1){
        if(graph[start][index].weight > weight) graph[start][index].weight = weight;
    }else graph[start].push({node: end, weight});

}

console.log(Dijkstra(graph, src, dest)[dest]);