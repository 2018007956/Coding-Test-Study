// 타겟 넘버
function solution(numbers, target) {
    let answer = 0;
    let bit = new Array(numbers.length).fill(0);
    
    for(let i=0; i<bit.length-1; i++){
        bit[0] += 1;
        
        for(let j=0; j<bit.length; j++){
            if(bit[j] >= 1){
                while(bit[j] >= 1){
                    if(j == bit.length-1){
                        bit[j] -= 1;
                        bit[0] += 1;
                    }
                    else{
                        bit[j+1] += 1;
                        bit[j] -= 1;
                    }
                }
            }
            console.log(bit)
        }
        // console.log(bit)
    }
    return answer;
}

