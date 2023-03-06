# 가정) 격자는 사각형이다
def find_mul(x):
    res=[]
    d=1
    while d <= x:
        if x//d<d:
            break
        if x % d == 0:
            res.append((x//d,d))
        d = d + 1
    return res

def solution(brown, yellow):
    res=find_mul(yellow)
    for i in res:
        if (i[0]+2)*2+2*i[1]==brown:
            answer=[i[0]+2,i[1]+2]
    return answer