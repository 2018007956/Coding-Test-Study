#include<iostream>
#include<stdio.h>
#include<algorithm>
#include<stdlib.h>
using namespace std;

#define MAX 100001
int log_jump[MAX];
int rearrange[MAX];

int main() {
    int t, n, right, left, max_dist, idx;
    cin >> t;

    for(int i = 0; i < t; i++) {
        cin >> n;

        for(int j = 0; j < n; j++) {
            scanf(" %d", &log_jump[j]);
        }

        sort(log_jump, log_jump + n);
        right = 0;
        left = n - 1;
        max_dist = 0;
        idx = 0;

        while(right <= left) {
            if(right != left) {
                rearrange[right] = log_jump[idx];
                rearrange[left] = log_jump[idx + 1];        
            }
            else {
                rearrange[right] = log_jump[idx];
            }

            right++;
            left--;
            idx += 2;
        }

        for(int j = 0; j < n - 1; j++) {
            if(j == 0) {
                max_dist = max(max_dist, abs(rearrange[n - 1] - rearrange[0]));
            }
            max_dist = max(max_dist, abs(rearrange[j + 1] - rearrange[j]));
        }

        cout << max_dist << endl;
    }
}