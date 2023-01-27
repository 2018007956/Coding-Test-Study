import sys 
input = sys.stdin.readline

N = int(input())
X = list(map(int, input().split()))

sorted_x = sorted(set(X))
dic = {sorted_x[i] : i for i in range(len(sorted_x))}
for i in X:
    print(dic[i], end=' ')

'''
Xi를 좌표 압축한 결과 X'i의 값은 Xi>Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다
-> Xi보다 작은 것의 개수: X'i

Coordinate Compression (좌표 압축)
배열의 각 원소값에 대한 '순위'를 매김

**시간초과**
list.index(i) 형태의 시간 복잡도: O(N)
index[i] 형태의 시간 복잡도: O(1)
'''