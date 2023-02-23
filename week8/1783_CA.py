N, M = map(int, input().split())

move = [[2,1],[1,2],[-1,2],[-2,1]]
cnt = 1
prev_cnt = 1
x, y = 0,0
visited = [[False]*M for _ in range(N)] 
visited[0][0] = True
if N>M:
        m = (move[1],move[2])
else:
    m = (move[0],move[3])

while prev_cnt!=cnt:
    for i,j in m:
        nx = x + i
        ny = y + j
        if nx<0 or ny<0 or nx>=M or ny>=N:
            continue
        if not visited[nx][ny]:
            visited[nx][ny] = True
            cnt += 1
    prev_cnt = cnt
print(cnt)

'''
[병든 나이트의 이동 횟수가 4번보다 적지 않다면, 
이동 방법을 모두 한 번씩 사용해야 한다]
이 조건을 어떻게 적용시켜야 할까?
'''