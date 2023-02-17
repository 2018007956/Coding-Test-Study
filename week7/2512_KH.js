// 예산
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
let [n, ...budgets] = input;
let totalBudget = budgets.pop();


function getMaxAmount(){
    let MaxAmount = 0; // 각 라운드의 최대 예산을 누적하는 변수

    while(true){
        if((totalBudget < n) || (budgets.length <= 0)) break; // 탈촐조건 : 더 이상 쪼갤 수 없거나 요청 지역이 없는 경우

        let assignBudgets = Math.floor(totalBudget / n); // 각 지역에 배정할 예산(N분할)
        let amount = 0; // 현재 라운드의 최대예산

        totalBudget -= assignBudgets * n; //각 지역에 예산을 배정했으므로 지출을 뺀다

        for(let i=0; i<budgets.length; i++){
            const restCost = assignBudgets - budgets[i];

            if(restCost >= 0){ // 지역의 예산요청에 도달한 경우
                if(budgets[i] > amount) amount = budgets[i]; // 배정한 예산이 다른 지역 보다 큰지 비교한 후 업데이트

                budgets.splice(i, 1);
                i--;
                totalBudget += restCost;
            }
            else { // 지역의 예산요청에 도달하지 못한 경우
                amount = assignBudgets; // 현재 라운드에서 배정한 예산은 N분할한 예산으로 최대가 된다.
                budgets[i] = Math.abs(restCost);
            }

        }
        
        MaxAmount += amount; // 현재 라운적의 최대 예산을 누적
        n = budgets.length; // 예산요청에 도달한 지역은 배열에서 삭제했으므로 n(지역의 개수)을 업데이트

    }

    return MaxAmount;
}

console.log(getMaxAmount());