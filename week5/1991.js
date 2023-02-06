// 트리 순회
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tree = input.slice(1);

let result = '';
const treeNode = {};

for (let i = 0; i < tree.length; i++) {
  const [node, left, right] = tree[i].split(' ');
  treeNode[node] = [left, right];
}

/* treNode = {
                A: [ 'B', 'C' ],
                B: [ 'D', '.' ],
                C: [ 'E', 'F' ],
                E: [ '.', '.' ],
                F: [ '.', 'G' ],
                D: [ '.', '.' ],
                G: [ '.', '.' ]
            }
*/

function preOrder (node) {
	if (node === '.') return;
    
    const [left, right] = treeNode[node];
    result += node; 
    preOrder(left); 
    preOrder(right);
}

function inOrder (node) {
	if (node === '.') return;
    
    const [left, right] = treeNode[node];
    inOrder(left);
    result += node;
    inOrder(right);
}

function postOrder (node) {
	if (node === '.') return;
    
    const [left, right] = treeNode[node];
    postOrder(left);
    postOrder(right);
    result += node;
}

//root node는 A로 주어짐
preOrder('A');
result += '\n';
inOrder('A');
result += '\n'
postOrder('A');
result += '\n';

console.log(result);