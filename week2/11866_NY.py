# 요세푸스 문제 0

n, k = map(int, input().split())
data = list()
for i in range(0, n):
    data.append(i+1)

index = k-1
result = list()
for i in range(0, n):
    result.append(data.pop(index))
    if len(data)!=0:
        index = (index + k - 1) % len(data)

print("<", end='')
print(*result, sep=', ', end='')
print(">")
