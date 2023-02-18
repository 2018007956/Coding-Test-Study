from collections import deque
F, S, G, U, D = map(int, input().split())
# F: 총 층수, S: 강호 위치, G: 링크 위치
cnt = 0
def bfs(x, U, D):
    global cnt 
    q = deque([x])
    # visited[x] = True
    while q:
        x = q.popleft()
        cnt += 1
        if x == G:
            print(cnt)
            return
        q.append(x+U)
        q.append(x-D)

# visited = [False] * (n + 1)
bfs(S, U, D)

'''
F, S, G, U, D = map(int, input().split())
# F: 총 층수, S: 강호 위치, G: 링크 위치
cnt = 0
use_stairs = False 

def upstairs(S,G,U):
    global cnt
    if U == 0:
        return
    
    while S<G and S+U<=1000000:
        S += U
        cnt += 1
    return S,U

def downstairs(S,G,D):
    global cnt
    if D == 0:
        return
    
    while S>G and S-D>=1:
        S -= D
        cnt += 1
    return S,D

while S!=G:
    if S<G:
        if U!=0:
            prev = S
            S,U = upstairs(S,G,U)
            if prev == S: # S<G인데 S+U<=1000000조건에 걸려서 더이상 안올라 가는 경우
                S -= D
                cnt += 1
        elif U==0:
            print('use the stairs')
            break
        
    if S!=G and S>G:
        if D!=0:
            prev = S
            S,D = downstairs(S,G,D)
            if prev == S: # S>G인데 S-D>=1조건에 걸려서 더이상 안내려 가는 경우
                S += U
                cnt += 1
        elif D==0:
            print('use the stairs')
            break
        
    if (U==0 and D==0) or U==D:
        print('use the stairs')
        break

else:
    print(cnt)


직관적으로 짜버리면 반례가 나올 수 있음
BFS로 구현하게 되면 그런 경우를 방지할 듯

처음 코드)
S<G라면 S<G가 아닐 때까지 U을 더해줌
S>G가 되면 같아질때까지 D함, down 했는데 안 같아지면 use_stairs
-> 아래 문제 발생

반례) 
14 6 10 2 3
정담:2
up만했는데 도착한경우

80 45 32 5 19
정답: 7
45 26 31 36 17 22 27 32
S가 G보다 작아졌다 커졌다가 여러번 반복하는 경우

수정된 코드)
S!=G인 동안 계속 while문 돌리면서 U, D 진행

=> 74%까지 올라가다가 틀렸습니다 뜸
작은 반례에 걸리는 듯

반례) 범위 체크에 0도 포함되어 있음***
100 100 1 1 100
정답: use the stairs
내답: 2

수정)
Down 후 S<1 또는 UP 후 S>1000000 일때 use the stairs 출력
=> 7% 가다가 틀렸습니다

반례)
20 20 1 1 4
정답: 6
내답: use the stairs
20
16
12
8
4
"5" <- S(4)>G(1)인데 Up을 해야함***
1
=> 다 돌리고 S<1이면 stairs 출력이 아니라 while 돌릴 때 S<1 전까지 돌려야함
다시 올라갔다 내려올 수 있으니까
=> S>G인데도 down이 더이상 안되는 경우 UP 한번 해줌

100 50 51 4 6
정답: use the stairs
내답: 무한루프
50
54
48
52
46
54
=> 얘는 어떤 경우지..
=> 경우의 수가 너무 많음
=> BFS로 풀기..
'''