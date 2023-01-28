# idea: tree로 data 구현 -> 이거 binary tree 아님!!!!
# DP: 2차원 배열 이용해서 이전 값 저장
# 근데 space complexity가 신경쓰임...
# -> 그래서 data를 받을 때 만들어둔 space 사용

import sys

n = int(sys.stdin.readline().strip())
data = list()
for i in range(0, n):
    data.append(list(map(int, sys.stdin.readline().split())))

index = 2
for i in range(1, n):
    for j in range(0, index):
        if j==0:
            data[i][j] = data[i-1][j] + data[i][j]

        elif i==j:
            data[i][j] = data[i-1][j-1] + data[i][j]
        
        else:
            data[i][j] = max(data[i-1][j], data[i-1][j-1]) + data[i][j]
    
    index += 1

print(max(data[n-1]))