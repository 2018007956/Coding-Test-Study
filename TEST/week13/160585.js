let linesO = 0;
let linesX = 0; // detect된 O와 X의 빙고 개수

function findNumber(arr, el){
    let number = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++)
            if(arr[i][j] == el) number++;
    }
    return number;
}

function findHorizontalLine(arr){
    for(let i=0; i<arr.length; i++){
        let matchX = 0;
        let matchO = 0;
        
         for(let j=0; j<arr.length; j++){
             if(arr[i][j] == 'O') matchO++;
             else if(arr[i][j] == 'X') matchX++;
         }
        
        if(matchO >=3) linesO++;
        else if(matchX >=3) linesX++;
    }
}

function findVerticalLine(arr){
    for(let i=0; i<arr.length; i++){
        let matchX = 0;
        let matchO = 0;
        
         for(let j=0; j<arr.length; j++){
             if(arr[j][i] == 'O') matchO++;
             else if(arr[j][i] == 'X') matchX++;
         }
        
        if(matchO >=3) linesO++;
        else if(matchX >=3) linesX++;
    }
}

function findDiagonalLine(arr){
    let matchX = 0;
    let matchO = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i][i] == 'O') matchO++;
        else if(arr[i][i] == 'X') matchX++;
    }
    
    if(matchO >= 3) linesO++;
    else if(matchX >= 3) linesX++;
    
    matchX = 0;
    matchO = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i][2-i] == 'O') matchO++;
        else if(arr[i][2-i] == 'X') matchX++;
    }
    
    if(matchO >= 3) linesO++;
    else if(matchX >= 3) linesX++;
}

function solution(board) {
    findHorizontalLine(board);
    findVerticalLine(board);
    findDiagonalLine(board);
    
    const numberOfLines = linesX + linesO;
    const numberOfO = findNumber(board, 'O');
    const numberOfX = findNumber(board, 'X');
    
    if(numberOfO + numberOfX == 0) return 1; // 보드판이 모두 . 인 경우
    if(numberOfO < numberOfX) return 0; // X의 차례가 아닌 경우
    if(numberOfO > numberOfX + 1) return 0; // O의 차례가 아닌 경우
    if(numberOfO == numberOfX && linesO >= 1) return 0; // O의 차례에서 이미 빙고가 나온 경우(테케 2번)
    if(numberOfO > numberOfX && linesX >= 1) return 0; // X의 차례에서 이미 빙고가 나온 경우

    return 1;
}