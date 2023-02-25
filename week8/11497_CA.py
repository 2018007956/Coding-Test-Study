T = int(input())
for _ in range(T):
    N = int(input())
    L = list(map(int, input().split()))

    L.sort(reverse=True)
    Sort_L = [0]*N
    Sort_L[N//2]=L[0]
    for i in range(1,N//2+1):
        Sort_L[N//2-1]=L[i]
        Sort_L[N//2+1]=[i+1]
    
    # L.sort()
    # diff = []
    # for a, b in zip(L[1:]+L[0], L):
    #     diff.append(a-b)
    # print(max(diff))


'''
처음엔 제일 긴 높이 - 두번째로 긴 높이 인줄 알았는데 
차이를 생각해야 되는 거니까..
(반례: 1,4,7,7,9)

난이도: 인접한 두 통나무 간의 높이의 차의 최댓값
가장 낮은 난이도(차이값들이 가장 작도록 계산)가 답이므로 
결과값이 가장 작게 되려면 비교 자체를 가장 근처의 수와 해야 함 -> 
sorting -> 오름차순/내림차순 정렬은 처음과 마지막 차이가 크므로 
정규분포 형태로 정렬..!


'''