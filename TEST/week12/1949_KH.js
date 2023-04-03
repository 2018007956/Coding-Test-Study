// 우수 마을
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const number_of_town = input.shift();
const number_of_citizens_in_town = input.shift().split(' ').map(Number);
let excellent_towns = [];

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

    select_city(src_city, tree){
        const dest_city = tree[src_city].city;
        // const dest_city = tree[Object.keys(tree)[0]].city;
        // console.log(Object.keys(tree)[0]);
        // console.log(dest_city);
        const citizens = tree[src_city].citizens;

        delete tree[src_city];
        for(let i=0; i<dest_city.length; i++)
            delete tree[dest_city[i]];

        return citizens;
    }
};



// 그래프 생성
let tree = new Tree(number_of_town, number_of_citizens_in_town);
input.forEach(element => {
    const [src, dest] = element.split(' ').map(Number);
    tree.insert(src, dest);
});

let candidate = tree.tree['1'].city.slice();
candidate.push(1);
let result = new Array(candidate.length).fill(0);

console.log(candidate)
// console.log(tree.delete_neigbor('1', Object.assign({}, tree.tree)))

while(candidate.length > 0){
    let candidate_tree = Object.assign({}, tree.tree);
    let src_city = candidate.pop();

    console.log(src_city);
    while(Object.keys(candidate_tree).length > 0){
        console.log(candidate_tree)

        // const max = Math.max(...Object.keys(candidate_tree).map(key => candidate_tree[key].citizens));
        // const src_city = Object.keys(candidate_tree).find(key => candidate_tree[key].citizens == max);

        result[candidate.length-1] += tree.select_city(src_city, candidate_tree);
        // console.log(i)
    }
}
console.log(result);