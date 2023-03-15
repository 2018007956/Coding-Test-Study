// 타겟 넘버

// 00000
// 00001
// 00010
// 00100
// 01000
// 10000
// 10001
// ...
// 11111

function solution(numbers, target) {
    const length = Math.pow(2, numbers.length); // (numbers.length)의 제곱
    
    let decimal = 0;
    let result = new Array(length).fill(0);
    
    let prefix_array = new Array(length); // +와 -의 조합을 담을 array
    prefix_array[0] = '0'.repeat(numbers.length);

    for(let i=1; i<length; i++){
        decimal += 1;
        const binary = (decimal).toString(2); //10진수 to 2진수
        
        prefix_array[i] = binary.padStart(numbers.length, '0'); // pattern에 맞게 padding 처리
    }

    for(let i=0; i<prefix_array.length; i++){ // 각 경우에 대한 값 계산
        for(let j=0; j<prefix_array[i].length; j++){
                result[i] += 
                    prefix_array[i][j] == 0 ? 
                    eval('+' + numbers[j]) : eval('-' + numbers[j]);
        }
    } 
    
    return (result.filter((value)=> value == target).length); // 구한 값이 target인지 체크
}