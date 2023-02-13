#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
#include <memory.h>
using namespace std;
#define MAX 50

int input_data[MAX][MAX];
bool visited[MAX][MAX];

// left cross to right cross
int row_dr[8] = {-1, -1, -1, 0, 1, 1, 1, 0}; 
int col_dr[8] = {-1, 0, 1, 1, 1, 0, -1, -1};
int cnt;

// dfs
void find_island(int row, int col) { 
	int new_row, new_col;
	
	for(int i = 0; i < 8; i++) {
		new_row = row + row_dr[i];
		new_col = col + col_dr[i];
		
		if(new_row < 0 || new_col < 0 || new_row >= MAX || new_col >= MAX)
			continue;
		
		if(input_data[new_row][new_col] == 1 && visited[new_row][new_col] == false) {
			visited[new_row][new_col] = true;
			cnt++;
			find_island(new_row, new_col);
		}
		
	}
}

int main() {
    int w, h, ans;

    while(true) {        
        cin >> w >> h;
        if(w == 0 && h == 0) {
            break;
        }

        ans = 0;
        memset(input_data, 0, sizeof(input_data));
        memset(visited, false, sizeof(visited));	

        for(int i = 0; i < h ; i++) {
            for(int j = 0; j < w; j++) {
                scanf(" %d", &input_data[i][j]);
            }
        }

        for(int i = 0; i < h ; i++) {
            for(int j = 0; j < w; j++) {
                if(visited[i][j] == false & input_data[i][j] == 1) {
                    // cnt = 0;
					visited[i][j] = true;
                    find_island(i, j);
                    ans++;
                }
		    }   		
	    }
        cout << ans << "\n";
    }

    return 0;
}
