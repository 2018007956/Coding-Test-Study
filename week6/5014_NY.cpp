// 배열을 전역으로 선언하고, 변수로 초기화 못함.

#include<iostream>
#include<stdio.h>
#include<queue>
using namespace std;

#define MAX 1000001
int button[MAX] = {0};
bool visited[MAX] = {false};
queue<int> q;
int f, s, g, u, d;
int up_down[2];

void bfs(int start) {
    int temp, newf;
    visited[start] = true;
    q.push(start);

    while(!q.empty()) {
        temp = q.front();
        q.pop();
        
        for(int i = 0; i < 2; i++) {
            newf = temp + up_down[i];
            
            if(newf <= 0 || newf >= f + 1) 
                continue;

            if(!visited[newf]) {
                visited[newf] = true;
                button[newf] = button[temp] + 1;

                if(newf == g) {
                    return;
                }

                q.push(newf);
            }
        }
    }
}
int main() {
    cin >> f >> s >> g >> u >> d;

    if(s == g) {
        cout << 0;
        return 0;
    }
	
	up_down[0] = -d;
	up_down[1] = u;
	
    bfs(s);

    if(visited[g]) {
        cout << button[g];
    }

    else {
        cout << "use the stairs";

    }

    return 0;
}
