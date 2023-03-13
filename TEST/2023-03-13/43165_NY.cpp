#include <iostream>
#include <string>
#include <vector>

using namespace std;
int answer;
vector<int> backup;
int sum = 0;

void dfs(vector<int> numbers, int target, int now) {
    if(now == numbers.size()) {
        cout << sum << endl;
        if(sum == target) {
            answer++;
            backup.pop_back();
        }
        return;
    }
    
    for(int i = 0; i < 2; i++) {
        if(i == 0) {
            sum += numbers[now];
            backup.push_back(sum);
        }
        
        else {
            sum -= numbers[now];
            backup.push_back(sum);
        }
        
        dfs(numbers, target, now + 1);
        sum = backup.back();
    }
    backup.pop_back();
    return;
}

int solution(vector<int> numbers, int target) {
    answer = 0;
    backup.push_back(0);
    dfs(numbers, target, 0);
    return answer;
}