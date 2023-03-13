#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> triangle) {
    int answer = 0;
    int n = triangle.size();
        
    vector<int> dp[n];
    int max_value, temp;
    
    dp[0].push_back(triangle[0][0]);
    
    for(int i = 0; i < n - 1; i++) {
        max_value = -1;
        for(int j = 0; j < triangle[i].size() ; j++) {
            if(dp[i + 1].size() > j) {
                dp[i + 1][j] = max(dp[i + 1][j], dp[i][j] + triangle[i + 1][j]);
                dp[i + 1].push_back(dp[i][j] + triangle[i + 1][j + 1]);
            }
            
            else {
                dp[i + 1].push_back(dp[i][j] + triangle[i + 1][j]);
                dp[i + 1].push_back(dp[i][j] + triangle[i + 1][j + 1]);
            }
        }
    }
    
    for(int i = 0; i < triangle[n - 1].size(); i++) {
        answer = max(answer, dp[n - 1][i]);
    }
    
    return answer;
}