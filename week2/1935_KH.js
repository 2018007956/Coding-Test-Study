// 후위 표기식2
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
let postfix = input[1].toString().trim().split("");
const value = input.slice(2, input.length+2).map(Number);
let stack = [];

postfix.forEach((element, index) => {
    if((65 <= element.codePointAt(0))&&(element.codePointAt(0) <= 90))
        stack.push(value[postfix[index].codePointAt(0)-65]);
    else{
        const second = stack.pop();
        const first = stack.pop();
        stack.push(eval(first + element + second));
    }
});

console.log(Number(stack).toFixed(2));