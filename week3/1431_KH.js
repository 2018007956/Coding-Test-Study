// 시리얼 번호
let n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = n.slice(1, n.length); 

function addString(string){
    let n = 0;
    for(let i=0; i<string.length; i++){ // 숫자인 것만 더함
        if(!isNaN(Number(string[i]))) n += Number(string[i]);
    }
    return n;
}

n = n.sort(function(a, b) {
    if(a.length === b.length){
        const aAdd = addString(a);
        const bAdd = addString(b);
        
        if(aAdd === bAdd){ // 사전순으로 정렬
            for(let i=0; i<a.length; i++){
                if(a[i] != b[i]) return a.charCodeAt(i) - b.charCodeAt(i);
            }
        }
        return aAdd - bAdd; // 자리의 합순으로 정렬
    }

    else return (a.length - b.length); // 길이순으로 정렬
});

console.log(n.join('\n'));