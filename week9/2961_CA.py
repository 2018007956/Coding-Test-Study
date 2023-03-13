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
    s = prod(list(zip(*i))[0])
    b = sum(list(zip(*i))[1])
    res.append(abs(s-b))
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