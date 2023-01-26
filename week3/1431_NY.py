# 시리얼 번호
# sort algorithm: merge sort
# -> merge sort로 하려고 했는데, 너무 복잡해서 포기..
# 그래서 sort함수에 조건을 넣을 수 있는지 찾음
# -> lambda 함수 쓰면 다중 조건 sort 가능하대!!
# -> 그래서 길이 & 숫자 합 들어 있는 tuple 리스트 만듦!

# len 다르면 짧은 거 먼저 / 같으면 숫자 합 작은거 먼저
# esle 사전 순(일반 비교)

import re

def count_number(stri):
    count = 0 
    # re.sub(pattern, replace, string)
    # string에서 pattern과 일치하는 문자들은 replace로 교체
    
    stri = re.sub(r'[^0-9]', '', stri)
    for i in range(0, len(stri)):
        count += int(stri[i])

    return count

n = int(input())
data = list()
for i in range(0, n):
    data.append(input())

comp_list = []
for i in range(0,n):
    comp_list.append((data[i], len(data[i]), count_number(data[i])))

comp_list = sorted(comp_list, key = lambda x: (x[1], x[2], x[0]))
for i in range(n):
    print(comp_list[i][0])