// 우수 마을
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

// 그래프 생성
let tree = new Tree(number_of_town, number_of_citizens_in_town);
input.forEach(element => {
    const [src, dest] = element.split(' ').map(Number);
    tree.insert(src, dest);
});

// {
//     '1': { city: [ 2 ], citizens: 1000 },
//     '2': { city: [ 1, 3, 6 ], citizens: 3000 },
//     '3': { city: [ 2, 4 ], citizens: 4000 },
//     '4': { city: [ 3, 5 ], citizens: 1000 },
//     '5': { city: [ 4 ], citizens: 2000 },
//     '6': { city: [ 2, 7 ], citizens: 2000 },
//     '7': { city: [ 6 ], citizens: 7000 }
// }
// console.log(temp_town)
for(let i=1; i<=number_of_town; i++){
    let temp_town = Object.assign({}, tree.tree);
    let selected_index = i;
    let total_citizens = 0;

    console.log(temp_town);
    while(true){
        total_citizens += temp_town[selected_index].citizens;
        // console.log('citizens : ' + temp_town[selected_index].citizens)
        next_src = tree.getWoosooTown(selected_index.toString(), temp_town);
        // console.log('next_src');
        // console.log(next_src);
        // console.log(temp_town);
        if(Object.keys(temp_town).length <= 0) break;
        if(next_src.length <= 0) selected_index = getMaxIndexAtCitizens(temp_town, Object.keys(temp_town));
        else selected_index = getMaxIndexAtCitizens(temp_town, next_src);
        
        // selected_index = next_src[0];
        // for(let j=1; j<next_src.length; j++){
        //     if(temp_town[selected_index].citizens < temp_town[next_src[j]].citizens){
        //         selected_index = next_src[j];
        //     }
        // }
// 
        // console.log('selected_index')
        // console.log(selected_index)
    }

    // console.log(total_citizens);
    result.push(total_citizens);
}

console.log(Math.max(...result));