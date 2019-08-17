import Tile from "./Tile.js";
import Player from "../Controllers/Player.js";

export default class GameState{
    boardState = null;

    playerList = []

    activePlayer = null;
    boardSize = 0;

    winner = null;

    selectedWorker = null;
    highlightedTiles = [];
    
    constructor(boardSize){
        this.boardState = new Array(boardSize);
        for (var i = 0; i < this.boardState.length; i++) {
            this.boardState[i] = new Array(boardSize);
        }
        
		for(let x = 0; x < this.boardState[0].length; x++){
			for(let y = 0; y < this.boardState[x].length; y++){
				this.boardState[x][y] = new Tile(x, y); // 0 means nothing has been built
			}
		}
        
        this.playerList = [new Player(this, "Player 0."), new Player(this, "Player 1")];
        this.activePlayer = this.playerList[0];
        this.boardSize = boardSize;
    }
    
    //Get the 3x3 grid around a target position. 
    //Returns up to 9 Tiles, depending if the position is on the edge of the board or not.
    getLocalNine(position){
        let localNine = [];
        for(let dx = -1; dx <= 1; dx++){
            for(let dy = -1; dy <= 1; dy++){
                let tx = position.x + dx ;
                let ty = position.y + dy;
                if(tx >= 0 && tx <= this.boardSize){
                    if(ty >= 0 && tx <= this.boardSize){
                        localNine.push(this.boardState[tx, ty]);
                    }
                }
            }
        }
        return localNine;
    }

    getTile(vector2){
        return this.boardState[vector2.x][vector2.y];
    }

    buildFloor(position){
        this.boardState[position.x][position.y].buildFloor();
    }
    
    //update the boardState
    moveWorker(workerPosition, targetPosition){
        this.boardState[workerPosition.x, workerPosition.y].moveWorker();
        this.boardSize[targetPosition.x, targetPosition.y].removeWorker();
    }

    playerHasWon(){
        return this.winner === null;
    }

    highlightTiles(positions){
        if(this.selectedWorker === null)
            console.error("Selected worker is null");
        
            positions.foreach( position => {
            this.boardState.getTile(position).isHighlighted = true;
            this.highlightedTiles.push(position);
        });
    }

    clearHighlightedTiles(){
        this.highlightedTiles.forEach(position => {
            this.boardState.getTile(position).isHighlighted = false;
        });
    }

    setTile(position, tile){
        this.boardState[position.x, position.y] = tile;
    }

    reset(){
       
       
        
		for(let x = 0; x < this.boardState[0].length; x++){
			for(let y = 0; y < this.boardState[x].length; y++){
				this.boardState[x][y] = new Tile(x, y); // 0 means nothing has been built
			}
		}
        
        this.playerList = [new Player(this, "Player 0."), new Player(this, "Player 1")];
        this.activePlayer = this.playerList[0];
        
    }
    
   
}