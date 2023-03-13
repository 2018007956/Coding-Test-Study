from collections import deque

def solution(s):
    answer = True
    
    stack = deque([])
    for i in s:
        if i=='(':
            stack.append(i)
        elif i==')':
            if not stack: # is empty
                return False
            else:
                stack.popleft()
    if stack: # not empty
        return False
    else:
        return True