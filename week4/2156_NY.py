# 포도주 시식
# 연속 3잔이 안되게 어떻게 하지?
# LCS 문제랑 되게 비슷했어!

import sys

n = int(sys.stdin.readline().strip())
data = []
for i in range(0, n):
    data.append(int(sys.stdin.readline().strip()))

d = [0] * n

d[0] = data[0]
if n > 1:
    d[1] = d[0] + data[1]

if n>2 :
    d[2] = max(data[2] + data[1], data[2] + data[0], d[1])

for i in range(3, n):
    d[i] = max(data[i] + data[i-1] + d[i-3], data[i] + d[i-2], d[i-1])

print(d[n-1])