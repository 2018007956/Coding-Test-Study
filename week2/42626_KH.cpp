// 더 맵게
#include <iostream>
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    priority_queue<int, vector<int>, greater<int> > pQ;
    int answer = 0;
    int first;
    int second;

    for(int i=0; i<scoville.size(); i++){
        pQ.push(scoville[i]);
    }

    while(pQ.top() < K){
        answer++;
        first = pQ.top(); pQ.pop();
        second = pQ.top(); pQ.pop();

        pQ.push(first + (second * 2));
    }
    
    return answer;
}