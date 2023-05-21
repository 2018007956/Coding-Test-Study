//이모티콘 할인 행사
#include <iostream>
#include <string>
#include <vector>
using namespace std;

#define MAX 7
int sale[4] = {10, 20, 30, 40}; // 10%, 20%, 30%, 40%
int sel[MAX]; // 중복순열 만들 때 사용
vector<vector<int>> combi;
int j = 0;

// c++의 경우, 제곱근 계산하는 pow 함수 원형이 double pow(double, double) 이어서
// 이거 type 맞추다가 빡쳐가지고 int 제곱근 함수 구현했어
int pow_int(int a, int b) {
    int result = 1;
    for(int i = 0; i < b; i++) {
        result *= a;
    }
    
    return result;
}

// dfs로 중복 순열 만들기
void dfs(int cnt, int len) {
    // 재귀함수 종료 조건은 dfs랑 같음
    if(cnt == len) {
        // "combi"라는 벡터형 자료구조를 global로 선언하고
        // size 지정을 안해줬더니 새로운 item 넣을 때, 공간 만들어줘야한대
        // 이거 오류 잡느라 20분은 쓴듯.... -> segmentattion fault 남
        combi.push_back(vector<int>());

        for(int i = 0; i < len; i++) {
            // combi는 이모티콘 할인률 적용할 수 있는 조합 저장하는 자료구조!
            combi[j].push_back(sel[i]);
            // cout << combi[j][i] << " ";
        }
        // cout << endl;
        j++;
        return;
    }
    
    for(int i = 0; i < 4; i++) {
        // for문 안에서 재귀를 부르니까 중복 가능한 순열 만들어졍
        sel[cnt] = sale[i];
        dfs(cnt + 1, len);
    }
}

vector<int> solution(vector<vector<int>> users, vector<int> emoticons) {
    vector<int> answer;
    int plus_cnt = 0; // 전체 이모티콘 플러스 이용자 수
    int total_profit = 0; // 전체 이윤
    int temp_plus, temp_profit; // 현재 할인률 조합 user별 값 저장
    int buy; // 현재 타켓 user가 산 이모티콘 값의 합
    
    int emo_cnt = emoticons.size(); // 이모티콘 개수
    int user_cnt = users.size(); // users 개수
    combi.reserve(pow_int(4, emo_cnt)); // combi 벡터 자료구조 공간 할당하기
    int emo_price[emo_cnt]; // 미리 할인된 이모티콘 값 계산해서 저장해두기
    
    // 이모티콘 할인률 중복 순열 전부 구하고
    dfs(0, emo_cnt);

    // 가능한 경우의 수만큼 돌면서
    for(int i = 0 ; i < combi.size(); i++) {
        temp_plus = 0; 
        temp_profit = 0;
        
        // 현재 경우의 수 할인율 적용된 이모티콘 가격
        for(int k = 0; k < emo_cnt; k++) {
            emo_price[k] = (emoticons[k] / 100) * (100 - combi[i][k]);
        }

        // 각 user마다 결정하기
        for(int k = 0; k < user_cnt; k++) {
            buy = 0;
            for(int l = 0; l < emo_cnt; l++) {
                // 유저의 기준 할인율보다 높은 거 다 사기
                if(combi[i][l] >= users[k][0]) {
                    buy += emo_price[l];
                }
            }

            // 유저의 기준 예산보다 넘으면 이모티콘 플러스 이용
            if(buy >= users[k][1]) {
                temp_plus++;
            }

            // 아니면 매출로 더해줌
            else {
                temp_profit += buy;
            }
        }
        
        // 이모티콘 plus이용자가 지금까지 이용자보다 많으면
        if(temp_plus > plus_cnt) {
            plus_cnt = temp_plus;
            total_profit = temp_profit;
        }

        // 이모티콘 plus이용자가 지금까지 이용자랑 같으면
        else if(temp_plus == plus_cnt) {
            // 매출이 클 때만 값 변경해주기
            if(temp_profit > total_profit) {
                total_profit = temp_profit;
            }
        }
    }

    answer.push_back(plus_cnt);
    answer.push_back(total_profit);
    return answer;
}
