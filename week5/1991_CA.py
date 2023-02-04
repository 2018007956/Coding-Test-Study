class Node:
    def __init__(self, item, left, right):
        self.item = item
        self.left = left
        self.right = right

def preorder(n):
# present -> left_child -> right_child
    print(n.item, end='')
    if n.left!='.':
        preorder(tree[n.left])
    if n.right!='.':
        preorder(tree[n.right])

def inorder(n):
# left_child -> present -> right_child
    if n.left!='.':
        inorder(tree[n.left])
    print(n.item, end='')
    if n.right!='.':
        inorder(tree[n.right])

def postorder(n):
# left_child -> right_child -> present
    if n.left!='.':
        postorder(tree[n.left])
    if n.right!='.':
        postorder(tree[n.right])
    print(n.item, end='')
    

N = int(input())
tree = {}
for _ in range(N):
    node,left,right = input().split()
    tree[node] = Node(item=node, left=left, right=right)

preorder(tree['A'])
print()
inorder(tree['A'])
print()
postorder(tree['A'])