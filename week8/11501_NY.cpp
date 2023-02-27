#include<iostream>
#include<stdio.h>
using namespace std;

#define MAX 1000001
int stock_price[MAX];

int main() {
    int t, n, max_price;
    long long profit;
    cin >> t;

    for(int i = 0; i < t; i++) {
        cin >> n;
        for(int j = 0; j < n; j++) {
            scanf(" %d", &stock_price[j]);
        }

        max_price = stock_price[n - 1];
        profit = 0;

        for(int j = n - 2; j > -1; j--) {
            if(max_price > stock_price[j]) {
                profit += max_price - stock_price[j];
            }

            else
                max_price = stock_price[j];
        }

        cout << profit << endl;
    }
}