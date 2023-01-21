// // 절대값 힙
// let n = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);
// n = n.slice(1, n.length);

// class Heap {
//     constructor() {
//       this.heap = []
//     }
  
//     getLeftChildIndex(parentIndex) {
//         return parentIndex * 2 + 1;
//     }
//     getRightChildIndex(parentIndex) {
//         return parentIndex * 2 + 2;
//     }
//     getParentIndex(childIndex){
//         return Math.floor((childIndex - 1) / 2);
//     }

//     insert(item) {
//         this.heap.push(item);
//         if (this.heap.length === 1) return;
//         this.heapifyUp();
//     }

//     heapifyUp = () => {
//         let index = this.heap.length - 1;
//         const lastInsertedNode = this.heap[index];
    
//         while (index > 0) {
//             const parentIndex = this.getParentIndex(index);
    
//             if(Math.abs(this.heap[parentIndex]) > Math.abs(this.heap[index])){
//                 this.heap[index] = this.heap[parentIndex];
//                 index = parentIndex;
//             }
//             else if (Math.abs(this.heap[parentIndex]) === Math.abs(this.heap[index])){
//                 if(this.heap[parentIndex] > this.heap[index]){
//                     this.heap[index] = this.heap[parentIndex];
//                     index = parentIndex;    
//                 }else break;
//             }else break;
//         }
//         this.heap[index] = lastInsertedNode;
//       }

//     remove = () => {
//         const count = this.heap.length;
//         const rootNode = this.heap[0];
    
//         if (count === 0) return undefined;
//         if (count === 1) this.heap = [];
//         else {
//             this.heap[0] = this.heap.pop();
//             this.heapifyDown();
//         }
    
//         return rootNode;
//       }

//       heapifyDown = () => {
//         let index = 0;
//         const count = this.heap.length;
//         const rootNode = this.heap[index];

//         while (this.getLeftChildIndex(index) < count) {
//             const leftChildIndex = this.getLeftChildIndex(index);
//             const rightChildIndex = this.getRightChildIndex(index);
//             let smallerChildIndex = leftChildIndex;
//             if(rightChildIndex < count){
//                 if(Math.abs(this.heap[rightChildIndex]) < this.heap[leftChildIndex]){
//                     smallerChildIndex = rightChildIndex;
//                 }else if((Math.abs(this.heap[rightChildIndex] === this.heap[leftChildIndex])) && (this.heap[rightChildIndex] <= this.heap[leftChildIndex])){
//                     smallerChildIndex = rightChildIndex;
//                 }
//             }
//             // const smallerChildIndex = (rightChildIndex < count && ((Math.abs(this.heap[rightChildIndex]) < this.heap[leftChildIndex]) || (Math.abs(this.heap[rightChildIndex] === this.heap[leftChildIndex]) && this.heap[rightChildIndex] <= this.heap[leftChildIndex]))) ? rightChildIndex : leftChildIndex;
    
//             if(Math.abs(this.heap[smallerChildIndex]) < Math.abs(this.heap[index])){
//                 this.heap[index] = this.heap[smallerChildIndex];
//                 index = smallerChildIndex;
//             } 
//             else if(Math.abs(this.heap[smallerChildIndex]) === Math.abs(this.heap[index])) {
//                 if(this.heap[smallerChildIndex] <= this.heap[index]){
//                     this.heap[index] = this.heap[smallerChildIndex];
//                     index = smallerChildIndex;
//                 } else break;
//             }else break;
//         }
    
//         this.heap[index] = rootNode;
//     }
// }

// class PriorityQueue extends Heap {
//     constructor() {
//       super();
//     }
  
//     enqueue(element) { 
//         this.insert(element);
//     }

//     dequeue() {
//         return this.remove();
//     }
//     isEmpty() {
//         return this.heap.length <= 0;
//     }
// }

// let heap = new PriorityQueue();
// let result = [];

// n.forEach(element => {
//     if(element != 0) heap.enqueue(element);
//     else if(element == 0 && !heap.isEmpty()){
//         result.push(heap.dequeue());
//     }else result.push('0');
// });

