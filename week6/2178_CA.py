from collections import deque

# up, down, left, right
row_dr = [0,0,-1,1]
col_dr = [-1,1,0,0]
def bfs(x, y):
    q = deque([[x,y]])
    # miro[x][y] = 1
    while q:
        x,y= q.popleft()
        for k in range(4):
            nx = x+row_dr[k]
            ny = y+col_dr[k]
            
            if nx<0 or ny<0 or nx>=N or ny>=M:
                continue

            if miro[nx][ny]==1:
                miro[nx][ny] = miro[x][y]+1    
                q.append([nx,ny])  

N, M = map(int, input().split())
miro = []
for _ in range(N):
    miro.append(list(map(int, list(input()))))

bfs(0,0)
print(miro[N-1][M-1])

'''
miro[0][0]이 몇 번 더해져서 3으로 나오지만 결과 출력엔 문제 없으므로 패스
'''