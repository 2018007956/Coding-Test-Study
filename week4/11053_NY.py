# 가장 긴 수열 문제

import sys

n = int(sys.stdin.readline().strip())
seq = list(map(int, sys.stdin.readline().split()))

# 숫자 하나의 길이는 1이니까
dp = [1] * n

for i in range(0, n):    
    for j in range(i-1, -1, -1):
        # seq[i]가 가장 긴 수열에 포함되는 경우와
        # 포함되지 않았을 때를 비교해서 더 긴 것 선택
        if seq[i] > seq[j]:
            dp[i] = max(dp[i], dp[j]+1)

print(max(dp))