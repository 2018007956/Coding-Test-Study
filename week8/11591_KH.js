// 주식
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

function maxIdxOfArray(array, startIdx){
    let max = -Infinity;
    let maxIdx = -1;

    for (let i = startIdx; i < array.length; i++) {
        if(array[i] == 10000) return i; // 시간초과 잡기: 주가가 최고점일 경우 더 비교하지 않고 바로 리턴함
        
        if (max < array[i]) {
            max = array[i];
            maxIdx = i;
        }
    }
    return maxIdx;
}

for(let i=1; i<=Number(input[0]); i++){ // test round 만큼 반복
    const day = Number(input[2*i-1]);
    let stockPrice = input[2*i].split(' ').map(Number); // 주가를 담은 배열
    // console.log(`round: ${i}`)

    let purchaseDate = 0 // 매수일 
    let saleDate = maxIdxOfArray(stockPrice, purchaseDate); // 매도일 (매수일로부터 최대 주가인 날을 구함)
    let maxProfit = 0; // 최대이윤 값 
    
    while(true){
        for(let j=purchaseDate; j<saleDate; j++){
            maxProfit += stockPrice[saleDate]-stockPrice[j]
        }

        if(saleDate == stockPrice.length-1) break; // 마지막 날이었다면 더 이상 순회할 수 없으므로 break
        
       
        purchaseDate = saleDate+1;
        saleDate =  maxIdxOfArray(stockPrice, purchaseDate);
        
        if(saleDate < purchaseDate) break; // 매도일(주가가 최대인 날)이 매수일보다 커야만 이윤 생김
        // console.log(saleDate)
        // console.log(`purchaseDate = ${purchaseDate}`)

    }
    result.push(maxProfit);
}
console.log(result.join('\n'))