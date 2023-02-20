import sys
from itertools import chain
input = sys.stdin.readline
sys.setrecursionlimit(10000)

def find_one_color(paper):
    global white, blue
    if len(set(chain(*paper)))==1:
        if paper[0][0]==0:
            white += 1
        if paper[0][0]==1:
            blue += 1
        return
    
    N = len(paper[0])
    find_one_color([row[0:N//2] for row in paper[0:N//2]])
    find_one_color([row[N//2:] for row in paper[0:N//2]])
    find_one_color([row[0:N//2] for row in paper[N//2:]])
    find_one_color([row[N//2:] for row in paper[N//2:]])


N = int(input())
paper = []
for i in range(N):
    paper.append(list(map(int,input().split())))

blue = 0
white = 0
find_one_color(paper)
print(white)
print(blue)

'''
<2차원 배열 slicing>
list1 =[[1,2,3,4],
        [5,6,7,8]]
list1[0:2][0:2]하면 [[1,2],[5,6]]이 출력 될 것 같지만
list1[0:2]=[[1,2,3,4],[5,6,7,8]] 여기서 다시 [0:2]하므로
[[1,2,3,4],[5,6,7,8]] 그대로 나온다
numpy를 사용하면 [[1,2],[5,6]]으로 잘 나옴
=> [row[j:j+m] for row in field[i:i+n]] 
'''