# 소수 찾기
n = int(input())
data = list(map(int, input().split()))
count = 0

for i in range(0, n):
    flag = 0
    if data[i] == 1:
        continue

    for j in range(2, data[i]):
        if data[i]%j==0:
            flag += 1
    
    if flag==0:
        count += 1

print(count)
