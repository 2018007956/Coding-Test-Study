# 큐
# queue: first in first out
import sys

class queue:
    def __init__(self):
        self.arr = list()
        self.rear = -1

    def push(self, x):
        # 정수 x를 큐에 넣는 연산
        self.arr.append(x)
        self.rear += 1

    def size(self):
        # 큐에 들어있는 정수 개수
        return (self.rear + 1)

    def empty(self):
        # 큐가 비어있으면 1, 아니면 0
        if self.size() == 0:
            return 1
        else:
            return 0
    
    def front(self):
        # 큐의 가장 앞에 있는 정수, 없으면 -1
        if(self.empty()):
            return -1
        
        else:
            return self.arr[0]

    def pop(self):
        # 가장 앞에 있는 정수 빼고 출력, 없는 경우 -1
        if(self.empty()):
            return -1
        
        else:
            self.rear -= 1
            return self.arr.pop(0)

    def back(self):
        # 큐의 가장 뒤에 있는 정수, 없으면 -1
        if(self.empty()):
            return -1
        
        else:
            return self.arr[self.rear]

n = int(sys.stdin.readline().rstrip())
myQueue = queue()
for i in range(0, n):
    order = sys.stdin.readline().split()
    if order[0] == 'push':
        myQueue.push(order[1])
    
    if order[0] == 'pop':
        print(myQueue.pop())
    
    if order[0] == 'size':
        print(myQueue.size())
    
    if order[0] == 'empty':
        print(myQueue.empty())
    
    if order[0] == 'front':
        print(myQueue.front())

    if order[0] == 'back':
        print(myQueue.back())