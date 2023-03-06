#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

#define MAX 8
int info[MAX][MAX]; // save input data
vector<pair<int, int> > cctv_pos;// for remember the position of cctv
int dup[MAX][MAX]; // for duplicate the original data
int n, m;
int ans = 9999999999;

int dir_x[4] = {0, 1, 0, -1};
int dir_y[4] = {1, 0, -1, 0};

void cctv_area(int col, int row, int dir) {
    int nx, ny;
    dir %= 4;
    while(true) {
        nx = col + dir_x[dir];
        ny = row + dir_y[dir];

        if((nx < 0) || (ny < 0) || (nx >= n) || (ny >= m)) break;
        if(dup[nx][ny] == 6) break;
        if(dup[nx][ny] != 0) continue;

        dup[nx][ny] = '#';
        col = nx;
        row = ny;
    }
}

void find_free_place(int turn) {
    int x, y, temp, goal, cnt;
    goal = cctv_pos.size();
    if(turn == goal) {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(dup[i][j] == 0) cnt++;
            }
        }
        ans = min(ans, cnt);
    }
}
int main() {
    cin >> n >> m;
    
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cin >> info[i][j];
            if((info[i][j] >= 1) && (info[i][j] <= 5)) {
                cctv_pos.push_back({i, j});
            }
        }
    }
    find_free_place(0);
    cout << ans;

}