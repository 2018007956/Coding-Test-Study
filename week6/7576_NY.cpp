#include<iostream>
#include<stdio.h>
#include<queue>
#include<vector>
using namespace std;

#define MAX 1000
// 상하 좌우
int col_dr[4] = {-1, 1, 0, 0};
int row_dr[4] = {0, 0, -1, 1};

typedef struct {
    int col;
    int row;
}tomato;

int input_data[MAX][MAX]; // save input data
queue<tomato> q;
int n, m;

void tomato_farm() {
    tomato temp;
    int ncol, nrow;

    while(!q.empty()) {
        temp = q.front();
        q.pop();
        
        for(int i = 0; i < 4; i++) {
            ncol = temp.col + col_dr[i];
            nrow = temp.row + row_dr[i];

            if(ncol < 0 || nrow < 0 || ncol >= m || nrow >= n) {
                continue;
            }

            if(input_data[ncol][nrow] == 0) {
                input_data[ncol][nrow] = input_data[temp.col][temp.row] + 1;
                q.push({ncol, nrow});
            }
        }
    }
}

int main() {
    int i, j; // for loop
    int result;
    
    cin >> n >> m;

    for(i = 0; i < m; i++) {
        for(j = 0; j < n; j++) {
            scanf(" %d", &input_data[i][j]);
            if(input_data[i][j] == 1) {
                q.push({i, j});
            }
        }
    }

    if(q.size() == m * n) {
        cout << 0;
        return 0;
    }

    tomato_farm();

    for(i = 0; i < m; i++) {
        for(j = 0; j < n; j++) {
            if(input_data[i][j] == 0) {
                cout << -1;
                return 0;
            }

            if(input_data[i][j] > result) {
                result = input_data[i][j];
            } 
        }
    }
    cout << result - 1;
    return 0;
}    
