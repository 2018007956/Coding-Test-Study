N, K = map(int, input().split())

arr = list(range(1,N+1))
answer = ""
cnt = 1
while arr:
    if cnt % K ==0:
        answer += str(arr.pop(0))+', '
    else:
        arr.append(arr.pop(0))
    cnt+=1

print('<'+answer[:-2]+'>')