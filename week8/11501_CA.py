T = int(input())
for _ in range(T):
    N = int(input())
    juga = list(map(int, input().split()))
    juga.reverse()
    max_value = 0
    profit = 0
    for cur in juga:
        if max_value > cur:
            profit += max_value-cur
        else:
            max_value = cur
    print(profit)

'''
import sys
input = sys.stdin.readline 

T = int(input())
for _ in range(T):
    N = int(input())
    juga = list(map(int, input().split()))

    week = 0
    have = 0
    profit = 0
    for cur in range(N):
        # 뒤에 하나라도 더 큰 값이 나온다면 현재 주식을 삼
        if any(juga[cur]<=x for x in juga[cur+1:]):
            have += juga[cur]
            week += 1
        else:
            cur_profit = juga[cur]*week - have
            if juga[cur] == max(juga[cur:]): #-> 남은 것 중 max 여야 함
                profit += cur_profit
                week, have = 0, 0
            elif cur == N-1: # last
                if cur_profit >0: # 이익이 있을 때만 팜
                    profit += cur_profit
    print(profit)

구현 idea: 
주가가 가장 높은 날 전까지 계속 매수하다가 높은 날 매도 -> 반복
마지막날 전까지 다시 모으다가 마지막날 이익이 나면 팔고 아니면 pass
-> 시간초과
https://www.acmicpc.net/board/view/16527

-> reverse 해버리는 아이디어를 어떻게 생각해 낼 수 있을까?
'''