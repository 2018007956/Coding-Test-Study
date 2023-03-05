#include<iostream>
#include<stdio.h>
#include<vector>
#include<algorithm>
using namespace std;

typedef struct {
    int num, recom, order;
    bool operator == (int n) {
        return this-> num == n;
    }
}candidate;

bool comp1(const candidate& c1, const candidate& c2) {
    if(c1.recom == c2.recom)
        return c1.order > c2.order;
    
    else {
        return c1.recom > c2.recom;
    }
}

bool comp2(const candidate& c1, const candidate& c2) {
    return c1.num < c2.num;
}
	
int main() {
    int n, total, index, stu;
    cin >> n;
    cin >> total;
    int data[total];
    vector<candidate> pic;

    for(int i = 0; i < total; i++) {
        cin >> stu;

        if(pic.size() < n) {
            if(find(pic.begin(), pic.end(), stu) != pic.end()) {
                index = find(pic.begin(), pic.end(), stu) - pic.begin();
                pic[index].recom++;
            }
            else
                pic.push_back({stu, 1, i});
        }

        else {
            if(find(pic.begin(), pic.end(), stu) != pic.end()) {
                index = find(pic.begin(), pic.end(), stu) - pic.begin();
                pic[index].recom++;
            }
            
            else {
	            sort(pic.begin(), pic.end(), comp1);    
	            pic.pop_back();
	            pic.push_back({stu, 1, i});
        	}
		}
    }
    sort(pic.begin(), pic.end(), comp2);

    for(int i = 0; i < pic.size(); i++) {
        cout << pic[i].num << " ";
    }
}
