let input = parseInt(require('fs').readFileSync("input1.txt"));
let primeFactor = [];

if(input == 1) return false;
 
while(input != 1){
    for(let i=2; i<=input; i++){
        if(input % i == 0){
            input /= i;
            primeFactor.push(i);
            break;
        }
    }
}

primeFactor.forEach(element => {
    console.log(element);
});