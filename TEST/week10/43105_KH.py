# 정수 삼각형
def solution(triangle):
    for depth in range(1, len(triangle)):
        for width in range(len(triangle[depth])):
            # 0번째 index은 바로 위에 위치한 0번째 index로부터만 영향 받음
            if width == 0:
                triangle[depth][0] += triangle[depth-1][0]
                
            # 마지막 index는 바로 위에 위치한 마지막 index로부터만 영항 받음
            elif width == len(triangle[depth])-1:
                triangle[depth][-1] += triangle[depth-1][-1]
                
            else:
                triangle[depth][width] += max(triangle[depth-1][width], triangle[depth-1][width-1])
    # 마지막 line의 max값 출력
    return max(triangle[-1])