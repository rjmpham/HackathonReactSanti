import Player from './Player';
import Worker from "../Model/Worker";
import { nullLiteral } from '@babel/types';
import Vector2 from '../Model/Vector2';
import GameState from '../Model/GameState';

export default class GameController{
    
    activePlayer = null;
    isInSetup = true;
    gameState = null;
    
    constructor(){
        this.gameState = new GameState(5);
        this.player_1 = new Player();
        this.player_2 = new Player();
        this.activePlayer = this.player_1;
    }

    placeWorker(position) {
        this.activePlayer.placeWorker(position);
    }
    
    //This is where the game loop should be!
    beginTurn(){

    }

    getGameState(){
        return this.gameState;
    }

    moveWorker(workerPosition, targetPosition){
        this.gameState.moveWorker(workerPosition, targetPosition);  //update the board state
        this.gameState.activePlayer.moveWorker(workerPosition, targetPosition); //update the worker state
        if(this.gameState.playerHasWon())
            this.gameOver();
    }

    buildFloor(targetPosition){
        this.gameState.buildFloor(targetPosition); //update the board state
    }


    endTurn(){

        //update the active player
        // let playerIndex = this.gameState.playerList.indexOf(activePlayer);
        // playerIndex = (playerIndex + 1)% this.gameState.playerList.length;
        // activePlayer =this.gameState.playerList[playerIndex];

        //TODO: 
        //Updates the view, based on what the player is allowed to do.
    }
    

    newGame(){
        this.gameState.reset();
        this.activePlayer = this.player_1;
        console.log("Created a new game.");
    }

    endGame(){
        console.log('Game over!');
    }

    handleBoardClick(position){
        let clickedTile = this.gameState.getTile(position);


        //do we need to place workers?
        if(this.isInSetup){

            this.isInSetup = this.handleSetup(position);

        }
        

        //GO TO GAMELOOP
        
        //this.handleWorkerSelection(position);
        //check to see if the tile has a worker on it.

        // let workerOnTile = this.gameState.getTile(position).worker
        // if(workerOnTile === null)
        // {
        //     //is it their worker?
        //     if(this.activePlayer.hasWorkerAtPosition(position)){
        //         this.highlightWorkerMoves(workerOnTile);
        //         this.selectedWorker = workerOnTile;
        //     }
        // }
        //this.buildFloor(position);
        //console.log(this.gameState.getTile(position).topLevel + ' at ' + position.x +  position.y);
    }

    handleSetup(position){
        let clickedTile = this.gameState.getTile(position);

        //Do both players have 2 workers?
        // if(this.player_1.workers.length === 2 && this.player_2.workers.length ===2)
        // {
        //     this.isInSetup = false;
        //     console.log("Setup has finished.");
        //     return false;
        // }

        //Can't place a worker on top of another.
        if(clickedTile.worker !== null){
            console.log("Cannot place worker, tile is occupied.");
            return true;
        }
         

        //player 1 places their worker.
        if(this.player_1.workers.length < 2){
            clickedTile.worker = (this.player_1.placeWorker(position));
            
            return true;
        }


        //player 2 places their worker
        if(this.player_2.workers.length < 2){
            clickedTile.moveWorker(this.player_2.placeWorker(position));
            console.log("Has tile ref updated?"  + this.gameState.getTile(position).worker);
            //this.gameState.setTile(position, clickedTile);

            // first check for finished setup
            if(this.player_2.length === 2)
                return false;
            
            return true;
        }
          
        
    }
    
    handleWorkerSelection(position){
        let selectedWorker = this.gameState.getTile(position).worker;
        this.gameState.selectedWorker = selectedWorker;
        if(selectedWorker === null){
           
            this.gameState.clearHighlightedTiles();
        }
        else{
            this.gameState.clearHighlightedTiles();
        }
            //clearWorkerMovesHighlighitng();
    }

    clearWorkerMovesHighlighitng(){

    }
    
    
    highlightWorkerMoves(worker){
        let workerMoves = this.activePlayer.getAllValidWOrkerMoves(worker);
        workerMoves.forEach(position => {
            this.gameState.getTile(position).isHighlighted = true;
        });
    }


}





