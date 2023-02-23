T = int(input())
for _ in range(T):
    N = int(input())
    grade = []
    for i in range(N):
        grade.append(list(map(int, input().split())))


'''
서류심사 성적과 면접시험 성적 중 
적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발
=> 둘 다 꼴찌가 아니면 되는거 아님?
'''