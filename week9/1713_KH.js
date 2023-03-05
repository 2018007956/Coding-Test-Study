// 후보 추천하기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const number_of_frames = Number(input[0]); // 사진틀의 개수 
const number_of_votes = Number(input[1]); // 전체 학생의 총 추천 횟수
const votes = input[2].split(' ').map(Number);

class PriorityQueue {
    constructor() {
      this.candidates = [];
      this.order = 0; // 게시순서
    }

    enqueue(student, vote) { 
        // 새로운 데이터를 넣을 때 같은 추천수가 있는지 체크
        for(let i=0; i<this.candidates.length; i++){  
            if(vote >= this.candidates[i]['vote']){ // 있으면 오래된 게시순서가 뒤로 가게 배열의 위치를 바꾼다
                this.candidates.splice(i, 0, {'student': student, 'vote': vote, 'order': this.order++});
                return;
            }
        }
        // 없다면 마지막 index에 push
        this.candidates.push({'student': student, 'vote': vote, 'order': this.order++});
    }
    dequeue() {
      return this.candidates.pop();
    }

    find(student) { 
        // student 가 존재하면 추천받은 횟수를 return, 존재하지 않으면 0을 return
        for(let i=0; i<this.candidates.length; i++){
            if(this.candidates[i]['student'] == student) 
                return this.candidates[i]['vote'];
        }
        return 0;
    }

    update(student, vote){

        let index = 0; // 해당 student의 index 저장(끼워넣고 origin data를 삭제하기 위함)
        for(let i=0; i<this.candidates.length; i++){  
            if(this.candidates[i]['student'] == student){
                index = i;
                break;
            }
        }

        // 추천수 없데이트 후, 기존 학생들과의 추천수 비교
        // 1. 낮은 추천수를 가진 학생이 있다면 그 앞의 index에 끼워넣는다
        // 2. 같은 추천수를 가진 학생이라면 게시순서가 오래 되었을 떄만 그 앞에 index에 끼워 넣는다
        for(let i=0; i<this.candidates.length; i++){  
            if((vote > this.candidates[i]['vote']) || (vote == this.candidates[i]['vote'] && this.candidates[index]['order'] > this.candidates[i]['order'])){
                this.candidates.splice(i, 0, {'student': student, 'vote': vote, 'order': this.candidates[index]['order']}); // 정렬
                this.candidates.splice(index+1, 1); // 원래 데이터 삭제 
                break;
            }
        }
    }
    print(){
        //출력 형식에 따라 후보 학생을 오름차순 정렬하여 출력
        const student = [];

        this.candidates.sort((a, b) => a['student'] - b['student']);

        this.candidates.forEach(element => {
            student.push(element['student']);
        });
        console.log(student.join(' '));
    }
}

/* Main */
let candidates = new PriorityQueue();

votes.forEach(student => {
    // console.log(candidates.candidates)
    const vote = candidates.find(student); // 사진틀에 존재하는 학생인지 체크

    if(vote != 0) candidates.update(student, vote+1) // 사진틀에 이미 존재하는 학생인 경우 vote+1
    else{
        if(candidates.candidates.length >= number_of_frames) // 사진틀이 꽉 차있을 경우 맨 마지막 학생 삭제
            candidates.dequeue();

        candidates.enqueue(student, 1);
    }
});

candidates.print()