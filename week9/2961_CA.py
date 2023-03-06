from itertools import combinations
from math import prod

N = int(input())
cook = []
for _ in range(N):
    S, B = map(int, input().split())
    cook.append([S,B])
    
comb_cook = []
for i in range(1,N+1):
    comb_cook.extend(list(combinations(cook,i)))
# print(comb_cook)

res = []
for i in comb_cook:
    if len(i)==1:
        res.append(abs(i[0][1]-i[0][0]))
    else:
        m = prod(list(zip(*i))[0])
        s = sum(list(zip(*i))[1])
        res.append(abs(m-s))
print(min(res))

'''
누적곱
1. reduce
from functools import reduce
reduce(lambda x,y:x*y, list(zip(*i))[0])
2. prod
from math import prod
prod([1,2,3,4,5])
'''