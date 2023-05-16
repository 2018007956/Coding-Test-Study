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

// 가로
// [0][0]
// [0][1]
// [0][2]

// [1][0]
// [1][1]
// [1][2]

// ...


function findHorizontalLine(arr){
    let total = 0;
    
    for(let i=0; i<arr.length; i++){
        let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[i][j] == arr[i][j+1] && arr[i][j] != '.')
                number++;
        }
        if(number >= 2) total++;
        if(total >= 2) return total;
     }
    return total;
}

function findVerticalLine(arr){
    let total = 0;
    
    for(let i=0; i<arr.length; i++){
    let number = 0;
        for(let j=0; j<arr.length-1; j++){
            if(arr[j][i] == arr[j+1][i] && arr[j][i] != '.'){
                number++;
        }
        if(number >= 2) total++;
        if(total >= 2) return total;
        }
    }
    return total;
}

//대각선
// [0][0]
// [1][1]
// [2][2]

// [0][2]
// [1][1]
// [2][0]

function findDiagonalLine(arr){
    let total = 0;
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) 
        if(arr[0][0] != '.') total++;
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])
        if(arr[0][2] != '.') total++;
    
    return total;
}

function solution(board) {
    // board가 정상일 조건
    // 1) O의 개수 >= X의 개수
    // 2) 가로, 세로, 대각선에 대해 1번 이하의 줄이 있어야 함
    
    const numberOfHorizontal = findHorizontalLine(board);
    const numberOfVertical = findVerticalLine(board);
    const numberOfDiagonal = findDiagonalLine(board);
    console.log(numberOfDiagonal)
    
    const numberOfO = findNumber(board, 'O');
    const numberOfX = findNumber(board, 'X');
    
    if(numberOfO > numberOfX + 2 || numberOfO < numberOfX) return 0;
    // else if(numberOfO == 0 && numberOfX == 0) return 1;
    // else if(numberOfO+numberOfX == 9) return 1;
    
    if(numberOfHorizontal + numberOfVertical + numberOfDiagonal >= 2) 
        if(numberOfO+numberOfX == 9) return 1;
        else if(numberOfHorizontal >= 1 && numberOfVertical >= 1 && numberOfDiagonal >= 1) 
            return 1;
        else return 0;
    return 1;
}