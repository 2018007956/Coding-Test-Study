// 종이의 개수

#include<iostream>
#include<stdio.h>
using namespace std;

#define MAX 2190
int numbered_paper[MAX][MAX];
int minus_one, zero, plus_one; // 0 = white, 1 = blue

bool check_same_number(int r_start, int c_start, int size) {
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            if(numbered_paper[r_start][c_start] != numbered_paper[r_start + i][c_start + j]) {
                return false;
            }
        }
    }

    return true;
}

void cutting_paper(int r_start, int c_start, int size) {
    if(check_same_number(r_start, c_start, size)) {
        if(numbered_paper[r_start][c_start] == -1) {
            minus_one++;
            return;
        }
        else if(numbered_paper[r_start][c_start] == 0) {
            zero++;
            return;
        }

        else {
            plus_one++;
            return;
        }
    }

    else {
        int nsize = size / 3;
        if(nsize == 0)
            return;

        cutting_paper(r_start, c_start, nsize); // 0, 0, 3
        cutting_paper(r_start, c_start + nsize, nsize); // 0, 3, 3
        cutting_paper(r_start, c_start + (nsize * 2), nsize); // 0, 6, 3
        cutting_paper(r_start + nsize, c_start, nsize); // 3, 0, 3
        cutting_paper(r_start + nsize, c_start + nsize, nsize); // 3, 3, 3
        cutting_paper(r_start + nsize, c_start + (nsize * 2), nsize); // 3, 6, 3
        cutting_paper(r_start + (nsize * 2), c_start, nsize); // 6, 0, 3
        cutting_paper(r_start + (nsize * 2), c_start + nsize, nsize); // 6, 3, 3
        cutting_paper(r_start + (nsize * 2), c_start + (nsize * 2), nsize); // 6, 6, 3
    }
}
int main() {
    minus_one = 0, zero = 0, plus_one = 0;

    int N;
    cin >> N;
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            scanf(" %d", &numbered_paper[i][j]);
        }
    }

    cutting_paper(0, 0, N);

    cout << minus_one << endl;
    cout << zero << endl;
    cout << plus_one;

    return 0;
}