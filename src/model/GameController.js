import Tile from './Tile';
import Player from './Player';
import Vector2 from './Vector2';

export default class GameController{
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
	
	verifyMove(workerPosition, targetPosition){
        return this.getAllValidMoves(workerPosition).includes(targetPosition);
	}
	
	verifyBuildAt(workerPosition, targetPosition){
		return this.getAllValidBuildLocations(workerPosition).includes(targetPosition);
    }
    

    //Returns a 1D list of tiles that the current turn player can move.
    getAllValidMoves(workerPosition){
        let workerTile = this.getTile(workerPosition);
        let localNine = this.getWorkerLocalNine();
        localNine = localNine.filter(tile => tile.isBuildable()); //filter out all capped and worker filled tiles
        localNine = localNine.filter(tile => tile.topLevel <= workerTile.topLevel+1); //filter out all tiles that are too high
        
        return localNine.map(tile => tile.position);
    }

    getAllValidBuildLocations(workerPosition){
        let localNine = this.getWorkerLocalNine(workerPosition);
        localNine = localNine.filter(tile => tile.isBuildable()); //filter out all capped and worker filled tiles
        return localNine.map(tile => tile.position);
    }

    getWorkerLocalNine(workerPosition){
        let localNine = [];
        for(dx = -1; dx <= 1; dx++){
            for(dy = -1; dy <= 1; dy++){
                let tx = workerPosition.x + dx ;
                let ty = workerPosition.y + dy;
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

    getTile(vector2){
        return this.gameState[vector2.x][vector2.y];
    }

   

	
}





