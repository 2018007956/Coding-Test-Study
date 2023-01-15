#include <iostream>
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    priority_queue<int, vector<int>, greater<int> > pQ;
    int answer = 0;
    int first = 0;
    int second = 0;

    for(int i=0; i<scoville.size(); i++){
        pQ.push(scoville[i]);
    }

    while(pQ.top() < K){
        if(pQ.size() == 1) return -1;
        
        answer++;
        first = pQ.top(); pQ.pop();
        second = pQ.top(); pQ.pop();

        pQ.push(first + (second * 2));
    }
    
    return answer;
}