import sys
import heapq as hq
input = sys.stdin.readline

N = int(input()) # city
M = int(input()) # bus
INF = 1e8

graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)
distance = [INF] * (N+1)

for _ in range(M):
    # u: start node, v: end node, w: weight
    u, v, w = map(int, input().split()) 
    graph[u].append((v, w))

start, end = map(int, input().split())

def dijkstra(start):
    q = []
    hq.heappush(q, (0, start)) # (우선순위, 값)
    distance[start] = 0
    
    while q:
        dist, now = hq.heappop(q) 

        if distance[now] < dist:
            continue
        
        for adj in graph[now]:
            if dist+adj[1] < distance[adj[0]]: # adj[0]: end note, adj[1]: weight
                distance[adj[0]] = dist + adj[1]
                hq.heappush(q, (dist+adj[1], adj[0]))

dijkstra(start)
print(distance[end])