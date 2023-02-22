N, C = map(int, input().split()) # house, router
x = []
for _ in range(N):
    x.append(int(input()))

def max_distance(start, end):
    global C 
    while C:
        mid = (start + end)//2
        print(C, x[mid])
        if not visited[mid]:
            visited[mid] = True
            router_installed.append(x[mid])
            C -= 1

            left = abs((x[start]+x[mid])//2-x[(start+mid)//2])
            right = abs((x[mid]+x[end])//2-x[(mid+end)//2]) 
        if left > right:
            start = mid + 1
        else:
            end = mid - 1   

x.sort()
router_installed = [x[0], x[-1]]
C -= 2
visited = [False]*len(x)
max_distance(0, len(x)-1)

router_installed.sort()
res = []
for a, b in zip(router_installed[1:], router_installed):
    res.append(a-b)
print(router_installed)
print(res)
print(min(res))