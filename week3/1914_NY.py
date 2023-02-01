# 하노이 탑 알고리즘
# hanoi(n): (n-1)개 원반을 다른 곳을 옮겨라
# 1번 n-1개를 2번으로, 남은거 3번으로

def hanoi_under_20(num, start, to, via):
    if num==1:
        print(start, to)
        return

    else:
        hanoi_under_20(num-1, start, via, to)
        hanoi_under_20(1, start, to, via)
        hanoi_under_20(num-1, via, to, start)

n = int(input())
print(2**n - 1)

if (n<=20) :
    hanoi_under_20(n, 1, 3, 2)