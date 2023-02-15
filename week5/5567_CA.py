from collections import deque
def bfs(x):
    depth = 0
    q = deque([x])
    visited[x] = True
    while q:
        if depth == 3:
            break
        x = q.popleft()
        cnt = False # 한 depth당 한 번 체크
        for y in graph[x]:
            if not visited[y]:
                q.append(y)
                visited[y] = True
                cnt = True
        if cnt:
            depth += 1
        

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
print(visited)
print(visited.count(True)-1) # 본인(1) 뺌

'''
bfs는 depth구현이 애매
틀린 이유: depth 2의 모든 노드를 탐색하지 않고 한 번만 탐색함
방법
1. 선택적 인풋
상근이 친구의 친구까지만 입력받음
graph[1]에 없으면 패스
but 상근이를 표현하는 1이 나중에 입력되면 잡을 방법이 없음

break조건을 바꿔봄

2. dfs
'''