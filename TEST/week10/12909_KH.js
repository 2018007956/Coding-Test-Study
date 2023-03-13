// 올바른 괄호
function solution(s){
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i] == '(') stack.push('(');
        else if(s[i] == ')') {
            if(stack.length == 0) return false; // ) 이 먼저 들어오면 false
            else stack.pop();
        }
    }

    if(stack.length == 0) return true;
    else return false
}