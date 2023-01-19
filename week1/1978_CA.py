def is_prime_number(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True

cnt=0
N = int(input())
lst = list(map(int, input().split()))
for i in lst:
    if int(i)!=1 and is_prime_number(int(i)):
        cnt+=1
print(cnt)

'''
N을 입력받는데 사용하는 곳이 없음.?
실패) input().split() 
    -> list(map(int, input().split())) 로 변경하니 성공
'''