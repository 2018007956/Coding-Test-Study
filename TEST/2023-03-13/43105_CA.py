def solution(triangle):
    for level in range(1,len(triangle)):
        for i in range(len(triangle[level])):
            if i==0: # 맨 왼쪽
                triangle[level][0]+=triangle[level-1][0]
            elif i==len(triangle[level])-1: # 맨 오른쪽
                triangle[level][-1]+=triangle[level-1][-1]
            else:
                triangle[level][i]+=max(triangle[level-1][i],triangle[level-1][i-1])
    return max(triangle[-1])