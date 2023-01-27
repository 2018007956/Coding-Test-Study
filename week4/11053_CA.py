N = int(input())
A = list(map(int, input().split()))

dp = [[A[0],1]] 
for a in A[1:]:
    lst = [x for x in dp if x[0]<a]
    if lst:
        dp.append([a,max(lst,key=lambda x:x[1])[1]+1])
    else:
        dp.append([a,1])

print(max([x[1] for x in dp]))

'''
가장 긴 오름차순 부분 수열
10
1 2 1 3 7 2 3 4 5 6
-> 1 2 3 7
-> 1 2 3 4 5 6

알고리즘: 자기 자신보다 작은 숫자들 중 가장 큰 길이를 구하고 그 길이에 +1

반례)5
1 4 2 3 5
정답 4
내답 3
lst = [[1, 1], [4, 2], [2, 2], [3, 3]]
여기서 max(lst)[1] 을 하면 [4,2] -> 2가 나오고 거기에 1을 더하니 [5,3]이 됨
index[0]들 중 max 값이 아니라 index[1]에서 max값 찾아야 함
'''