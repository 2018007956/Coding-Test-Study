#include <iostream>
#include <string>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

int make_nnn(int N, int step) {
    int nnn = 0;
    for(int i = 0; i < step; i++) {
        nnn += N * pow(10, i);
    }

    return nnn;
}

int solution(int N, int number) {
    int answer = 0;
    int serial = 0;
    int op1, op2;
    vector<int> dp[9];
    answer = 1;

    while(true) {
        if(answer > 8) {
            answer = -1;
            break;
        }

        serial = make_nnn(N, answer);
        dp[answer].push_back(serial);
        if(serial == number) {
            break;
        }

        for(int i = 0; i < answer - 1; i++) {
            for(int j = 0; j < dp[i+1].size(); j++) {
                op1 = dp[i+1][j];
                
                for(int k = 0; k < dp[answer - i - 1].size(); k++) {
                    op2 = dp[answer - i - 1][k];
                    dp[answer].push_back(op1 + op2);
                    dp[answer].push_back(op1 - op2);
                    dp[answer].push_back(op1 * op2);
                    if(op2 != 0) {
                        dp[answer].push_back(op1 / op2);
                    }
                }
            }
        }
	
        std::vector<int>::iterator it = find(dp[answer].begin(), dp[answer].end(), number);
        if(it != dp[answer].end()) {
            break;
        }

        answer++;
    }


    return answer;
}

int main() {
    int n, num, ans;
    cin >> n;
    cin >> num;

    ans = solution(n, num);
    cout << ans;
    
    return 0;
}
