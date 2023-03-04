from itertools import permutations
def is_prime_number(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True 

def solution(numbers):
    cnt = 0
    numbers =list(numbers)
    num=[]
    for i in range(1,len(numbers)+1):
        for j in list(permutations(numbers,i)):
            num.append(int(''.join(j)))
    num=list(set(num))
    for n in num:
        if n!=0 and n!=1 and is_prime_number(n):
            print(n)
            cnt+=1
    return cnt