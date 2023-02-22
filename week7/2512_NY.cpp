// solved by binary search

#include<iostream>
#include<stdio.h>
#include<algorithm>
using namespace std;

int main() {
    int n, total, start, end, mid, sum, ans;
    cin >> n;

    int *request = new int(n);

    for(int i = 0; i < n; i++) {
        scanf(" %d", &request[i]);
    }
    cin >> total;

    sort(request, request + n);

    start = 0;
    end = request[n-1];
    
    while(start <= end) {
        sum = 0;
        mid = (start + end) / 2;
        
        for(int i = 0; i < n; i++) {
            sum += min(request[i], mid);
        }

        if(total >= sum) {
            ans = mid;
            start = mid + 1;
        }

        else {
            end = mid - 1;
        }
    }

    cout << ans;
    delete request;

    return 0;
}