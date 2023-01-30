# 2xn 타일링 2
# f(n) = f(n-1) + f(n-2) * 2

import sys
input = sys.stdin.readline()

n = int(input.strip())

dp = [0] * n

dp[0] = 1

if n > 1:
    dp[1] = 3

for i in range(2, n):
    dp[i] = dp[i-1] + (dp[i-2] * 2)

print(dp[n-1] % 10007)
