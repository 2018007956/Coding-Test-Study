T = int(input())
for _ in range(T):
    N = int(input())
    arr = map(int, input().split())
    
    d = {}
    for i in range(len(arr)):
        d[i+1]=arr[i]
