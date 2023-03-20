#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

vector<int> solution(vector<int> fees, vector<string> records) {
    vector<int> answer;
    
    int in_out[10000];
    int time_check[10000];
    int total_time[10000];
    vector<int> today_car;
    
    int rec_size = records.size();
    int car_num, i_o, h, m, park_time, t, res, temp;
    float ttemp;
    
    int basic_time = fees[0];
    int basic_fee = fees[1];
    int plus_time = fees[2];
    int plus_fee = fees[3];
    int last_time = 23 * 60 + 59;
    
    for(int i = 0; i < rec_size; i++) {
        car_num = stoi(records[i].substr(6, 4));
        today_car.push_back(car_num);
        
        h = stoi(records[i].substr(0, 2));
        m = stoi(records[i].substr(3, 2));
        t = h * 60 + m;
        
        in_out[car_num]++;
        
        // 2개라는 건 출차된 거니까
        if(in_out[car_num] == 2) {
            park_time = t - time_check[car_num];
            total_time[car_num] += park_time;
            
            in_out[car_num] = 0;
        }
        
        // 입차인거니까
        else {
            time_check[car_num] = t;
        }
    }

    // problem is 출차하지 않고 남아있는 차 찾아내기
    sort(today_car.begin(), today_car.end());
    today_car.erase(unique(today_car.begin(),today_car.end()), today_car.end());
    
    for(int i = 0; i < today_car.size(); i++) {
        if(in_out[today_car[i]] == 1) {
            park_time = last_time - time_check[today_car[i]];
            total_time[today_car[i]] += park_time;
            in_out[today_car[i]] = 0;
        }
        
        if(total_time[today_car[i]] <= basic_time) {
            res = basic_fee;
        }
        
        else{
            temp = total_time[today_car[i]] - basic_time;
            res = basic_fee + ceil((float)temp / plus_time) * plus_fee;
        }
        
        answer.push_back(res);
    }

    return answer;
}