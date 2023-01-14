// 요세푸스 문제 0
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input[0];
const K = input[1];

class Queue {
    constructor() {
      this.arr = [];
      this.rear = -1;
      this.front = 0;
    }
    push(element){
        this.arr.push(element);
    }
    pop(){
        this.front = ((this.front+K-1)%this.arr.length);
        let removedElement = this.arr[this.front];
        for(let i=this.front; i<this.arr.length; i++){
            this.arr[i] = this.arr[i+1];
        }
        this.arr.pop();
        return (removedElement); 
    }
};

// arr[(current+3)%length-1] 
let queue = new Queue();
for(let i=1; i<=N; i++) queue.push(i);
let result = [];

while(queue.arr.length != 0){
    result.push(queue.pop());
}
console.log('<' + result.join(", ") + '>');