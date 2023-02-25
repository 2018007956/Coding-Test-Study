// 병든 나이트
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [height, width] = input;

let count = 1;

/* 규칙 2와 3만을 적용할 수 있는 경우 */
if(height == 2){
    if(width > 7) count = 4;
    else count = Math.ceil(width/2);
}
/* 이동 방법에 대한 제약이 있는 경우 */
else if(width >= 7 && height >= 3)
    count = 5 + (width - 7);

/* 이동 방법에 대한 제약이 없는 경우(이동횟수 4 이하) */
else if(height >= 3){
    if(width > 4) count = 4;
    else count = width;
}

console.log(count);



/////////////////////////////////////////////////
// 규칙을 찾아야 하는 문제인가...

// let chess = new Array(height); // 체스판 초기화
// for(let i=0; i<height; i++) 
//     chess[i] = new Array(width).fill(0);

// const rules = {  // 나이트가 움직일 수 있는 조건
//                 1: [-2, 1],
//                 2: [-1, 2],
//                 3: [1, 2],
//                 4: [2, 1] 
//               };

// function movKnight(rule){
//     curLocation[0] += rule[0]; // 나이트의 X좌표 이동
//     curLocation[1] += rule[1]; // 나이트의 Y좌표 이동

//     chess[curLocation[0]][curLocation[1]] = 1; // 방문 표시
//     count++; // 이동 횟수 증가
// }

// let curLocation = [height-1, 0]; // 초기 나이트의 위치 값
// chess[curLocation[0]][curLocation[1]] = 1; // 방문 표시

// let count = 1; // 나이트의 이동 횟수

// /* 규칙 2와 3만을 적용할 수 있는 경우 */
// if(height == 2){
//     while(curLocation[1]+2 < width || count > 4){
//         if(curLocation[0]-1 >= 0) // 위로 1칸이 있다면 규칙2 적용 
//             movKnight(rules[2]);
//         else if(curLocation[0]+1 < height) // 아래로 1칸이 있다면 규칙3 적용 
//             movKnight(rules[3]);

//             if(count >= 4) break;
//     }
// }
// /* 이동 방법에 대한 제약이 있는 경우 */
// else if(width >= 7){
//     movKnight(rules[1]);
//     movKnight(rules[4]);
//     movKnight(rules[2]);
//     movKnight(rules[3]);

//     while(curLocation[1]+1 < width){
//         if(curLocation[0]-2 >= 0) // 위로 2칸이 있다면 규칙1 적용 
//             movKnight(rules[1]);
//         else if(curLocation[0]+2 < height) // 아래로 2칸이 있다면 규칙4 적용
//             movKnight(rules[4]);
//     }
// }
// /* 이동 방법에 대한 제약이 없는 경우(이동횟수 4 이하) */
// else{
//     while(curLocation[1]+1 < width){
//         if(curLocation[0]-2 >= 0) // 위로 2칸이 있다면 규칙1 적용 
//             movKnight(rules[1]);
//         else if(curLocation[0]+2 < height) // 아래로 2칸이 있다면 규칙4 적용
//             movKnight(rules[4]);

//         if(count >= 4) break;
//     }
// }

// // console.log(chess.join('\n')+'\n')
// console.log(count);