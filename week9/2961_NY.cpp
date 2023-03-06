// 도영이가 만든 음식
// 연산자가 여러개 있는 경우에는 안전하게 ()로 영역 구분해주기

#include<iostream>
#include<stdio.h>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    int n, s, b;
    int ans = 9999999999;

    cin >> n;
    vector<pair<int, int> > v; // <sour, bitter>

    for(int i = 0; i < n; i++) {
        cin >> s >> b;
        v.push_back(make_pair(s, b));
    }

    for(int i = 1; i < (1 << n); i++) {
        s = 1;
        b = 0;

        for(int j = 0; j < n; j++) {
            if((i & (1 << j)) > 0) {
                s = s * v[j].first;
                b = b + v[j].second;
            }
        }
        ans = min(ans, abs(s - b));
    }

    cout << ans;
}
