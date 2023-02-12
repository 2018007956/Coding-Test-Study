import sys
input = sys.stdin.readline

# up, down, left, right
row_dr = [0,0,-1,1]
col_dr = [-1,1,0,0]

def dfs(x,y):
    global guyuk
    visited[x][y] = True
    for i in range(4):
        nx = x+row_dr[i]
        ny = y+col_dr[i]
        if nx<0 or ny<0 or nx>=N or ny>=len(pic[0]):
            continue
        
        if not(visited[nx][ny]):
            if pic[x][y]==pic[nx][ny]:            
                visited[nx][ny] = True
                dfs(nx,ny)
            # else:
            #     guyuk += 1
            

N = int(input())
pic = []
for _ in range(N):
    pic.append(input())

visited = [[False]*len(pic[0]) for _ in range((N))]
guyuk = 0
for i in range(N):
    for j in range(len(pic[0])):
        if not visited[i][j]:
            dfs(i,j)
            guyuk += 1
print(guyuk, end=' ')

# 적록색약인 경우
visited = [[False]*len(pic[0]) for _ in range((N))]
for i in range(N):
    pic[i] = pic[i].replace('R','G')
    pic[i] = pic[i].replace('r','g')
    
guyuk = 0
for i in range(N):
    for j in range(len(pic[0])):
        if not visited[i][j]:
            dfs(i,j)
            guyuk += 1
print(guyuk)