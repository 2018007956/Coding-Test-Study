import sys 
from itertools import chain
from collections import deque

input = sys.stdin.readline
M, N = map(int, input().split())
box = []
for i in range(N):
    box.append(list(map(int, input().split())))

# up, down, left, right
row_dr = [0,0,-1,1]
col_dr = [-1,1,0,0]

def bfs():
    while q:
        x,y = q.popleft()
        for k in range(4):
            nx = x+row_dr[k]
            ny = y+col_dr[k]
            
            if nx<0 or ny<0 or nx>=N or ny>=M:
                continue

            if not box[nx][ny]:
                box[nx][ny]=box[x][y]+1
                q.append([nx,ny])

q = deque()
for i in range(N):
    for j in range(M):
        if box[i][j]==1: # 그냥 if box[i][j]라고하면 0이 아닌 모든 것(-1)이 들어감 
            q.append([i,j])

bfs()
print(-1 if 0 in list(chain(*box)) else max(list(chain(*box)))-1)

'''
2차원 리스트 flatten: list(chain(*box))

이전 코드)
# up, down, left, right
row_dr = [0,0,-1,1]
col_dr = [-1,1,0,0]

visited = [[False]*M for _ in range(N)]
day = 0
tmp = []
while tmp != box: # box에 변화가 없으면 종료
    tmp = [item[:] for item in box] # deep copy
    for i in range(N):
        for j in range(M):
            if not visited[i][j] and tmp[i][j]==1:
                visited[i][j] = True
            
                for k in range(4):
                    nx = i+row_dr[k]
                    ny = j+col_dr[k]
                    
                    if nx<0 or ny<0 or nx>=N or ny>=M:
                        continue
                    
                    if box[nx][ny]==-1:
                        pass
                    else:
                        box[nx][ny]=1     
    day += 1

print(-1 if 0 in list(chain(*box)) else day-1)

시간초과
-> queue로 BFS 구현
'''