def solution(board):
    answer = 1
    
    # 규칙을 어긴 경우 answer = 0
    if ''.join(board).count('X')>''.join(board).count('O'):
        return 0
    
    '''
    O 위치와 X 위치를 큐에 넣고, 하나씩 놓아가면서 규칙을 지키며 진행, 누군가 이겼을 떄 게임 종료
    -> input board와 비교하여 같으면 1, 다르면 0
    '''
    O_list = []
    X_list = []
    for i in range(3):
        for j in range(3):
            if board[i][j] == 'O':
                O_list.append([i,j])
            elif board[i][j] =='X':
                X_list.append([i,j])
    
    # Game Start
    new_board = [[[] for j in range(3)] for i in range(3)]
    while True:
        x, y = O_list.pop(0)
        new_board[x][y] = 'O'
        ###### Win!!
        ### 같은 문자인지 확인하는 조건??
        if 
    
    return answer