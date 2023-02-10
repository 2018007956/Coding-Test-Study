import sys 
from itertools import chain
input = sys.stdin.readline
M, N = map(int, input().split())
box = []
for i in range(N):
    box.append(list(map(int, input().split())))

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

'''
시간초과
-> visited 여부 확인 변수 만듬
-> queue로 BFS 구현
-> 
'''