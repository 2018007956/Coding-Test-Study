N = int(input())
def star(n):
    if n == 3:
        return ['***','* *','***']
    arr = star(n//3)
    stars = []
    for i in arr:
        stars.append(i*3)
    for i in arr:
        stars.append(i+' '*(n//3)+i)
    for i in arr:
        stars.append(i*3)
    return stars
print('\n'.join(star(N)))

'''
크기 N의 패턴은
공백으로 채워진 가운데의 (N/3)X(N/3) 정사각형을
크기 N/3의 패턴으로 둘러싼 형태

어떻게 접근해야 할지도 감이 안잡혀서 
다른 사람 풀이 봄

다시 공부 필요
'''