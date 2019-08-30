import Player from './Player';
import GameState from '../Model/GameState';
import {FLOOR} from '../Model/Floor.js';

export default class GameController {
    constructor(game){
        this.gameState = new GameState(5);
        this.player_1 = new Player(this.gameState, '1');
        this.player_2 = new Player(this.gameState, '2');
        this.gameState.activePlayer = this.player_1;
        this.game = game;
    }

    placeWorker(position) {
        this.gameState.activePlayer.placeWorker(position);
    }

    moveWorker(workerPosition, targetPosition){
        this.gameState.moveWorker(workerPosition, targetPosition);  //update the board state
        this.gameState.activePlayer.moveWorker(workerPosition, targetPosition); //update the worker state
    }

    buildFloor(targetPosition){
        this.gameState.buildFloor(targetPosition); //update the board state
    }

    newGame(){
        this.gameState.isInSetup = true;
        this.gameState.needsToSelectWorker = false;
        this.gameState.workerNeedsToMove = false;
        this.gameState.needsToBuild = false;
        this.gameState.reset();
        this.player_1 = new Player(this.gameState, '1');
        this.player_2 = new Player(this.gameState, '2');
        this.gameState.activePlayer = this.player_1;
        console.log('Created a new game.');
    }

    // Resets the game State
    newTurn() {
        this.gameState.needsToBuild = false;
        this.gameState.workerNeedsToMove = false;
        this.gameState.needsToSelectWorker = true;

        if (this.gameState.activePlayer === this.player_1) {
            this.gameState.activePlayer = this.player_2;
        } else {
            this.gameState.activePlayer = this.player_1;
        }
    }

    //assumes a worker is selected 
    handleWorkerMovement(position){
        let selectedWorkerPosition = this.gameState.selectedWorker.position;
        
        if(this.gameState.activePlayer.verifyMove(selectedWorkerPosition, position)){
            console.log('Moving worker to ' + position.toString());
            this.moveWorker(selectedWorkerPosition, position);
            if(this.gameState.getTile(position).topLevel===FLOOR.L_THREE){
                this.gameState.winner = true;
                return false;
            }

            this.gameState.needsToBuild = true;
            this.gameState.needsToSelectWorker = false;

            return false;
        }

        console.log('Cannot move worker to that location.');
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

        if(this.gameState.activePlayer.hasWorkerAtPosition(position)){
            console.log('The user has selected their worker');
            this.gameState.selectedWorker = selectedWorker;
            if(!this.gameState.workerNeedsToMove){
                this.gameState.workerNeedsToMove = true;
            }
            return false;
        }
        return true;
    }

    handleBoardClick(position){
        console.log('It is ' + ((this.gameState.activePlayer === this.player_1) ? 'player 1s' : 'player 2s') + ' turn.');

        // If the 
        if(this.gameState.winner === true) {
            return;
        }

        if(this.gameState.isInSetup){
            this.gameState.isInSetup = this.handleSetup(position);
            return;
        }

        if(this.gameState.needsToSelectWorker){
            this.gameState.needsToSelectWorker = this.handleWorkerSelection(position);
            return;
        }

        if(this.gameState.workerNeedsToMove){
            if (this.gameState.getTile(position).isBuildable()) {
                this.gameState.workerNeedsToMove = this.handleWorkerMovement(position);
                return;   
            } else {
                this.handleWorkerSelection(position);
                return;
            }
        }

        if (this.gameState.needsToBuild) {
            console.log('Attempting to build at position ' + position);
            let target = this.gameState.getTile(position);

            if (target.isBuildable()) {
                let selectedWorkerPosition = this.gameState.selectedWorker.position;

                let local9 = this.gameState.getLocalNine(selectedWorkerPosition);
                let builtBool = false;

                for(let i = 0; i < local9.length; i++){
                    
                    if(local9[i]===target){
                        this.gameState.buildFloor(position);
                        builtBool = true;
                        break;
                    }
                }
                
                if (builtBool) {
                    this.newTurn();
                } else {
                    console.log('Build Position is unreachable');
                }

            } else {
                console.log("Can't build at the position " + position);
            }
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
            return true;
        }

        //player 2 places their worker
        if(this.player_2.workers.length < 2){
            clickedTile.moveWorker(this.player_2.placeWorker(position));

            if(this.player_2.workers.length === 2){
                this.gameState.needsToSelectWorker = true;
                console.log('Both players have placed their pieces.');
                this.gameState.activePlayer=this.player_1;
                return false;
            }
                
            return true;
        }
    }
}
