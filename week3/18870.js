// 좌표 압축
let n = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
n = n.slice(1, n.length);

function binarySearch (target, dataArray) {
    let low = 0;
    let high = dataArray.length - 1;
    let mid = Math.floor((high + low) / 2);
    while (target !== dataArray[mid]) {
      if (target < dataArray[mid]) {
        high = mid - 1;
        mid = Math.floor((high + low) / 2);
      } else {
        low = mid + 1;
        mid = Math.floor((high + low) / 2);
      }
    }
    return mid; //해당 index 출력
  }

const set = new Set(n);
let sortedArray = Array.from(set).sort((a, b) => a - b);

let result = [];
n.forEach(element => {
    result.push(binarySearch(element, sortedArray));
});


console.log(result.join(' '));