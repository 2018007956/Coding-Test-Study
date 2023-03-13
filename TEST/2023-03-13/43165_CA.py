from collections import deque
from itertools import chain
def solution(numbers, target):
    q = deque([[numbers[0]]])
    for i in range(1,len(numbers)):
        # tmp = 0
        # while tmp<=2**i: # lv1:2가지, lv2:2^2=4, lv3:2^3=8
        for _ in list(chain(*q)):
            x = q.popleft()
            for j in x:
                print('j:',j)
                q.append([j+numbers[i],j-numbers[i]])
                # tmp+=1
            print(q)
        
    print(q)
    cnt = 0
    for i in q:
        if target in i:
            cnt += 1
    return cnt

print(solution([1,1,1,1,1],3))
# print(solution([4,1,2,1],4))