#include<iostream>
#include<math.h>
#include<string>
#include<vector>
#include<algorithm>
using namespace std;

bool isPrime(int a) {
	// for determining 0, 1 as non-prime number
    if(a < 2) {
		return false;
	}
	
    // using "Sieve of Eratosthenes" to find prime number faster
    for(int i = 2; i <= sqrt(a); i++) {
        if(a % i == 0) {
            return false;
        }
    }
    return true;
}

int solution(string numbers) {
    int answer = 0;
    vector<char> v;
    vector<int> comb;

    // split string
    for(int i = 0; i < numbers.length(); i++) {
        v.push_back(numbers[i]);
    }
    sort(v.begin(), v.end()); // sort for next_permutaion
		
    // make combination using next_permutaion
    do {
        string temp = "";
        for(int i = 0; i < v.size(); i++) {
            temp.push_back(v[i]);
            comb.push_back(stoi(temp)); // stoi = string to int
		}
    }while(next_permutation(v.begin(), v.end()));

    // delete the duplicated numbers
    sort(comb.begin(), comb.end());
    comb.erase(unique(comb.begin(), comb.end()), comb.end());  
    for(int i = 0; i < comb.size(); i++) {
		cout << comb[i] << " ";
    }    
    cout << endl;
    
    // count the prime number in possible combination 
    for(int i = 0; i < comb.size(); i++) {
        if(isPrime(comb[i])) {
            answer++;
        }
    }

    return answer;
}

int main() {
    string nums;
    cin >> nums;

    cout << solution(nums);
}
