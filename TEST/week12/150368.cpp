//이모티콘 할인 행사
#include <string>
#include <vector>
#include <cmath>
using namespace std;

#define MAX 7
int sale[4] = {10, 20, 30, 40};
int len;
int select[MAX];
int combi[int(pow(4, MAX))][MAX];
int j = 0;

void dfs(int cnt, int len) {
    if(cnt == len) {
        for(int i = 0; i < len; i++) {
            combi[j][i] = select[i];
            cout << select[i] << " ";
        }
        cout << endl;
        return;
    }
    
    for(int i = 0; i < 4; i++) {
        select[cnt] = sale[i];
        dfs(cnt + 1);
    }
}

vector<int> solution(vector<vector<int>> users, vector<int> emoticons) {
    vector<int> answer;
    int plus_cnt = 0;
    int total_profit = 0;
    int temp_plus, temp_profit;
    int emo_cnt = len(emoticons);
    
    dfs(0, emo_cnt);
    
    for(int i = 0; i < int(pow))
    
    vector<int> answer;
    return answer;
}