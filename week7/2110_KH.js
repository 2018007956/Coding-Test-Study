// 공유기 설치
const input = require('fs').readFileSync('test.txt').toString().trim().split(/\s/).map(Number);
let [numberOfHouse, numberOfRouter, ...house] = input;
let router = [];


















// function getClosetIndex(a, b){
//     let sum = 0;
//     for(let i=a; i<=b; i++) sum += house[i];

//     const mid = (sum / (b-a+1));

//     console.log(mid);
//     let min = house[b];
//     let closetIndex = 0;

//     for(let i=a+1; i<=b; i++){
//         const abs = Math.abs(house[i] - mid);
//         console.log(abs);
//         if(abs <= min){
//             min = abs;
//             closetIndex = i
//         }
//     }
//     return closetIndex;
// }

// // function getMaxDistance(){
// //     let maxDistance = 0;
// //     let idxA = 0;
// //     let idxB = 0;

// //     for(let i=0; i<house.length-1; i++){
// //         const distance = house[i+1] - house[i];

// //         if(distance > maxDistance){
// //             maxDistance = distance;
// //             idxA = i; idxB = i+1;
// //         }
// //     }

// //     return [idxA, idxB];
// // }

// function setRouter(start, end) {

//     // while(true){
//     //     const targetIndex = getMaxDistance();
//     //     console.log(targetIndex);
        
//     //     router.push(targetIndex[0]);
//     //     house.splice(targetIndex[0], 1);
//     //     numberOfRouter--;

//     //     if(numberOfRouter < 0) return;

//     //     router.push(targetIndex[1]);
//     //     house.splice(targetIndex[1], 1);
//     //     numberOfRouter--;

//     //     if(numberOfRouter < 0) return;
//     // }
//     // if(numberOfRouter == 1){
//     //     router.push(house[end]);
//     //     numberOfRouter--;
//     //     return;
//     // }
//     if(start+1 >= end-1 || numberOfRouter <= 0) return;

//     console.log(start + ' ' + end)
//     const mid = getClosetIndex(start, end);

//     router.push(house[mid]);
//     numberOfRouter--;

//     setRouter(start, mid);
//     setRouter(mid, end);
// }

// function getMinDistance(){
//     let minDistance = Infinity;

//     for(let i=0; i<router.length-1; i++){
//         const distance = router[i+1] - router[i];

//         if(distance < minDistance) 
//             minDistance = distance;
//     }

//     return minDistance;
// }

// house.sort((a, b) => a - b);

// router.push(house[0]);
// router.push(house[numberOfHouse-1]);
// numberOfRouter -= 2;

// setRouter(0, numberOfHouse-1);
// if(numberOfRouter >= 1) router.push(house[numberOfHouse-1]);


// router.sort((a, b) => a - b);
// console.log(router)
// console.log(getMinDistance());