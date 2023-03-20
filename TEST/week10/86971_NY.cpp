#include <string>
#include <vector>
#include <cmath>
#include <iostream>
#include <algorithm>

using namespace std;
#define MAX 100
vector<int> linked_list[MAX];
bool visited[MAX];
int cnt;

int dfs(int n) {
    visited[n] = true;
    for(int i = 0; i < linked_list[n].size(); i++) {
        if(!visited[linked_list[n][i]]) {
            dfs(linked_list[n][i]);
            cnt++;
        }
    }
    
    return cnt;
}

int solution(int n, vector<vector<int> > wires) {
    int answer = -1;
    vector<int> result;
    int min_num, temp;
    fill_n(&visited[0], n+1, false);
    
    for(int i = 0; i < wires.size(); i++) {
        linked_list[wires[i][0]].push_back(wires[i][1]);
    }
    
    for(int i = 1; i <= n; i++) {
        visited[i] = true;
        
        for(int j = 0; j <= n; j++) {
            if(!visited[i]) {
                temp = dfs(i);
                result.push_back(temp);
                cnt = 0;
            }
        }

        
        min_num = abs(result[0]-result[1]);
        answer = min(answer, min_num);
        result.clear();
        fill_n(&visited[0], n+1, false);
    }
    
    return answer;
}
