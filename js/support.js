function getPosTop(i, j) {
    let top = 20 + i * (100 + 20);
    return top;
}

function getPosLeft(i, j) {
    let left = 20 + j * (100 + 20);
    return left;
}

function getNumberBackgroundColor(number) {
    var color = "black";
    switch (number) {
        case 2:
            color = '#eee4da';
            break;
        case 4:
            color = "#ede0c8";
            break;
        case 8:
            color = '#f2b179';
            break;
        case 16:
            color = "#f59563";
            break;
        case 32:
            color = '#f67c5f';
            break;
        case 64:
            color = "#f65e3b";
            break;
        case 128:
            color = '#edcf72';
            break;
        case 256:
            color = "#edcc61";
            break;
        case 512:
            color = '#9c0';
            break;
        case 1024:
            color = "#33b5e5";
            break;
        case 2048:
            color = '#09c';
            break;
    }
    return color;
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e50";
    }
    return "white";
}
//检测能否左移
function canMoveLeft(board){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!= 0){
                if(board[i][j-1]==0||board[i][j-1]==board[i][j])
                    return true;                    
            }
        }
    }
    return false;
}

function nospace(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
            if (board[row][j] != 0) {
                return false;
            }
    }
    return true;
}

function generateOneNumber(){
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
    while(true){
        if(board[randx][randy] == 0){
            break;
        }
        //重复
        var randx=parseInt(Math.floor(Math.random()*4));
        var randy=parseInt(Math.floor(Math.random()*4));
    }
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);
}