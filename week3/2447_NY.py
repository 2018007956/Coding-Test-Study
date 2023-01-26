# 별찍기
# (i / 3) % 3 == 1 and (j / 3) % 3 == 1
# 프랙탈 문제는 divide and conqeur!!

def three_star(i, j, num):
    if ((int((i / num)) % 3 == 1) and (int((j / num)) % 3 == 1)):
        print(' ', end = "")
    
    else:
        # 1/3 == 0
        if (int(num / 3) == 0):
            print('*', end = "")
        else:
            # 3/3 == 1
            three_star(i, j, int(num/3))

n = int(input())
for i in range(0, n):
    # 새로로 한 줄씩 별 찍기
    for j in range(0, n):
        three_star(i, j, n)
    print()
