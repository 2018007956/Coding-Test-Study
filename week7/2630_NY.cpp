// 색종이 만들기

#include<iostream>
#include<stdio.h>
using namespace std;

#define MAX 130
int colored_paper[MAX][MAX];
int minus_one, zero; // 0 = white, 1 = blue

bool check_same_number(int r_start, int c_start, int size) {
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            if(colored_paper[r_start][c_start] != colored_paper[r_start + i][c_start + j]) {
                return false;
            }
        }
    }

    return true;
}

void cutting_paper(int r_start, int c_start, int size) {
    if(check_same_number(r_start, c_start, size)) {
        if(colored_paper[r_start][c_start]) {
            zero++;
            return;
        }
        else {
            minus_one++;
            return;
        }
    }

    else {
        int nsize = size / 2;
        if(nsize == 0)
            return;

        cutting_paper(r_start, c_start, nsize);
        cutting_paper(r_start, c_start + nsize, nsize);
        cutting_paper(r_start + nsize, c_start, nsize);
        cutting_paper(r_start + nsize, c_start + nsize, nsize);
    }
}
int main() {
    minus_one = 0;
    zero = 0;

    int N;
    cin >> N;
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            scanf(" %d", &colored_paper[i][j]);
        }
    }

    cutting_paper(0, 0, N);

    cout << minus_one << endl;
    cout << zero;

    return 0;
}