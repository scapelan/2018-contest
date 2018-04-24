$(document).keydown(function(event){
    switch (event.keyCode){
        //left
        case 37:
            if(moveLeft()){
                generateOneNumber();
                generateOneNumber();                
                isgameover();
            }
            break;
        //up
        case 38:
            break;
        //right
        case 39:
            break;
        //down
        case 40:
            break;
        default:
            break;
    }
})
//判断是否可以向左移动并左移
function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }else{
        for(var i = 0; i < 4; i++){
            for(var j = 1; j < 4; j++){
                //当前格子不为0
                if(board[i,j] != 0){
                    for(var k = 0; k < j; k++){
                        if(board[i,k] == 0 && nospace(i, k, j, board)){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] = board[i][j];
                            board[i][j] = 0; 
                        }else if(board[i][k] == board[i][j] && nospace(i, k, j, board)){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] += board[i][j];
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
        setTimeout('updateBoardView()', 200);
        return true;
    }  
}

