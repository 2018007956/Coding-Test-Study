#include<string>
#include <iostream>
#include <vector>

using namespace std;

bool solution(string s)
{
    bool answer = true;
    vector<char> v;
    
    for(int i = 0; i < s.length(); i++) {
        if(s[i] == '(') {
            v.push_back('(');
        }
        else {
            if(v.empty()) {
                answer = false;
                break;
            }
            v.pop_back();
        }
    }
    
    if(!v.empty()) {
        answer = false;
    }

    return answer;
}