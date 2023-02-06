#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

int find_friend(vector<int> *data, bool invite[], int number) {
	int count = 0;
	for(int i = 0; i < data[number].size(); i++) {
		if (!invite[data[number][i]]) {
			count++;
			invite[data[number][i]] = true;
		}
	}
	return count;
}

int main(){
	int one, two, a, b;
	int result = 0;
	cin >> one;
	cin >> two;
	vector<int> map[one+1];
	bool invited[one+1] = {false};
	invited[1] = true;
	
	for(int i = 0; i < two; i++) {
		cin >> a >> b;
		//undirected
		map[a].push_back(b);
		map[b].push_back(a);
	}

	for(int i = 0; i < map[1].size(); i++) {
		result += find_friend(map, invited, map[1][i]);
	}
	result += find_friend(map, invited, 1);
	
	cout << result;
}
