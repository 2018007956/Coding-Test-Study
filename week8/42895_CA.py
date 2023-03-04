def solution(N, number):
    res = [[] for _ in range(9)]
    for cnt in range(1,9):
        res[cnt].append(int(str(N)*cnt))

        for n in range(1,cnt):
            for i in res[n]:
                for j in res[cnt-n]:
                    res[cnt].append(i+j)
                    res[cnt].append(i-j)
                    res[cnt].append(i*j)
                    if j!=0:
                        res[cnt].append(i/j)
                
        res[cnt] = list(set(res[cnt]))
        print(res[cnt])
        if number in res[cnt]:
            return cnt 
    return -1

print(solution(5,12))

'''
res[1] res[cnt-1]
res[2] res[cnt-2] 
...
res[cnt-1] res[1]
'''