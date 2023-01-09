# 소인수분해
n = int(input())
# soinsu = list()

for i in range(2, n+1):
    while(n%i == 0):
        n = n/i
        print(i)

# for j in range(0, len(soinsu)):
#     print(soinsu[j])