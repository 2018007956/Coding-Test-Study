// 우수 마을

/* 
이 나라의 주민들에게 성취감을 높여 주기 위해, 다음 세 가지 조건을 만족하면서 N개의 마을 중 몇 개의 마을을 '우수 마을'로 선정하려고 한다.

    1. '우수 마을'로 선정된 마을 주민 수의 총 합을 최대로 해야 한다.
    2. 마을 사이의 충돌을 방지하기 위해서, 만일 두 마을이 인접해 있으면 두 마을을 모두 '우수 마을'로 선정할 수는 없다. 즉 '우수 마을'끼리는 서로 인접해 있을 수 없다.
    3. 선정되지 못한 마을에 경각심을 불러일으키기 위해서, '우수 마을'로 선정되지 못한 마을은 적어도 하나의 '우수 마을'과는 인접해 있어야 한다.

각 마을 주민 수와 마을 사이의 길에 대한 정보가 주어졌을 때, 주어진 조건을 만족하도록 '우수 마을'을 선정하는 프로그램을 작성하시오. */

let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const number_of_town = input.shift();
const number_of_citizens_in_town = input.shift().split(' ').map(Number);
let result = [];

class Tree{
    constructor(n, citizens){
        this.tree = new Object();
        for(let i=0; i<n; i++){
            this.tree[i+1] = {'city': [], 'citizens': citizens[i]};
        }
    }
    insert(src_index, dest_index){
        this.tree[src_index].city.push(dest_index);
        this.tree[dest_index].city.push(src_index); // 무방향 그래프이므로 둘 다 삽입
    }

    getWoosooTown(src_index, town){
        if(!town.hasOwnProperty(src_index)) return 0;

        let candidate_next_src = [];
        let next_src = [];
        // let totoal_citizens = town[src_index].citizens;

        for(const dest of town[src_index].city){
            if(!town.hasOwnProperty(dest)) continue;
        
            // 인접노드 방문표시
            // totoal_citizens += town[dest].citizens;
            for(const d of town[dest].city){
                candidate_next_src.push(d);
            }
            delete town[dest];
        }

        // src 노드 방문표시
        delete town[src_index];

        candidate_next_src = Array.from(new Set(candidate_next_src));
        for(const i of candidate_next_src){
            if(town.hasOwnProperty(i))
                next_src.push(i);
        }

        return next_src;
        // return totoal_citizens;
    }
};

function getMaxIndexAtCitizens(town, indexs){
    max_index = indexs[0];
    for(let j=1; j<indexs.length; j++){
        if(town[max_index].citizens < town[indexs[j]].citizens)
            max_index = indexs[j];
    }
    return max_index;
}

// Main Part
let totalCitizens = [];

let tree = new Tree(number_of_town, number_of_citizens_in_town); // 그래프 생성
input.forEach(element => {
    const [src, dest] = element.split(' ').map(Number);
    tree.insert(src, dest);
});

let firstCitizen = Object.values(tree.tree).map(v => v.citizens);
let town = Object.keys(tree.tree);
let maxTown = town[firstCitizen.indexOf(Math.max(...firstCitizen))];

totalCitizens.push(getCitizens(Object.assign({}, tree.tree)));

delete tree.tree[maxTown];
totalCitizens.push(getCitizens(Object.assign({}, tree.tree)));


function getCitizens(tree){
    // console.log(tree);
    let totalCitizen = 0;
    while(Object.keys(tree).length > 0){
        let citizen = Object.values(tree).map(v => v.citizens);
        let towns = Object.keys(tree);

        let targetTown = towns[citizen.indexOf(Math.max(...citizen))]; // 최대값 마을
        let nestedTown = tree[targetTown].city; // 인접마을 

        totalCitizen += tree[targetTown].citizens;
        delete tree[targetTown];

        nestedTown.forEach(v => delete tree[v]); // 인접마을 후보 삭제
        // console.log(tree);
    }
    return totalCitizen;
}
// console.log(totalCitizens);
console.log(Math.max(...totalCitizens));
// {
//     '1': { city: [ 2 ], citizens: 1000 },
//     '2': { city: [ 1, 3, 6 ], citizens: 3000 },
//     '3': { city: [ 2, 4 ], citizens: 4000 },
//     '4': { city: [ 3, 5 ], citizens: 1000 },
//     '5': { city: [ 4 ], citizens: 2000 },
//     '6': { city: [ 2, 7 ], citizens: 2000 }, 
//     '7': { city: [ 6 ], citizens: 7000 }
// }

// Algorithm
// 1. 현재 Tree에서 citizens이 최대인 마을 'A'을 찾는다.
// 2. 'A'를 캐시한 뒤 tree에서 지운다.
// 3. 마을과 인접한 마을을 tree에서 지운다.
// 4. tree == null 떄까지 1-3을 반복한다.
// 4-1. 만약, 'A' 마을과 인접한 마을이 없는 경우에는 무시


// for(let i=1; i<=number_of_town; i++){
//     let temp_town = Object.assign({}, tree.tree);
//     let selected_index = i;
//     let total_citizens = 0;

//     console.log(temp_town);
//     while(true){
//         total_citizens += temp_town[selected_index].citizens;
//         // console.log('citizens : ' + temp_town[selected_index].citizens)
//         next_src = tree.getWoosooTown(selected_index.toString(), temp_town);
//         // console.log('next_src');
//         // console.log(next_src);
//         // console.log(temp_town);
//         if(Object.keys(temp_town).length <= 0) break;
//         if(next_src.length <= 0) selected_index = getMaxIndexAtCitizens(temp_town, Object.keys(temp_town));
//         else selected_index = getMaxIndexAtCitizens(temp_town, next_src);
        
//         // selected_index = next_src[0];
//         // for(let j=1; j<next_src.length; j++){
//         //     if(temp_town[selected_index].citizens < temp_town[next_src[j]].citizens){
//         //         selected_index = next_src[j];
//         //     }
//         // }
// // 
//         // console.log('selected_index')
//         // console.log(selected_index)
//     }

//     // console.log(total_citizens);
//     result.push(total_citizens);
// }

// console.log(Math.max(...result));