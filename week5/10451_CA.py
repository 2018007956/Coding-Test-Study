import sys
input = sys.stdin.readline

cntComponent = 0
def dfs(x):
    global cntComponent
    if visited[x]:
        return
    else:
        visited[x] = True
        if not(visited[graph[x]]):
            dfs(graph[x])
        else:
            cntComponent += 1

T = int(input())
for _ in range(T):
    N = int(input())
    arr = list(map(int, input().split()))
    graph = [0]*(N+1)
    for i in range(1,N+1):
        graph[i]=arr[i-1]
        
    visited = [False] * (N + 1)
    for i in range(1,N+1):
        dfs(i)
    print(cntComponent) 
    cntComponent = 0           