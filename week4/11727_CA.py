n = int(input())
dp = [0,1]
for i in range(2,n+1):
    if i%2==0:
        dp.append(dp[i-1]*2+1)
    else:
        dp.append(dp[i-1]*2-1)
print(dp[n] % 10007)

'''
f(n-1)+f(n-2)*2
'''