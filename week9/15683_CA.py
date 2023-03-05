from collections import deque
def dfs(x):
    for direction in range(len(cctv[arr[x][y]])):
        # arr reset
        chk = [x[:] for x in arr]
        for k in direction:
            nx = x+row_dr[k]
            ny = y+col_dr[k]
            if nx<0 or ny<0 or nx>=M or ny>=N or chk[nx][ny]!=0:
                continue
            dfs(y)

N, M = map(int, input().split())
arr = []
for _ in range(N):
    arr.append(input().split())

# up, down, left, right
# 0     1    2      3
row_dr = [0,0,-1,1]
col_dr = [-1,1,0,0]
cctv = [
    [], 
    [[0],[1],[2],[3]], # cctv1
    [[0,1],[2,3]], # cctv2
    [[0,3],[3,1],[1,2],[0,2]], # cctv3
    [[0,1,2],[1,2,3],[2,3,0],[3,0,1]], # cctv4
    [[0,1,2,3]] # cctv5
]

q = deque()
for i in range(N):
    for j in range(M):
        if arr[i][j]!=0 and arr[i][j]!=6:
            q.append([i,j])
dfs()