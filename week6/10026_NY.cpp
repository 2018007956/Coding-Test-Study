// 틀린이유: 문자열의 맨 끝에는 항상 공백이 들어간다!!!

#include<iostream>
#include<stdio.h>
using namespace std;

#define MAX 110
char picture[MAX][MAX];
bool visited[MAX][MAX] = {false};

int col_dr[4] = {-1, 1, 0, 0};
int row_dr[4] = {0, 0, -1, 1};
int n;

void normal_eye(int x, int y) {
    char color = picture[x][y];

    for(int i = 0; i < 4; i++) {
        int ncol = x + col_dr[i];
        int nrow = y + row_dr[i];

        if(ncol < 0 || nrow < 0 || ncol >= n || nrow >= n)
            continue;
        
        if(picture[ncol][nrow] == color && !visited[ncol][nrow]) {
            visited[ncol][nrow] = true;
            normal_eye(ncol, nrow);
        }
    }
}

void rg_same_eye(int x, int y) {
    char color = picture[x][y];

    for(int i = 0; i < 4; i++) {
        int ncol = x + col_dr[i];
        int nrow = y + row_dr[i];

        if(ncol < 0 || nrow < 0 || ncol >= n || nrow >= n)
            continue;
        
        if(color == 'R' || color == 'G') {
            if((picture[ncol][nrow] == 'R' || picture[ncol][nrow] == 'G') && !visited[ncol][nrow]) {
                visited[ncol][nrow] = true;
                rg_same_eye(ncol, nrow);
            }        
        }

        else {
            if(picture[ncol][nrow] == color && !visited[ncol][nrow]) {
                visited[ncol][nrow] = true;
                rg_same_eye(ncol, nrow);
            }  
        }
    }
}

int main() {
    int i, j;
    int ans1 = 0, ans2 = 0;

    cin >> n;
    string s;

    for(i = 0; i < n; i++) {
        cin >> s;
        for(j = 0; j < n; j++) {
            picture[i][j] = s[j];
        }
    }

    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            if(!visited[i][j]) {
                visited[i][j] = true;
                normal_eye(i, j);
                ans1++;
            }
        }
    }

    fill(&visited[0][0], &visited[n][n], false);

    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            if(!visited[i][j]) {
                visited[i][j] = true;
                rg_same_eye(i, j);
                ans2++;
            }
        }
    }

    // for(i = 0; i < n; i++) {
    //     for(j = 0; j < n; j++) {
    //         if(picture[i][j] == 'R')
    //             picture[i][j] = 'G';
    //     }
    // }

    // for(i = 0; i < n; i++) {
    //     for(j = 0; j < n; j++) {
    //         if(!visited[i][j]) {
    //             visited[i][j] = true;
    //             normal_eye(i, j);
    //             ans2++;
    //         }
    //     }
    // }

    cout << ans1 << " " << ans2;

    return 0;
}
