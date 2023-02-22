// 공유기 설치

#include<iostream>
#include<stdio.h>
#include<algorithm>
using namespace std;

#define MAX 200001
int dist[MAX];
int house[MAX];

int main() {
    int n, c;
    int mid, end, router, index, comp, start, ans = 0;
    cin >> n >> c;

    for(int i = 0; i < n; i++) {
        cin >> house[i];
    }
    sort(house, house + n);

    for(int i = 1; i < n; i++) {
        dist[i] = house[i] - house[i-1];
    }

    start = 1; // 현재거리의 최솟값
    end = house[n-1] - house[0]; // 현재거리의 최댓값

    while(start <= end) {
        comp = 0;
        router = 1;
        mid = (start + end) / 2;

        for(int i = 1; i < n; i++) {
            comp += dist[i];
            if(comp >= mid) {
                router++;
                comp = 0;
            }
        }

        if(router >= c) {
            start = mid + 1;
            ans = max(ans, mid);
        }

        else {
            end = mid - 1; 
        }
    }

    cout << ans;

    return 0;
}