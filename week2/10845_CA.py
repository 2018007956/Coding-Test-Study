from collections import deque
import sys
d = deque()

N = int(input())
for i in range(N):
    a = sys.stdin.readline().split()
    if a[0] =='push':
        d.append(a[1])
    elif a[0] == 'pop':
        if d:
            print(d.popleft())
        else:
            print(-1)
    elif a[0] == 'size':
        print(len(d))
    elif a[0] == 'empty':
        if d:
            print(0)
        else:
            print(1)
    elif a[0] == 'front':
        if d:
            print(d[0])
        else:
            print(-1)
    elif a[0] == 'back':
        if d:
            print(d[-1])
        else:
            print(-1)