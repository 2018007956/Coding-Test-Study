class Node:
    def __init__(self, item):
        self.item = item
        self.left = None
        self.right = None

class BinaryTree():
    def __init__(self):
        self.root = None
    
    def preorder(self, n):
    # present -> left_child -> right_child
        if n!='.':
            print(n.item, end='')
            self.preorder(n.left)
            self.preorder(n.right)

    def inorder(self, n):
    # left_child -> present -> right_child
        if n!='.':
            self.preorder(n.left)
            print(n.item, end='')
            self.preorder(n.right)

    def postorder(self, n):
    # left_child -> right_child -> present
        if n!='.':
            self.preorder(n.left)
            self.preorder(n.right)
            print(n.item, end='')


N = int(input())
tree = BinaryTree()

for _ in range(N):
    present,left,right = input().split()

    p = Node(present)
    l = Node(left)
    r = Node(right)
    p.left = l
    p.right = r

    if _ == 0:
        tree.root = p

print(tree.preorder(tree.root))
print(tree.inorder(tree.root))
print(tree.postorder(tree.root))