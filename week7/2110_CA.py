N, C = map(int, input().split()) # house, router
x = []
for _ in range(N):
    x.append(int(input()))

x.sort()
router_installed = [x[0], x[-1]]
C -= 2

start_idx = 0
end_idx = len(x)-1
while C>0:
    left_middle = x[len(x)//2]
    right_middle = x[len(x)//2 + len(x)//4]
    router_installed.append(middle_house)
    C -= 1

router_installed.sort()
res = []
for a, b in zip(router_installed[1:], router_installed):
    res.append(a-b)

print(min(res))