export default class GameState{
    boardState = null;
   
    player1 = null;
    player2 = null;
    activePlayer = null;
    moveDistance = 1;
    boardSize = 0;
    
    constructor(boardSize){
		this.gameState = [boardSize][boardSize];
		for(let x = 0; x < gameState[0].length; x++){
			for(let y = 0; y < gameState[x].length; y++){
				gameState[x][y] = new Tile(x, y); // 0 means nothing has been built
			}
		}
		//player1 = new Player();
		//player2 = new Player();
        this.activePlayer = player1;
        this.boardSize = boardSize;
    }
    
    //Get the 3x3 grid around a target position. 
    //Returns up to 9 Tiles, depending if the position is on the edge of the board or not.
    getLocalNine(position){
        let localNine = [];
        for(dx = -1; dx <= 1; dx++){
            for(dy = -1; dy <= 1; dy++){
                let tx = position.x + dx ;
                let ty = position.y + dy;
                if(tx >= 0 && tx <= boardSize){
                    if(ty >= 0 && tx <= boardSize){
                        localNine.push(this.boardState[tx, ty]);
                    }
                }
            }
        }
        return localNine;
    }

    getTile(x, y){
        return this.gameState[x][y];
    }

    getTile(vector2){
        return this.gameState[vector2.x][vector2.y];
    }

    //update the boardState.
    buildAt(x, y){
		this.boardState[x][y].buildLevel();
    }
    
    //update the boardState
    moveWorker(workerPosition, targetPosition){
        this.boardState[workerPosition.x, workerPosition.y].moveWorker();
        this.boardSize[targetPosition.x, targetPosition.y].removeWorker();
}