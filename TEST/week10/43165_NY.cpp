#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> numbers, int target) {
    int answer = 0;
    int n = numbers.size();
    int sum = 0;
    
    for(int i = 1; i < (1 << n); i++) {
        sum = 0;
        for(int j = 0; j < n; j++) {
            if((i & (1 << j)) > 0) {
                sum += numbers[j];
            }
            else {
                sum -= numbers[j];
            }
        }
        if(sum == target) {
            answer++;
        }
    }

    return answer;
}