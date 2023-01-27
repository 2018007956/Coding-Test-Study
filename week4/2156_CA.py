n = int(input())

w = [0]
for _ in range(n):
    w.append(int(input()))

dp = [0]
dp.append(w[1])
if n > 1:
    dp.append(w[1] + w[2])
for i in range(3,n+1):
    dp.append(max(dp[i-1], dp[i-3]+w[i-1]+w[i], dp[i-2]+w[i]))

print(dp[-1])
'''
6 10 13 9 8 1
.  .    . .   =>33
알고리즘이 도저히 생각 안나서 다른 풀이 참고)
하나하나 계산해보며 규칙 식 만듬

참고) https://www.acmicpc.net/board/view/60664
'''