#include<iostream>
#include<stdio.h>
#include<queue>
using namespace std;

#define MAX 100
typedef struct {
    int col;
    int row;
}node;

int graph[MAX][MAX];
bool visited[MAX][MAX] = {false};
queue<node> q;

int col_dr[4] = {-1, 1, 0, 0};
int row_dr[4] = {0, 0, -1, 1};
int n, m, ans;

void dfs() {
    int x, y, ncol, nrow;
    q.push({0, 0});
    visited[0][0] = true;

    while(!q.empty()) {
        x = q.front().col;
        y = q.front().row;
        q.pop();

        if((x == (n - 1)) && (y == (m - 1))) {
            return;
        }

        for(int i = 0; i < 4 ; i++) {
            ncol = x + col_dr[i];
            nrow = y + row_dr[i];

            if(ncol < 0 || nrow < 0 || ncol >= n || nrow >= m) {
                continue;
            }

            if(graph[ncol][nrow] == 1 && visited[ncol][nrow] == false) {
                graph[ncol][nrow] = graph[x][y] + 1;
                q.push({ncol, nrow});
                visited[ncol][nrow] = true;
            }            
        }
    }
}

int main() {
    int i, j;
    cin >> n >> m;
    string s;

    for(i = 0; i < n; i++) {
        cin >> s;
        for(j = 0; j < m; j++) {
            graph[i][j] = s[j] - '0';
        }
    }

    dfs();
    cout << graph[n-1][m-1];

    return 0;
}
