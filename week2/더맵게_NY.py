# 더 맵게 
# 모든 음식!! K 이상이 될 때까지 음식 섞기 아님
# heapq 안쓰면 시간 초과 남

from heapq import heapify, heappop, heappush

def solution(scoville, K):
    answer = 0
    scoville.sort()
    heapify(scoville)    

    while scoville[0] < K :
        if len(scoville) == 1:
            answer = -1
            break

        minnum = heappop(scoville)
        nminnum = heappop(scoville)
        mixed = minnum + nminnum*2

        heappush(scoville, mixed)
        answer += 1
        
    return answer

sco = list(map(int, input().split()))
k = int(input())

print(solution(sco, k))
