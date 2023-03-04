// 카펫
function solution(brown, yellow) {
    let answer = [];

    for(let width=Math.floor(brown/2)-1; width>2; width--){ // 카펫의 가로길이를 구해보기(최소 1/2의 가로 길이를 가질 수 있음)
        let length = width * ((brown+4-width*2)/2); // 카펫의 가로 길이 * 세로 길이 = 총 픽셀 수
        // ((brown+4-width*2)/2) 은 카펫의 세로 길이로, brown+4는 padding 처리를 위함.

        if(length-brown-yellow === 0) return [width, (brown+4-width*2)/2]; // 카펫의 총 픽셀 수 == brown 와 yellow을 모두 쓴 것과 일치하면 종료
    }
    return answer;
}

// console.log(solution(24, 24))