#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    int s, w, h, temp;
    s = brown + yellow;
    w = s;
    h = 1;
    while(w >= h) {
        if(s % h == 0) {
            w = s / h;
            temp = (w - 2) * (h - 2);
            if(temp == yellow) {
                answer.push_back(w);
                answer.push_back(h);
                break;
            }
        }

        h++;
    }

    return answer;
}

int main() {
    int b, y;
    cin >> b >> y;
    vector<int> result = solution(b, y);
    
    cout << result[0] << " " << result[1];
}
