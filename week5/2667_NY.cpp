#include<iostream>
#include<stdio.h> 
#include<vector>
#include<algorithm>

using namespace std;
# define MAX 25

int input_data[MAX][MAX];
bool visited[MAX][MAX];
vector<int> cnt_building;

// L, R, U, D 
int row_dr[4] = {0, 0, -1, 1}; 
int col_dr[4] = {-1, 1, 0, 0};
int cnt;

// dfs
void find_group(int row, int col) { 
	int new_row, new_col;
	
	for(int i = 0; i < 4; i++) {
		new_row = row + row_dr[i];
		new_col = col + col_dr[i];
		
		if(new_row < 0 || new_col < 0 || new_row >= MAX || new_col >= MAX)
			continue;
		
		if(input_data[new_row][new_col] == 1 && visited[new_row][new_col] == false) {
			visited[new_row][new_col] = true;
			cnt++;
			find_group(new_row, new_col);
		}
		
	}
}

int main() {
	int n;
	int ans = 0;
	string str;
	
	cin >> n;

	for(int i = 0; i < n; i++) {
		cin >> str;
		for(int j = 0; j < str.length(); j++) {
			visited[i][j] = false;
			input_data[i][j] = str[j] - '0';
		}
	}
	
	for(int i = 0; i < n ; i++) {
		for(int j = 0; j < n; j++) {
			if(visited[i][j] == false & input_data[i][j] == 1) {
				visited[i][j] = true;
				cnt = 1;
				find_group(i, j);
				cnt_building.push_back(cnt);
				ans++;
			}
		}		
	}
	
	sort(cnt_building.begin(), cnt_building.end());
	cout << ans << "\n";
	for(int i = 0; i < cnt_building.size(); i++) {
		cout << cnt_building[i] << "\n";
	}
	
	return 0;
}
