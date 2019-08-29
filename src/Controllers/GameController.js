import Player from './Player';
import GameState from '../Model/GameState';
import Worker from '../Model/Worker.js';
import Game from '../View/Game.js';

export default class GameController{
    //These should be moved to gamestate at some point
    isInSetup = true;
    needsToSelectWorker = false;
    workerNeedsToMove = false;
    needsToBuild = false;
    
    gameState = null;
    
    constructor(game){
        this.gameState = new GameState(5);
        this.player_1 = new Player(this.gameState, '1');
        this.player_2 = new Player(this.gameState, '2');
        this.gameState.activePlayer=this.player_1;
        this.game = game;
    }

    placeWorker(position) {
        this.gameState.activePlayer.placeWorker(position);
    }
    
    //This is where the game loop should be!
    beginTurn(){

    }

    moveWorker(workerPosition, targetPosition){
        this.gameState.moveWorker(workerPosition, targetPosition);  //update the board state
        this.gameState.activePlayer.moveWorker(workerPosition, targetPosition); //update the worker state
        if(this.gameState.playerHasWon())
            this.gameOver();

    }

    gameOver(){

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
        this.isInSetup = true;
        this.needsToSelectWorker = false;
        this.workerNeedsToMove = false;
        this.player_1 = new Player(this.gameState);
        this.player_2 = new Player(this.gameState);
        console.log('Created a new game.');
    }

    endGame(){
        console.log('Game over!');
    }

    //assumes a worker is selected 
    handleWorkerMovement(position){
        let selectedWorkerPosition = this.gameState.selectedWorker.position;
        
        if(this.gameState.activePlayer.verifyMove(selectedWorkerPosition, position)){
            console.log('Moving worker to ' + position.toString());
            this.moveWorker(selectedWorkerPosition, position);

            this.needsToBuild = true;
            
            // Change the activly selected player
            if (this.gameState.activePlayer === this.player_1) {
                this.gameState.activePlayer = this.player_2;
            } else {
                this.gameState.activePlayer = this.player_1;
            }
            // Note that this new player has to select a tile
            this.needsToSelectWorker = true;

            return false;
        }

        console.log("Cannot move worker to that location.");
        return true;
    }

    handleWorkerSelection(position){
        let clickedTile = this.gameState.getTile(position);
        
        //there is no worker on the clicked tile
        if(clickedTile.worker === null){
            console.log('Selected a tile without a worker.');
            return true;
        }

        //they have selected a worker. But is it theirs?
        let selectedWorker = clickedTile.worker;
        //console.log("I recieved " +this.gameState.activePlayer.hasWorkerAtPosition(position) );
        if(this.gameState.activePlayer.hasWorkerAtPosition(position)){
            console.log('The user has selected their worker');
            this.gameState.selectedWorker = selectedWorker;
            this.workerNeedsToMove = true;
            return false;
        }

        console.log('The user has selected a worker that was not their own.');
        //they have selected a worker that is not their own.
        return true;
    }

    handleBoardClick(position){
        console.log('It is ' + ((this.gameState.activePlayer === this.player_1) ? 'player 1s' : 'player 2s') + ' turn.');
        console.log("The current player needs to select a worker: " + this.needsToSelectWorker);

        // do we need to place workers?
        if(this.isInSetup){
            console.log("We are in setup.");
            this.isInSetup = this.handleSetup(position);
            return;
        }

        
        if(this.needsToSelectWorker){
            console.log("We are in needs to select.");
            this.needsToSelectWorker = this.handleWorkerSelection(position);
            return;
        }

        if(this.workerNeedsToMove){
            console.log("We are in needs to needs to move.");
            this.workerNeedsToMove = this.handleWorkerMovement(position);
        }

       
    }

    handleSetup(position){
        let clickedTile = this.gameState.getTile(position);

        //Can't place a worker on top of another.
        if(clickedTile.worker !== null){
            console.log('Cannot place worker, tile is occupied.');
            return true;
        }
         

        //player 1 places their worker.
        if(this.player_1.workers.length < 2){
            clickedTile.worker = (this.player_1.placeWorker(position));
            console.log("Player 1 has placed a worker.");
            return true;
        }


        //player 2 places their worker
        if(this.player_2.workers.length < 2){
            clickedTile.moveWorker(this.player_2.placeWorker(position));
            console.log("Player 2 has placed a worker.");
            // first check for finished setup
            
           
            if(this.player_2.workers.length === 2){
                this.needsToSelectWorker = true;
                console.log('Both players have placed their pieces.');
                this.gameState.activePlayer=this.player_1;
                return false;
            }
                
            return true;
        }
    }
}
