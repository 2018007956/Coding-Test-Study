def solution(N, number):
    N = str(N)
    operator = ['+','-','*','/']

    res = [[] for _ in range(9)]
    res[1].append(N)
    res[2].append(N*2)
    for i in ['+','*','/']:
        res[2].append(str(int(eval(N+i+N))))

    cnt = 3
    while True:
        res[cnt].append(N*cnt)
        for i in res[cnt-1]:
            for k in range(4):
                res[cnt].append(str(int(eval(i+operator[k]+N))))
        res[cnt] = list(set(res[cnt]))
        if str(number) in res[cnt]:
            break
        cnt+=1
        
        if cnt>8:
            cnt = -1
            break
    return cnt

print(solution(5,31168))