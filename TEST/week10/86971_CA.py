from collections import deque
from itertools import chain
def check_wire(wires):
    visited = [False] * len(wires)
    cnt = 0
    q = deque([wires[0]])
    visited[0] = True
    while q:
        x = q.popleft()
        for i in wires:
            if x[1] == i[0]:
                idx = (list(chain(*wires)).index(x[1]))//2
                if not visited[idx]:
                    visited[idx]=True
                    q.append(wires[idx])
                    cnt +=1
    return cnt

def solution(n, wires):
    res = []
    for i in range(n):
        cnt = check_wire(wires[:i]+wires[i+1:])
        res.append(abs(cnt- (n-cnt)))  
    print(res)
    return max(res)

print(solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))