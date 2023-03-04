N, M = map(int, input().split())
arr = []
for _ in range(N):
    arr.append(input().split())

one = [['up'],['down'],['left'],['right']]
two = [['up', 'down'], ['left', 'right']]
three = [['up','right'],['right','down'],['down','left'],['left','up']]
four = [['left','up','right'],['up','right','down'],['right','down','left'],['down','left','up']]
five = [['up','down','left','right']]
for i in range(N):
    for j in range(M):
        if arr[i][j]==1:
            for k in one:
                