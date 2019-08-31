/* eslint-disable no-unused-vars */
import Tile from './Tile.js';

export default class GameState{
    boardState = null;
    playerList = []
    activePlayer = null;
    boardSize = 0;
    winner = null;
    selectedWorker = null;
    highlightedTiles = [];

    isInSetup = true;
    needsToSelectWorker = false;
    workerNeedsToMove = false;
    needsToBuild = false;

    error_message = null;
    
    constructor(boardSize){
        this.boardState = new Array(boardSize);
        for (var i = 0; i < this.boardState.length; i++) {
            this.boardState[i] = new Array(boardSize);
        }
        
        for (let x = 0; x < this.boardState[0].length; x++){
            for (let y = 0; y < this.boardState[x].length; y++){
                this.boardState[x][y] = new Tile(x, y); // 0 means nothing has been built
            }
        }
        
        this.boardSize = boardSize;
    }
    
    //Get the 3x3 grid around a target position. 
    //Returns up to 9 Tiles, depending if the position is on the edge of the board or not.
    getLocalNine(position){
        let localNine = [];
        for (let dx = -1; dx <= 1; dx++){
            for (let dy = -1; dy <= 1; dy++){
                let tx = position.x + dx ;
                let ty = position.y + dy;
                if (tx >= 0 && tx < this.boardSize){
                    if (ty >= 0 && ty < this.boardSize){
                        if (!this.boardState[tx][ty] === undefined){
                            console.error('Attempted to push undefined to local 9.');
                        }
                        else {
                            localNine.push(this.boardState[tx][ty]);
                        }
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
        if(this.selectedWorker === null) console.error('There is no worker selected.');
        this.boardState[targetPosition.x][targetPosition.y].moveWorker(this.selectedWorker);
        this.boardState[workerPosition.x][workerPosition.y].removeWorker();
    }

    playerHasWon(){
        return this.winner === null;
    }

    highlightTiles(positions){
        if(this.selectedWorker === null)
            console.error('Selected worker is null');

        if (positions.length !== 0) {
            positions.forEach(tile => {
                this.getTile(tile.position).isHighlighted = true;
                this.highlightedTiles.push(tile);
            });
        }
    }

    clearHighlightedTiles(){
        // Clear the state of each tile
        this.highlightedTiles.forEach(tile => {
            this.getTile(tile.position).isHighlighted = false;
        });

        // Clear highlited tiles list
        this.highlightedTiles = [];
    }

    setTile(position, tile){
        this.boardState[position.x][position.y] = tile;
    }

    reset(){        
        for(let x = 0; x < this.boardState[0].length; x++){
            for(let y = 0; y < this.boardState[x].length; y++){
                this.boardState[x][y].reset();
            }
        }
        
        this.playerList.forEach(x => x.reset()); 
        this.winner = null;       
    }

    logGameState(){
        console.log('Current state: ');
        for(let x = 0; x < this.boardSize; x++){
            for(let y = 0; y < this.boardSize; y++){
                console.log(this.boardState[x][y].position + ' has worker: ' + this.boardState[x][y].worker);
            }
        }
    }
    
   
}