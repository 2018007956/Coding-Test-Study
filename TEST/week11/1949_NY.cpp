#include <iostream>
#include <vector>
using namespace std;

#define MAX 10000
bool visited[MAX];

int main() {
    int n;
    cin >> n;
    int pop[n];
    int a, b;
    vector<int> ll[n];

    for(int i = 0; i < n; i++) {
        scanf(" %d", &pop[i]);
    }

    for(int i = 0; i < n - 1; i++) {
        cin >> a >> b;
        ll[a].push_back(b);
    }

    while(true) {
        for(int i = 1 ; i <= n; i++) {
            visited[i] = true;
            for(int j = 0; j < ll[i].size(); j++) {
                visited[ll[i][j]] = true;
            }
        }
    }
}