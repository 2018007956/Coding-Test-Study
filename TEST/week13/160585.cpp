#include <string>
#include <vector>

using namespace std;
int num_o, num_x, win_o, win_x, cross_case;
// 좌우 위아래 우상단대각선 좌상단대각선
int dir_x[8] = {0, 0, -1, 1, -1, 1, -1, 1};
int dir_y[8] = {-1, 1, 0, 0, 1, -1, -1, 1};

int match_check(int i, int j, vector<string> v) {
    int a, a1, b, b1, count;
    count = 0;
    char shape = v[i][j];
    for(int k = 0; k < 8; k = k + 2) {
        a = i + dir_x[k];
        a1 = j + dir_y[k];
        b = i + dir_x[k+1];
        b1 = j + dir_y[k+1];
        if(!(a < 0 || a >= 3 || a1 < 0 || a1 >=3 || b < 0 || b >= 3 || b1 < 0 || b1 >=3)) {
            if(v[a][a1] == shape && v[b][b1] == shape) {
                count++;
                if((k == 6 || k == 8) && shape == 'O') {
                    cross_case++;
                }
            }
        }
    }
    return count;
}

void board_scan(vector<string> b) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            if(b[i][j] == 'O') {
                num_o++;
                win_o += match_check(i, j, b);
            }
            else if(b[i][j] == 'X') {
                num_x++;
                win_x += match_check(i, j, b);
            }
        }
    }
}

int solution(vector<string> board) {
    int answer = -1;
    board_scan(board);
    
    // O개수가 X 개수보다 적은 경우
    if(num_o < num_x) {
       answer = 0;
    }
    
    // 두개 차이가 1이 아닌 경우
    else if(num_o - num_x > 1) {
        answer = 0;
    }
    
    // all fill + O개수 - X개수 != 1
    else if((num_o + num_x == 9) && (num_o - num_x != 1)){
        answer = 0;
    }
    
    // 가운데로 끝내는 경우
    else if((win_o == 2) && (cross_case == 2)) {
        answer = 1;
    }
    
    // 정답이 1개가 아닌 경우
    else if(win_o > 1 || win_x > 1 || (win_o && win_x)) {
        answer = 0;
    }

    // 정답인 O 배열일 때, X의 개수가 더 작지 않은 경우
    else if((win_o == 1) && !(num_o > num_x)) {
        answer = 0;
    }
    
    // 정답인 X 배열일 때, O와 X의 개수가 같지 않은 경우
    else if((win_x == 1) && !(num_o == num_x)) {
        answer = 0;
    }
    
    else {
        answer = 1;
    }
    
    return answer;
}