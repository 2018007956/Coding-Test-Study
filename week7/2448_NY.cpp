#include<iostream>
#include<stdio.h>
using namespace std;

char paper[3072][6144];

void draw_star(int x, int y, int n) {
    if(n == 3) {
        paper[x][y] = '*';
        paper[x+1][y-1] = '*';
        paper[x+1][y+1] = '*';
        paper[x+2][y-2] = '*';
        paper[x+2][y-1] = '*';
        paper[x+2][y] = '*';
        paper[x+2][y+1] = '*';
        paper[x+2][y+2] = '*';
        return;
    }

    draw_star(x, y, n/2);
    draw_star(x+n/2, y-n/2, n/2);
    draw_star(x+n/2, y+n/2, n/2);
}

int main() {
    int n;
    cin >> n;

    fill(&paper[0][0], &paper[3071][6144], ' ');

    draw_star(0, n-1, n);

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < 2*n; j++) {
            cout << paper[i][j];
        }
        cout << endl;
    }
}