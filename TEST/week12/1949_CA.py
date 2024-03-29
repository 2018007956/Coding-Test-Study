N = int(input())
population = list(map(int, input().split()))
village = [[] for _ in range(N+1)]
for _ in range(N-1):
    x, y = map(int, input().split())
    # Undirected graph
    village[x].append(y)
    village[y].append(x)

print(village)

'''
               1       2        3       4      5     6      7
village: [[], [2], [1, 3, 6], [2, 4], [3, 5], [4], [2, 7], [6]]
either 본인이 우수 마을 이거나 or 본인이 포함하고 있는 숫자 중에 우수마을이 있거나
둘 다 동시 만족하면 안됨
위 경우의 수를 다 구하고 그 중 주민 수가 최대가 되는 경우 출력
1-2 이렇게 하나씩만 연결되어 있는 경우: 둘 중 하나는 우수, 다른 하나는 우수X
=> 경우의 수: 1-2,4-5,6-7
그리고 우수마을 이라고 가정할 떄는 가정하지 않을 때보다 주민 수 합이 큰지를 따져야
가정) 1이 우수마을이다
    -> 2는 우수마을 못됨 -> 2가 더 주민 수 많음 -> 1은 우수마을 아니고 2가 우수마을이라고 가정!
    -> 이웃중에서 더 많은 수 가질 수 있으므로 Greedy 방법은 아닌듯
-> 가능한 모든 경우의 수를 다 따져봐야 할듯

ex. 가정) 1,3,(5),6은 우수마을/1,3,(5),7은 우수마을
1 O
2 X
3 O
4 X
5 O
6 O X
7 X O
=> 9000, 14000
가정) 2,4는 우수마을
1 X
2 O
3 X
4 O
5 X
6 X
7 O
=> 11000
가정) ....
==> 규칙적인 알고리즘을 못찾겠음.. 어떻게 짜야하지.?
'''