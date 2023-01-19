def solution(priorities, location):
    queue = [(i,p) for i,p in enumerate(priorities)]
    answer = 0
    while True:
        cur = queue.pop(0)
        if any(cur[1] < q[1] for q in queue):
            queue.append(cur)
        else:
            answer += 1
            if cur[0] == location:
                return answer

print(solution([2,1,3,2],2))
print(solution([1,1,9,1,1,1],0))

'''
any(): 하나라도 True인게 있으면 True
all(): 모두 True여야 True 반환
(=> and 연산)

any()는 특히 대소비교를 할 때 사용하면 sort보다 실행시간 많이 줆

이전 코드:
def solution(priorities, location):
    queue = [(v,l) for v,l in enumerate(priorities)]
    
    answer = 0
    while queue:
        x = queue.pop(0)
        if len(queue)==0:
            answer += 1
            break

        max_v = max(list(map(lambda x:x[1],queue))) 
        # 이렇게 list 따로 빼서 max 계산 보다
        # any 함수 사용 -> len(queue)==0 확인도 안해도 됨
        if x[1] >= max_v:   
            answer += 1
            if x[0] == location:
                break
        else:
            queue.append(x)
    return answer
'''