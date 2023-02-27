import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N = int(input())
    grade = []
    for i in range(N):
        grade.append(list(map(int, input().split())))
    grade.sort()
    
    hired = [grade[0]]
    prev = grade[0][1]
    for i in range(1,N):
        # if any(x[1]<grade[i][1] for x in grade[:i]): # 시간초과(이중for문)
        if grade[i][1] < prev:
            hired.append(grade[i])
            prev = grade[i][1]
            
    print(len(hired))
    
'''
서류심사 성적과 면접시험 성적이 둘 다 높은 애가 하나라도 있으면 탈락

시간초과
=> 이전 모든 값들과 비교 -> 직전 합격된 사람 하나와 비교
1 "4"
2 5 X
3 6 X
4 "2" 
5 7 X
6 "1"
7 3 X
'''