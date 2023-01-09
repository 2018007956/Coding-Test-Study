def gcd(a, b):
    if b==0:
        return a
    return gcd(b, a%b)

N, S = map(int, input().split())
bro = list(map(int, input().split()))

lst = list(map(lambda x:abs(x-S),bro))

tmp = lst[0]
for i in range(N-1):
    tmp = gcd(tmp,lst[i+1]) # 0,1
print(tmp)

'''
최대공약수GCD 구하기: 유클리드 호제법
    2개의 자연수 a,b에 대해 a를 b로 나눈 나머지를 r이라 하면
    a와 b의 최대공약수는 b와 r의 최대공약수와 같다
'''