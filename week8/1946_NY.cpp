#include<iostream>
#include<stdio.h>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    int n, num, a, b, interview, result;
    
    cin >> n;

    for(int i = 0; i < n; i++) {
        cin >> num;

        vector<pair<int, int> > candidate;

        for(int j = 0; j < num; j++) {
           cin >> a >> b;
           candidate.push_back(make_pair(a, b));
        }

        sort(candidate.begin(), candidate.end());

        result = 1;
        interview = candidate[0].second;

        for(int j = 1; j < num; j++) {
            if(interview > candidate[j].second) {
                interview = candidate[j].second;
                result++;
            }
        }

        cout << result << endl;
    }

    return 0;
}
