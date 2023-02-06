# 순열 cycle

import sys
input = sys.stdin.readline

data = []
visited = []
def detect_cycle(start_pos):
    if visited[start_pos]:
        return False

    visited[start_pos] = True

    if data[visited[data[start_pos]]]:
        return True
    
    return detect_cycle(data[start_pos])

n = int(input().strip())
for i in range(n):
    case = int(input().strip())
    data = [0]
    data.extend(map(int, input().split()))
    visited = [False] * (case+1)
    count = 0

    for j in range(1, case+1):
        if detect_cycle(data[j]):
            count += 1
    
    print(count)