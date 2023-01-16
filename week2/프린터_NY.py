# programmers - 프린터 문제

def solution(priorities, location):
    answer = 0

    while True:
        maxNum = max(priorities)
        now = priorities.pop(0)
        
        if now == maxNum:
            answer += 1
            if location == 0:
                break
            else:
                location -= 1
        
        elif now < maxNum:
            priorities.append(now)
            if location == 0:
                location = len(priorities) - 1
            else:
                location -= 1
        
    return answer

p = list(map(int, input().split(',')))
l = int(input())

print(solution(p, l))