// console.log(result.join('\n'));



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    solution();
    process.exit();
})

class Heap {
    constructor() {
        this.heap = [];
    }
    getLeftChildIdx(parentIdx) {
        return (2 * parentIdx + 1);
    }
    getRightChildIdx(parentIdx) {
        return (2 * parentIdx + 2);
    }
    getParentIdx(childIdx) {
        return (Math.floor((childIdx - 1) / 2));
    }
    insert(item) {
        this.heap.push(item)
        if (this.heap.length === 1)
            return ;
        this.heapifyUp();
    }
    heapifyUp() {
        let idx = this.heap.length - 1;
        const lastInsertedNode = this.heap[idx];
        while (idx > 0)
        {
            const parentIdx = this.getParentIdx(idx);
            if (Math.abs(this.heap[parentIdx]) > Math.abs(this.heap[idx]))
            {
                this.heap[idx] = this.heap[parentIdx];
                idx = parentIdx;
            }
            else if (Math.abs(this.heap[parentIdx]) === Math.abs(this.heap[idx]))
            {
                if (this.heap[parentIdx] > this.heap[idx])
                {
                    this.heap[idx] = this.heap[parentIdx];
                    idx = parentIdx;
                }
                else
                    break;
            }
            else
                break;
        }
        this.heap[idx] = lastInsertedNode;
    }
    delete() {
        if (this.heap.length === 0)
            return (undefined);
        const ret = this.heap[0];
        if (this.heap.length === 1)
            this.heap = [];
        else
        {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }
        return (ret);
    }
    heapifyDown() {
        let idx = 0;
        const rootNode = this.heap[idx];
        while (this.getLeftChildIdx(idx) < this.heap.length)
        {
            const childLeftIdx = this.getLeftChildIdx(idx);
            const childRightIdx = this.getRightChildIdx(idx);
            let smallerIdx = childLeftIdx;
            if(childRightIdx < this.heap.length){
                if(Math.abs(this.heap[childRightIdx]) < Math.abs(this.heap[childLeftIdx])){
                    smallerIdx = childRightIdx;
                }else if(Math.abs(this.heap[childRightIdx]) === Math.abs(this.heap[childLeftIdx])){
                    if(this.heap[childRightIdx] < this.heap[childLeftIdx]){
                        smallerIdx = childRightIdx;
                    }
                }
            }
            const smallerIdx = ((childRightIdx < this.heap.length) && ((Math.abs(this.heap[childRightIdx]) < Math.abs(this.heap[childLeftIdx])) || ((Math.abs(this.heap[childRightIdx]) === Math.abs(this.heap[childLeftIdx])) && (this.heap[childRightIdx] < this.heap[childLeftIdx]))) ? childRightIdx : childLeftIdx;
            
            if (Math.abs(this.heap[smallerIdx]) < Math.abs(this.heap[idx]))
            {
                this.heap[idx] = this.heap[smallerIdx];
                idx = smallerIdx
            }
            else if (Math.abs(this.heap[smallerIdx]) === Math.abs(this.heap[idx]))
            {
                if (this.heap[smallerIdx] <= this.heap[idx])
                {
                    this.heap[idx] = this.heap[smallerIdx];
                    idx = smallerIdx
                }
                else
                    break;
            }
            else
                break;
        }
        this.heap[idx] = rootNode;
    }
}

class PriorityQueue extends Heap{
    constructor() {
        super();
    }
    offer(item) {
        this.insert(item);
    }
    poll() {
        return (this.delete());
    }
    isEmpty() {
        return (this.heap.length === 0);
    }
}

function solution() {
    // const n = +input.shift();
    const pq = new PriorityQueue();
    let ans = '';
    for (let i = 0; i < n; ++i)
    {
        const temp = +input[i];
        if (temp === 0)
        {
            if (pq.isEmpty())
                ans += (0 + '\n');
            else
                ans += (pq.poll() + '\n');
        }
        else
            pq.offer(+input[i]);
    }
    console.log(ans);
}