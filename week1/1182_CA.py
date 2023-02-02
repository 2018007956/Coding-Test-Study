from itertools import combinations
N, S = map(int, input().split())
lst = list(map(int, input().split()))

comb_lst = []
for i in range(1,N+1):
    comb_lst.extend(list(combinations(lst,int(i))))
comb_lst_sum = [sum(i) for i in comb_lst]

print(comb_lst_sum.count(S))
'''
[a] + [b] = S

-7-3-2+5+8=1 -> S=0
1을 없애면 0이 될 수 있다 (total_sum - S)
5가지 숫자 중 합쳐서 1이 될 수 있는 경우는
-7+8=1 한가지 이다

a=-7 -> b=8 (a+b=total_sum-S), 8이 리스트에 있는지 확인, 있으면 +1
a=-3 -> b=4, 4가 리스트에 있는지 확인 (-7-2+5+8=4)
    -> 다 더해서 1이 되는 경우는 당연히 제외시켜야함 -> 이걸 어떻게 알지 -> comb_lst길이가 4이면 안됨
    -> 그리고, b 리스트에 a값이 포함되도 안됨
a=-7-3 -> b=10, 10이 리스트에 있는지 확인, 있으면 +1

-> 한번 꼬아서 생각한거임 그냥 조합 다구해놓고 나와야 할 숫자합 개수 세면 되는데..
'''