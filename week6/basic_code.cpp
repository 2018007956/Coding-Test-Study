#include<iostream>
#include<stdio.h>
#include<queue>
#include<vector>
using namespace std;

#define MAX 1000
int visit[MAX];
vector<int> a[MAX];

void bfs(int start) {
    queue<int> q;
    q.push(start);
    visit[start] = true;

    while(!q.empty()) {
        int x = q.front();
        q.pop();

        for(int i = 0; i < a[x].size(); i++) {
            int y = a[x][i];
            if(!visit[y]) {
                q.push(y);
                visit[y] = true;
            }
        }
    }
}