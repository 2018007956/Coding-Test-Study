#include<iostream>
#include<stdio.h>
#include<vector>
#include<algorithm>
#include<queue>
using namespace std;

#define MAX 1001
int n, m;

vector<pair<int, int> > graph[MAX]; // <city, weight>

int dist[MAX] = {999999999}; // dist

void dijkstra(int source) {
    priority_queue<pair<int, int> > pq; // <dist, node>
    int cost, city, update;

    dist[source] = 0;
    pq.push(make_pair(0, source));
    
    while(!pq.empty()) {
        cost = pq.top().first;
        city = pq.top().second;
        pq.pop();

        if(dist[city] < cost)
            continue;

        for(int i = 0; i < graph[city].size(); i++) {
            update = cost + graph[city][i].second;
            if(dist[graph[city][i].first] > update) {
                dist[graph[city][i].first] = update;
                pq.push(make_pair(update, graph[city][i].first));
            }
        }
    }
}
int main() {
    int a, b, c, start, end;

    cin >> n;
    cin >> m;

    for(int i = 0; i < m; i++) {
        cin >> a >> b >> c;
        graph[a].push_back(make_pair(b, c));
    }

    cin >> start >> end;
    fill(dist, dist + 1001, 999999999);

    dijkstra(start);

    cout << dist[end];
}
