import sys
input = sys.stdin.readline

def find_max(start, end):
    while start <= end:
        total = 0
        mid = (start + end)//2
        for cost in budget:
            if cost > mid:
                total += mid
            else:
                total += cost
        
        if total <= M:
            start = mid + 1
        else:
            end = mid - 1   
    return end

N = int(input()) # province
budget = list(map(int, input().split()))
M = int(input()) # total budget
print(find_max(0, max(budget)))

'''
반례)
10
1 1 1 1 11 11 11 11 11 100
100
정답: 41
내답: 100
=> else 문을 안쓰면 풀림
근데, 아래 예제하면 무한반복 걸림
5
70 80 30 40 100
450
=> while 문 마지막에 lack_budget의 모든 값을 확인하는 코드 추가
------------------------------------------------------------------
N = int(input()) # province
budget = list(map(int, input().split()))
M = int(input()) # total budget

max_limit = M//N
total = 0
lack_budget = []
for i in budget:
    if i <= max_limit:
        total += i
    else:
        lack_budget.append(i) # 예산을 더 올릴 지방
        total += max_limit

chk = False
over = False
if len(lack_budget)!=0:
    left = M-total
    while left>0 and len(lack_budget)>0:# and not over:
        bunbae = left//len(lack_budget)
        if bunbae==0:
            break
        # print(left, max_limit, lack_budget)
        for i in lack_budget:
            if max_limit+bunbae < i: # 하나라도 예산 분배를 넘는게 있으면
                left -= bunbae
                chk = True
            elif max_limit+bunbae == i:
                left -= bunbae
                lack_budget.remove(i)
            # else: # 여기서 걸림
            #     over = True # 분배 완료
        if chk:
            max_limit += bunbae

        # lack_budget에 있는 모든 값이 max_limit+bunbae > i 이면 종료
        if all(max_limit+bunbae>x for x in lack_budget):
            over = True
            break

print(max_limit if lack_budget and not over else max(budget))

=> 틀린 코드인데 반례를 모르겠음
'''