import sys
from itertools import chain
input = sys.stdin.readline
sys.setrecursionlimit(10000)

def find_one_color(paper):
    global minus, zero, one
    if len(set(chain(*paper)))==1:
        if paper[0][0]==-1:
            minus += 1
        elif paper[0][0]==0:
            zero += 1
        elif paper[0][0]==1:
            one += 1
        return
    
    N = len(paper[0])
    find_one_color([row[0:N//3] for row in paper[0:N//3]])
    find_one_color([row[N//3:N//3*2] for row in paper[0:N//3]])
    find_one_color([row[N//3*2:] for row in paper[0:N//3]])

    find_one_color([row[0:N//3] for row in paper[N//3:N//3*2]])
    find_one_color([row[N//3:N//3*2] for row in paper[N//3:N//3*2]])
    find_one_color([row[N//3*2:] for row in paper[N//3:N//3*2]])

    find_one_color([row[0:N//3] for row in paper[N//3*2:]])
    find_one_color([row[N//3:N//3*2] for row in paper[N//3*2:]])
    find_one_color([row[N//3*2:] for row in paper[N//3*2:]])


N = int(input())
paper = []
for i in range(N):
    paper.append(list(map(int,input().split())))

minus = 0
zero = 0
one = 0
find_one_color(paper)
print(minus)
print(zero)
print(one)