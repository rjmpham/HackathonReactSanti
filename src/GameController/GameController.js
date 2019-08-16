

class GameController{
	gameState = null;
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
	
	movePlayer(x, y){
		
	}
	
	buildAt(x, y){
		//assume for now that the build is valid;
		this.gameState[x][y].buildLevel();
	}
	
	verifyMove(x, y){
		
	}
	
	verifyBuildAt(x, y){
		return this.gameState[x][y] <4;
    }
    

    //Returns a 1D list of tiles that the current turn player can move.
    getAllValidMoves(){
        let playerTile = this.getTile(activePlayer);
        let localNine = this.getPlayerLocalNine();
        localNine = localNine.filter(tile => tile.canPlayerMoveTo()); //filter out all capped and worker filled tiles
        localNine = localNine.filter(tile => tile.topLevel <= playerTile.topLevel+1); //filter out all tiles that are too high
        
        return localNine.map(tile => tile.position);
    }

    getAllValidBuildLocations(){
        let playerTile = this.getTile(activePlayer);
        let localNine = this.getPlayerLocalNine();
        localNine = localNine.filter(tile => tile.canPlayerMoveTo()); //filter out all capped and worker filled tiles
        return localNine.map(tile => tile.position);
    }

    getPlayerLocalNine(){
        let localNine = [];
        for(dx = -1; dx <= 1; dx++){
            for(dy = -1; dy <= 1; dy++){
                let tx = this.activePlayer.position.x + dx ;
                let ty = this.activePlayer.position.y + dy;
                if(tx >= 0 && tx <= boardSize){
                    if(ty >= 0 && tx <= boardSize){
                        localNine.push(this.gameState[tx, ty]);
                    }
                }
            }
        }
        return localNine;
    }


    getTile(x, y){
        return this.gameState[x][y];
    }

    getTile(position){
        return this.gameState[position.x, position.y];
    }

    getTile(player){
        return this.gameState[player.position.x][player.position.y];
    }

	
}

class Player(){
    position = null;
    }

}





