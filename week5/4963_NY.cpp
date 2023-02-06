#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
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
    int w, h;

    while(true) {
        cin >> w >> h;
        if(w == 0 && h == 0) {
            break;
        }

        for(int i = 0; i < w ; i++) {
            for(int j = 0; j < h; j++) {
                cin >> input_data[i][j];
            }
        }

        for(int i = 0; i < w ; i++) {
            for(int j = 0; j < h; j++) {
                if(visited[i][j] == false & input_data[i][j] == 1) {
                    visited[i][j] = true;
                    cnt = 1;
                    find_island(i, j);
                    cout << cnt << "\n";
                }
		    }   		
	    }
    }

    return 0;
}