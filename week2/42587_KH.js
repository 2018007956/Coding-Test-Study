// 프린터
class Queue {
    arr = [];
    rear = -1;
    
    constructor(arr) {
        this.arr = arr;
    }
    push(element){
        this.rear++;
        this.arr.push(element);
    }
    pop(){
        let front = this.arr[0];
        if(front != undefined){
            this.arr.forEach((value, index) => {
               this.arr[index] = this.arr[index+1]; 
            });
            this.arr.pop();
            this.rear--;
            return (front); 
        } else return ('-1');
    }
};

function solution(priorities, location) {
    let queue = new Queue(priorities);
    var answer = 1;
    
    while(queue.arr.length != 0){
        // 현재 문서가 우선순위가 가장 높은 경우: 대기목록에서 꺼냄
        if(queue.arr[0] === Math.max.apply(null, queue.arr)){ 
            //만약 꺼내는 문서가 target문서라면 return 한다.
            if(location == 0) return answer;
            else {
                queue.pop();
                answer++; location--;
            }
        }
        // 현재 문서보다 더 높은 우선순위가 있는 경우: 현재 문서를 대기목록 마지막으로 옮김
        else {
            if(location == 0) location=queue.arr.length;
            queue.push(queue.arr[0]);
            queue.pop(); location--;
        }
    }
    return answer;
}