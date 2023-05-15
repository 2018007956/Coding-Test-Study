function findNumber(arr, el){
    let number = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] == el)
                number++;
        }
    }
    return number;
}

//세로
// [0][1]
// [0][2]
// [0][3]

// [1][1]
// [1][2]
// [1][3]

// ...

function findHorizontalLine(arr){
    for(let i=0; i<arr.length; i++){
    let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[i][j] == arr[i][j+1] && arr[i][j] != '.'){
                if(number >= 1) return false
                else number++;
            }
        }
     }
    return true;
}

function findVerticalLine(arr){
    for(let i=0; i<arr.length-1; i++){
    let number = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] == arr[i+1][j] && arr[i][j] != '.'){
                if(number >= 1) return false;
                else number++;
            }
        }
     }
    return true;
}

//대각선
// [0][0]
// [1][1]
// [2][2]

// [0][2]
// [1][1]
// [2][0]

function findDiagonalLine(arr){
    for(let i=0; i<arr.length-1; i++){
        let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[i][j] == arr[i+1][j+1] && arr[i][j] != '.'){
                if(number >= 1) return false;
                else number++;
            }
        }
     }
    return true;
}

function solution(board) {
    // board가 정상일 조건
    // 1) O의 개수 >= X의 개수
    // 2) 가로, 세로, 대각선에 대해 1번 이하의 줄이 있어야 함
    
    
    const numberOfO = findNumber(board, 'O');
    const numberOfX = findNumber(board, 'X');
    if(numberOfO < numberOfX) return 0;
    else if(numberOfO == 0 && numberOfX == 0) return 1;

    if (findHorizontalLine(board) == false) return 0;
    else if(findVerticalLine(board) == false) return 0;
    else if(findDiagonalLine(board) == false) return 0;
    
    return 1;
}