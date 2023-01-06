# 골드바흐의 추측

def checkPrime(a):
    for i in range(2, a):
        if a % i==0:
            return False
    
    return True

n = int(input())
data = list()
for i in range(0, n):
    data.append(int(input()))

for j in range(0, n):
    first = int(data[j]/2)
    second = int(data[j]/2)
    
    while not (checkPrime(first) and checkPrime(second)):
        first -= 1
        second +=1
    
    print(first, second)
