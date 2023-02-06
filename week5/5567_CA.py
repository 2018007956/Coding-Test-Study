from collections import deque
def bfs(x):
    depth = 0
    q = deque([x])
    visited[x] = True
    while q:
        x = q.popleft()
        cnt = False # 한 depth당 한 번 체크
        for y in graph[x]:
            if not visited[y]:
                q.append(y)
                visited[y] = True
                cnt = True
        if cnt:
            depth += 1
        if depth == 2:
            break

n = int(input()) # node
m = int(input()) # edge
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    # Undirected graph
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (n + 1)
bfs(1)
print(visited.count(True)-1) # 본인(1) 뺌