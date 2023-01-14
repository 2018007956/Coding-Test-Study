import heapq as hq
def solution(scoville, K):
    answer = 0
    hq.heapify(scoville)
    while any(x<K for x in scoville):
        if len(scoville)==1:
            return -1
        hq.heappush(scoville, hq.heappop(scoville)+hq.heappop(scoville)*2)
        answer += 1
    return answer

print(solution([1,2,3,9,10,12],7))
print(solution([3,2,1],15))

'''
1번째 시도)
scoville.sort()
scoville.append(scoville[0]+(scoville[1]*2))
scoville = scoville[2:]
정확성 테스트 - 성공
효율성 테스트 - 실패 (시간 초과)

2번째 시도)
def solution(scoville, K):
    answer = 0
    while any(x < K for x in scoville):
        if len(scoville)==1: # scoville[1] -> IndexError
            return -1
        scoville = deque(sorted(scoville))
        scoville.append(scoville.popleft()+scoville.popleft()*2)
        answer += 1
    return answer
시간 초과

heapq 모듈 사용해서 힙으로 구현 시도
-> heappop() 시 가장 작은 원소를 삭제해서 리턴해줌
-> 성공
heapq 사용 시 원소 하나씩 푸시할 필요 없이 hq.heapify(scoville)
'''