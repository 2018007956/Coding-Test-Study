#include <string>
#include <vector>

using namespace std;

void dfs() {
    
}

int solution(vector<string> maps) {
    int answer = 0;
    int map_size = maps.size();
    int flag = 0;
    int s_dir[2];
    // finding start position
    for(int i = 0; i < map_size; i++) {
        for(int j = 0; j < map_size; j++) {
            if(maps[i][j] == 's') {
                s_dir[0] = i;
                s_dir[1] = j;
                flag = 1;
                break;
            }
        }

        if(flag == 1) {
            break;
        }
    }


    return answer;
}