function solution(numbers) {
    var answer = 0;
    
    let array = []; 
    for(let char of numbers) // 1. String to Array
        array.push(char);
    
    let set = new Set(); // 중복제거를 위한 object
    for (let i = 1; i <= numbers.length; i++){ // 2. i개에 대한 모든 부분조합 탐색
        getPermutations(array, i).forEach((value) => {
            set.add(Number(value)); // 3. Set을 통한 중복요소 제거
        });
    }
    set.forEach(element => { // 4. 구한 부분조합이 소수라면 개수++ 
        if(isPrime(element)) answer++;
    });

    return answer;
}

/* 가능한 모든 순열 구하기 */
function getPermutations(arr, N) {
    const results = [];
    if (N === 1) return arr;
  
    arr.forEach((fixed, index) => {
        const rest = [...arr.slice(0, index), ...arr.slice(index+1)]; // 순서에 따라 조합이 달라지므로 앞부분도 잘라 넣어줌
        const permutations = getPermutations(rest, N - 1);
        const attached = permutations.map((value) => [fixed+value]);
        results.push(...attached);
    });
  
    return results;
}

/* 소수 판별 함수 */
function isPrime(N) {
    if (N === 1 || N === 0) return false;

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false;
    }
    return true;
}