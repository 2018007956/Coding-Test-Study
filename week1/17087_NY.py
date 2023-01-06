# 숨바꼭질 6
# 수빈이와 동생들 사이의 거리의 최대공약수

# def checkYaksu(lst, num):
#     for i in range(0, len(lst)):
#         if lst[i]%num != 0:
#             return False
    
#     return True

def GCD(a, b):
    while b > 0:
        a = a%b
        a, b = b, a
    return a

n, s = map(int, input().split())
location = list(map(int, input().split()))

dist = list()
for i in range(0, n):
    dist.append(abs(s - location[i]))

gcd = dist[0]
for j in range(1, n):
    gcd = GCD(dist[j], gcd)

print(gcd)