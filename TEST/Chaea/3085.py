# -- 실패
import sys
from collections import Counter 
input = sys.stdin.readline

def find_neighbor(which, line, common, not_common):
    global board
    # which: [str]row or col
    # <most commont이 아닌 알파벳 주변 탐색>
    # board에서 row 위치 찾고, not_commont들 위치 찾아서 
    # 위/아래에 common 문자 있으면 위치 바꾸기
    board2 = board
    if which == 'col': #transpose
        board2 = list(map(list, zip(*board)))

    x = board2.index(line)
    # Search not_common neighbors
    for i in not_common:
        y = line.index(i)
        # Check if the index is out of range 
        # Check if the above is common
        if x-1>=0 and board2[x-1][y]==common:
            return 1
        # Check if below is common
        elif x+1<=N-1 and board2[x+1][y]==common: 
            return 1
        else:
            return 0
            
def find_notCommon(which, line):
    global result 

    cnt = Counter(line)
    common = cnt.most_common(1)[0][0]
    not_common = [x for x in line if x is not common]
    if len(not_common)>=1: # 하나라도 다른 문자가 껴있으면
        exchange = find_neighbor(which, line, common, not_common)
        len_of_common = N -len(not_common)
        result.append(len_of_common+exchange)
    else: 
        # 한 라인이 같은 색인 경우 
        # -> 이런걸 어떻게 빠트리지 않게 생각할 수 있지?
        # -> if문 쓸 때 else에 들어갈 수 있는 경우 생각해보기?
        result.append(N)

N = int(input())
board = [list(input().strip()) for _ in range(N)] # strip: 줄바꿈 문자 제거

result = []
for i in range(N):
    # Row
    row = board[i][:]
    find_notCommon('row', row)

    # Col
    col = list(list(zip(*board))[i]) 
    find_notCommon('col',col)
    

result.sort(reverse=True) #내림차순
print(result[0])

# find_most: 각 행/열 별로 가장 많이 나온 문자와 그 문자의 개수 저장
# -> [('c', 2), ('c', 2), ('c', 2), ('c', 2), ('p', 2), ('p', 2)]
# 두번째 원소로 내림차순 정렬
# find_most.sort(key=lambda x:-x[1]) 
# 이웃 확인하려면 위치를 봐야하니까 
# find_most로 저장하지말고 for문 돌리면서 바로 most 찾아야겠다 


'''
가장 긴 행 또는 열을 모두 구하고,
같은 색상이 이웃해있으면 길이+1 출력, 아니면 길이 출력

가장 긴 행/열을 구하는 방법?
각 행/열 별로 most commont 문자와 수 구하기?

<list에서 제일 많은 문자 구하기> 
max(set(arr), key=arr.count)
<문자와 개수 구하기> 
from collections import Counter
cnt = Counter(arr)
cnt.most_common() # 괄호안에는 출력개수 입력

<튜플 두번쨰 원소로 정렬하기>
# 오름차순 정렬
arr.sort(key=lambda x:x[1]) 
# 내림차순 정렬
1. arr.sort(key=lambda x:-x[1])
2. arr.sort(key=lambda x:x[1], reverse=True)
<첫번째 원소로 오름차순 정렬하고, 첫번째 원소가 같은 경우 두번쨰 원소로 오름차순 정렬>
1. arr.sort()
2. arr.sort(key=lambda x:(x[0],x[1]))

<list transpose>
1. [list(x) for x in zip(*arr)]
2. list(map(list, zip(*arr)))
* 연산자 (star operator)는 리스트 또는 튜플에 있는 원소들을 차례로 꺼내어 
함수 인자에 대응시킴. 함수 인자가 위치하는 자리에서만 사용 가능
zip(*이중리스트): 리스트의 transpose. zip은 튜플 반환
이중리스트이지만 행렬이 아닌 경우(리스트 안의 크기가 서로 다른 경우)는
가장 작은 리스트를 기준으로 전치된 결과가 에러없이 나옴

<리스트 특정 원소 모두 제거>
list comprehension 사용
[x for x in arr if x not in remove_set]

<이차원 배열 컬럼 뽑기>
board[:][0] 했는데 row가 뽑혔다. 왜지???
검색해보니 리스트에서 열 출력할때는 아래 방법들을 사용한다
1. [x[0] for x in arr]
2. list(zip(*arr))[0]
3. np.array(arr).T[0]
4. ndarray인 경우 arr[:,0]

<리스트 좌/우/위/아래 탐색하는 경우>
IndexError: list index out of range 조심하기!
'''