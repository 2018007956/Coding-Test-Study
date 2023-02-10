global cnt
res = []
def dfs(x,y):
    global cnt
    if visited[x][y]:
        return
    else:
        # print(x,y,cnt)
        visited[x][y]=True
        try:
            if not visited[x+1][y] and arr[x+1][y]=='1': # down
                cnt += 1
                dfs(x+1,y)
            if not visited[x][y+1] and arr[x][y+1]=='1': # right
                cnt += 1
                dfs(x,y+1) 
            if not visited[x-1][y] and arr[x-1][y]=='1': # up
                cnt += 1
                dfs(x-1,y)
            if not visited[x][y-1] and arr[x][y-1]=='1': # left
                cnt += 1
                dfs(x,y-1)
            
        except:
            pass

N = int(input())
arr = []
for _ in range(N):
    arr.append(input())
    
visited = [[False]*N for _ in range(N)]
for i in range(N):
    for j in range(N):
        dfs(i,j)
        print(cnt)
        cnt = 0

print(sorted(res)) # 1이 아닌 수의 개수: 단지수