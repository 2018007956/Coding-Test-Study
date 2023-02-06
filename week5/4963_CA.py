island = 0
def dfs(x,y):
    global island
    visited[x][y]=True
    try:
        if not visited[x]
    # if jido[x][y]: # (1) ground
    #     dfs(y)

while True:
    w, h = map(int, input().split())
    if w==h==0:
        break

    jido = []
    for _ in range(h):
        jido.append(input().split())

    # Search
    visited = [False*len(jido[0])] * len(jido)
    for i in range(h):
        for j in range(w):
            dfs(i,j)
    print(island)