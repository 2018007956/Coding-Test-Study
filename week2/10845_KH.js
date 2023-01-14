// 큐
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const command = input.slice(1, input.length+1);
let queue = new Array();
let rear = -1;
let head = 0;
let answer = "";

command.forEach(element => {
    const targetCommand = element.split(" ");

    if(targetCommand[0] == 'push'){    
        rear++;
        queue[rear] = targetCommand[1];
    }
    else if(targetCommand[0] == 'pop'){ 
        //return this._arr.shift(); 으로 한번에 구현 가능
        if(queue[head] != undefined){
            head++;
            answer += `${queue[head-1]}\n`; } 
        else answer += `-1\n`;
    }
    else if(targetCommand[0] == 'size'){
        answer += `${rear-head+1}\n`;
    }
    else if(targetCommand[0] == 'empty'){
        if(queue[head] == undefined) answer += `1\n`;
        else answer += `0\n`;
    }
    else if(targetCommand[0] == 'front'){
        if(queue[head] == undefined) answer += `-1\n`;
        else answer += `${queue[head]}\n`;
    }
    else if(targetCommand[0] == 'back'){
        if(queue[head] == undefined) answer += `-1\n`;
        else answer += `${queue[rear]}\n`;
    }
});
console.log(answer);