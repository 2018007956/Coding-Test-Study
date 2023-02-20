N = int(input()) # province
budget = list(map(int, input().split()))
M = int(input()) # total budget

max_limit = M//4
total = 0
cnt = 0
for i in budget:
    if i < max_limit:
        total += i
    else:
        cnt += 1 # 예산을 더 올릴 지방 수
        total += max_limit

print(max_limit + (M - total)//cnt if cnt!=0 else max(budget))