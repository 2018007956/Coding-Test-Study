// 공유기 설치
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [numberOfHouse, numberOfRouter] = input[0].split(' ').map(Number);
let [...house] = input.slice(1).map(Number).sort((a,b) => a-b);

// house는 1부터 numberOfHouse 공간에 위치할 수 있음
let start = 1;
let end = house[house.length - 1] - house[0];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let value = house[0];
  let installedRouter = 1;

  for (let i=1; i <numberOfHouse; i++) {
    if (house[i] >= value + mid) {
      value = house[i];
      installedRouter++;
    }
  }
  if (installedRouter >= numberOfRouter) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}
console.log(result);