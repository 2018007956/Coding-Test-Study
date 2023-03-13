#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

#define MAX 8
int info[MAX][MAX]; // save input data
vector<pair<int, int> > cctv_pos;// for remember the position of cctv
int dup[MAX][MAX]; // for duplicate the original data
int n, m;
int ans;

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

        dup[nx][ny] = -1;
        col = nx;
        row = ny;
    }
}

void find_free_place(int turn) {
    int x, y, temp, goal, cnt;
    goal = cctv_pos.size();
    cout << "turn: " << turn << endl;
    if(turn == goal) {
        cout << "i approached to the goal!" << endl;

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(dup[i][j] == 0) cnt++;
            }
        }
        ans = min(ans, cnt);
        return;
    }

    for(int i = 0; i < 4; i++) {
        cout << "i'm in for loop hi~" << endl;

        x = cctv_pos[turn].first;
        y = cctv_pos[turn].second;
        temp = dup[x][y];
        
        if(temp == 1) {
            cctv_area(x, y, i);
        }

        else if(temp == 2) {
            cctv_area(x, y, i);
            cctv_area(x, y, i + 2);
        }

        else if(temp == 3) {
            cctv_area(x, y, i);
            cctv_area(x, y, i + 1);
        }

        else if(temp == 4) {
            cctv_area(x, y, i);
            cctv_area(x, y, i + 2);
            cctv_area(x, y, i + 3);
        }

        else if(temp == 5) {
            cctv_area(x, y, i);
            cctv_area(x, y, i + 1);
            cctv_area(x, y, i + 2);
            cctv_area(x, y, i + 3);
        }

        find_free_place(turn + 1);

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                cout << dup[i][j] << " ";
            }
            cout << endl;
        }
        cout << endl;

        memcpy(&dup, &info, sizeof(info));
    }

}


int main() {
    cin >> n >> m;
    ans = 999999999;

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cin >> info[i][j];
            if((info[i][j] >= 1) && (info[i][j] <= 5)) {
                cctv_pos.push_back(make_pair(i, j));
            }
        }
    }

    memcpy(&dup, &info, sizeof(info));
    cout << "i'm going to calling function" << endl;

    find_free_place(0);
    cout << ans;
}
