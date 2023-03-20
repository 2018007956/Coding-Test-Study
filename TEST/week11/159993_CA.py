from collections import deque
dx=[0,0,-1,1]
dy=[-1,1,0,0]
    
def bfs(maps, visited, x,y):
    q = deque([[x,y]]) # 괄호 두개 넣어줘야지 한번에 빼짐
    visited[x][y]=True
    cnt = 0
    chk_exit = False
    while q:
        [x,y] = q.popleft()
        for i in range(4):
            nx=x+dx[i]
            ny=y+dy[i]
            
            if nx<0 or ny<0 or nx>=len(maps[0]) or ny>=len(maps):
                continue
            
            if not visited[nx][ny]:
                if maps[nx][ny]=='O':
                    q.append([nx,ny])
                    cnt += 1
                    visited[nx][ny]=True
                elif maps[nx][ny] =='E':
                    chk_exit = True
                    return cnt+1 
                elif  maps[nx][ny]=='L': # visited, q reset하고 다시 exit 찾아감
                    if chk_exit: #exit을 밟아서 다시 되돌아가야하는 경우만 visit reset
                        visited = [[False] * len(maps) for _ in range(len(maps[0]))]
                        q = deque([[nx,ny]])
                    else:
                        q.append([nx,ny])
                    visited[nx][ny] = True
                    cnt += 1
        print(q)
    return -1
            
def solution(maps):
    y, x = len(maps), len(maps[0])
    start = [(i,j) for i in range(y) for j in range(x) if maps[i][j]=='S']
    visited = [[False] * y for _ in range(x)]
    cnt = bfs(maps, visited, start[0][0],start[0][1]) 
    return cnt

print(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]))

'''
##### 푸는중 #####

L을 처리하는 로직:
L을 밟았을 때 
    1. 이전에 exit을 밟지 않았다면 그대로 계속해서 Exit 찾아감
    2. 이전에 exit을 밟았다면 visited, q를 reset하고 
    (현재 위치L이 start라고 생각하면 똑같음) exit 찾아감
'''