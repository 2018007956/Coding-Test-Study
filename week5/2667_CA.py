cnt = 0
res = []
def dfs(x,y):
    global cnt
    if visited[x][y]:
        return
    else:
        print(x,y,cnt)
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
            
            # 갈 곳이 없는 경우) 사방이 방문했거나 0인 경우
            if (visited[x+1][y] or arr[x+1][y]=='0')\
                and (visited[x][y+1] or arr[x][y+1]=='0')\
                and (visited[x-1][y] or arr[x-1][y]=='0')\
                and (visited[x][y-1] or arr[x][y-1]=='0'):
                print(x,y,'에서 막힘')
                print(visited)
                res.append(cnt+1)
                cnt = 0
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

print(sorted(res)) # 1이 아닌 수의 개수: 단지수