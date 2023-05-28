let linesO = 0;
let linesX = 0;
// detect된 O와 X의 빙고 개수

function findNumber(arr, el){
    let number = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] == el) number++;
        }
    }
    return number;
}

function findHorizontalLine(arr){
    for(let i=0; i<arr.length; i++){
        let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[i][j] == arr[i][j+1] && arr[i][j] != '.') number++;
        
            if(number >= 2){
                if(arr[i][j] == 'O') linesO += 1;
                else linesX += 1;
            }
        }
    }
}

function findVerticalLine(arr){
    for(let i=0; i<arr.length; i++){
    let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[j][i] == arr[j+1][i] && arr[j][i] != '.') number++;
            if(number >= 2){
                if(arr[i][j] == 'O') linesO += 1;
                else linesX += 1;
            }
        }
    }
}

function findDiagonalLine(arr){
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        if(arr[0][0] == 'O') linesO += 1;
        else if(arr[0][0] == 'X') linesX += 1;
    }
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        if(arr[0][2] == 'O') linesO += 1;
        else if(arr[0][2] == 'X') linesX += 1;
    }
}

function solution(board) {
    // board가 정상일 조건
    // 1) O의 개수 >= X의 개수
    // 2) 가로, 세로, 대각선에 대해 1번 이하의 줄이 있어야 함
    
    findHorizontalLine(board);
    findVerticalLine(board);
    findDiagonalLine(board);
    
    const numberOfLines = linesX + linesO;
    const numberOfO = findNumber(board, 'O');
    const numberOfX = findNumber(board, 'X');
    
    console.log(linesO)
    console.log(linesX)
    
    if(numberOfO + numberOfX == 0) return 1;
    if(numberOfO < numberOfX) return 0; // X의 차례가 아닌 경우
    if(numberOfO > numberOfX + 1) return 0; // O의 차례가 아닌 경우
    if(numberOfO == numberOfX && linesO >= 1) return 0; // O의 차례에서 이미 빙고가 나온 경우(테케 2번)
    if(numberOfO > numberOfX && linesX >= 1) return 0; // X의 차례에서 이미 빙고가 나온 경우

    return 1;
}