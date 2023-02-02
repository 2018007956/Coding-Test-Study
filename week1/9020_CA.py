def is_prime_number(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True

def goldbach(x):
    m = x//2
    while m > 0:
        if is_prime_number(m) and is_prime_number(x-m):
            print(m, x-m)
            break
        else:
            m-=1

N = int(input())
for i in range(N):
    goldbach(int(input()))