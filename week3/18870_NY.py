# 좌표 압축
# sort -> 그 값에 맞는 index 저장
# O(n) 보다 작게 찾을 수는 없는 건가?
# -> dictionary search 함수 O(1)!!!

import sys

n = int(sys.stdin.readline().strip())
data = list(map(int, sys.stdin.readline().split()))

# data에서 중복 제거 함수: set()
temp = list(set(data))
search_dict = {}

temp.sort()

# key = data, value= index로 갖는 dictionary 자료구조 만들기
for i in range(len(temp)):
    search_dict[temp[i]] = i

for i in range(n):
    print(search_dict[data[i]], end=" ")
