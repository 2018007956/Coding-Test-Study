import sys
input = sys.stdin.readline 

N = int(input())
total_num = int(input())
rec = list(map(int, input().split()))

finalist = {}
for i in rec:
    if i not in finalist:
        finalist[i]=1
    else:
        finalist[i] += 1

    if len(finalist)>N:
        min_idx = list(filter(lambda x:finalist[x]==min(list(finalist.values())[:-1]),finalist))
        del(finalist[min_idx[0]]) # 처음값삭제
    
print(*sorted(list(finalist.keys())))

'''
반례) 들어온 값 빼고 원래 있던 값 중에 가장 투표수 작은 것 제거
'''