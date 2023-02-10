from collections import deque
def bfs(x, y):
    global cnt
    q = deque((x,y))
    visited[x][y] = True
    while q:
        (x,y)= q.popleft()
        cnt += 1

        if miro[x][y]==1 and not visited[x][y]:
            q.append((x,y))
            visited[x][y] = True  
        

N, M = map(int, input().split())
miro = []
for _ in range(N):
    miro.append(list(input()))
visited = [[False]*M for _ in range(N)]
cnt = 0
bfs(0,0)
print(cnt)