N = int(input())
A = list(map(int, input().split()))

# cnt = 1
# prev = A[0]
# log = []
# for a in A[1:]:
#     if prev < a:
#         cnt += 1
#         prev = a
#     else:
#         log.append(cnt-1) # index 기록

# print(cnt)
# print(log)

# 뭔가 재귀로 풀릴 것 같은데.. 고민 . . 
def max_len(prev, a):
    if prev > a:
        return 
    else:
        return max_len(a+1)
    


'''
가장 긴 오름차순 부분 수열
10
1 2 1 3 7 2 3 4 5 6
-> 1 2 3 7
-> 1 2 3 4 5 6
'''