// 우수 마을
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const number_of_town = input.shift();
const number_of_citizens_in_town = input.shift().split(' ').map(Number);
let result = 0;
let excellent_towns = [];

class Tree{
    constructor(n){
        this.tree = new Object();
        for(let i=0; i<n; i++){
            this.tree[i+1] = [];
        }
    }
    insert(src_index, dest_index){
        this.tree[src_index].push(dest_index);
        this.tree[dest_index].push(src_index); // 무방향 그래프이므로 둘 다 삽입
    }

    delete_neigbor(src_index){
        if(this.tree[src_index] == 0) return;

        for(let i=0; i<this.tree[src_index].length; i++){
            for(let j=0; j<this.tree[src_index][i].length; j++){
                this.tree.delete_neigbor(this.tree[src_index][i][j]);
            }
            this.tree[this.tree[src_index][i]] = [];
        }
    }
};

// 그래프 생성
let tree = new Tree(number_of_town);
input.forEach(element => {
    const [src, dest] = element.split(' ').map(Number);
    tree.insert(src, dest);
});

for(let i=1; i<=number_of_town; i++){
    tree.delete_neigbor(i);
    console.log(tree.tree)
}

