# 부분 수열의 합

from itertools import combinations

n, s = map(int, input().split())
data = list(map(int, input().split()))

count = 0

for i in range(1, n+1):
    combi = list(combinations(data, i))
    for j in range(0, len(combi)):
        if sum(combi[j]) == s:
            count += 1

print(count)