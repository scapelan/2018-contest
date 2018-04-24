var board = new Array(); //存储游戏的数据
var score = 0;
$(function () {
    newgame();
});

function newgame() {
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}

function init() {
    //有数字的小方块
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top",getPosTop(i,j));
            gridCell.css("left",getPosLeft(i,j));  
        }
    }  
    updateBoardView();  
}
//更新棋盘上显示的方块
function updateBoardView(){
    $(".number-cell").remove();
    //遍历格子，改变样式
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var numberCell=$("#number-cell-"+i+"-"+j);
            if(board[i][j]==0){
                numberCell.css({
                    "width":"0px",
                    "height":"0px",
                    "top":getPosTop(i,j)+50,/*这里是为了把它放中间，动画才好看*/
                    "left":getPosLeft(i,j)+50
                });
            }else{
                numberCell.css({
                    "width":100+'px',
                    "height":100+'px',
                    "top":getPosTop(i,j),
                    "left":getPosLeft(i,j),
                    "background-color":getNumberBackgroundColor(board[i][j]),
                    "color":getNumberColor(board[i][j])
                });
                numberCell.text(board[i][j]);
            }
        }
    }
}