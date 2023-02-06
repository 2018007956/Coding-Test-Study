# 트리 순회

# class Node:
#     def __init__(self.item):
#         self.item = item
#         self.left = None
#         self.right = None

# class BinaryTree():
#     def __init__(self):
#         self.root = None

import sys

def preorder(tree, n):
        if n != '.':
            print(n, end='')
            preorder(tree, tree[n][0])
            preorder(tree, tree[n][1])
    
def inorder(tree, n):
        if n != '.':
            inorder(tree, tree[n][0])
            print(n, end='')
            inorder(tree, tree[n][1])

def postorder(tree, n):
        if n != '.':
            postorder(tree, tree[n][0])
            postorder(tree, tree[n][1])
            print(n, end='') 
    
n = int(sys.stdin.readline().strip())

tree = {}
for i in range(n):
    root, left, right = sys.stdin.readline().strip().split()
    tree[root] = (left, right)

preorder(tree, 'A')
print()
inorder(tree, 'A')
print()
postorder(tree, 'A')