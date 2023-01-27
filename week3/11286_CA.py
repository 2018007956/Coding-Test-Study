import sys 
import heapq as hq
input = sys.stdin.readline 

N = int(input())
arr = []
for i in range(N):
    x = int(input())
    if x != 0:
        hq.heappush(arr, (abs(x), x))
    else:
        try:
            print(hq.heappop(arr)[1]) 
        except:
            print(0)

'''
heapq에 튜플(a, b)가 삽입될 경우엔, 
a값을 먼저 비교하고 b값을 비교
'''