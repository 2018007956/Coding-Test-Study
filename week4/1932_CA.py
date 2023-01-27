n = int(input())

sum_lst = [[int(input())]]
for _ in range(n-1):
    tri =list(map(int, input().split()))
    
    tmp = [sum_lst[-1][0] + tri[0]] # 젤 왼쪽
    if len(tri) ==2:
        tmp.append(sum_lst[-1][0]+tri[1])
    elif len(tri)>2:
        for i in range(len(sum_lst[-1])-1):
            tmp.append(max(sum_lst[-1][i],sum_lst[-1][i+1]) + tri[i+1]) # 가운데
        tmp.append(sum_lst[-1][-1] + tri[-1]) # 젤 오른쪽
    sum_lst.append(tmp)
print(max(sum_lst[-1]))

'''
7
3 8
8 1 0
--->
7
10 15
18 16 15

다른 사람 풀이)
위에서 아래로 순차적으로 진행되는 과정 속에서 최대인 경우를 찾음 -> DP
column끼리의 계산과정 속 버리는 값은 버리고 챙기는 값은 챙김
1. i행 0번쨰 항목: i-1행 0번째 항목을 그대로 더해줌
2. i행 i번째 항목: i-1행 i번째 항목을 그대로 더해줌
3. 다른 경우들: i-1행 j-1번째 항목과 j번쨰 항목 중 더 큰 경우 더해줌
for i in range(1,n)
    for j in range(0, i+1):
        if j==0:
            dp[i][0] += dp[i-1][0]
        elif j==i:
            dp[i][j] += dp[i-1][j-1]
        else:
            dp[i][j] += max(dp[i-1][j-1],dp[i-1][j])
print(max(dp[n-1]))
'''