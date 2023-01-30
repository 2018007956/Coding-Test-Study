# 이친수(primary number) = 0과 1로만 이루어진 수
# 0으로 시작하지 않음 / 1이 두번 연속으로 나타나지 않음
# f(n) = f(n-1) + f(n-2)

import sys
input = sys.stdin.readline()

n = int(input.strip())
dp = [0] * n

# f(1) = 1
dp[0] = 1

if n > 1:
    # f(2) = 1
    dp[1] = 1

# f(n) = f(n-1) + f(n-2)
for i in range(2, n):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n-1])