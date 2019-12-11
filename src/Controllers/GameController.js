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

        this.gameState.activePlayer = (this.gameState.activePlayer === this.player_1) ? this.player_2 : this.player_1;
    }

    find_buildable_positions(worker_position) {
        let local_nine = this.gameState.getLocalNine(worker_position);
        let buildable_positions = [];
        local_nine.forEach(tile => {
            if (tile.isBuildable() && tile.position !== worker_position) {
                buildable_positions.push(tile);
            }
        });

        return buildable_positions;
    }

    //assumes a worker is selected 
    handleWorkerMovement(position){
        let selectedWorkerPosition = this.gameState.selectedWorker.position;
        
        if(this.gameState.activePlayer.verifyMove(selectedWorkerPosition, position)){
            console.log('Moving worker to ' + position.toString());
            this.moveWorker(selectedWorkerPosition, position);
            if(this.gameState.getTile(position).topLevel === FLOOR.L_THREE){
                this.gameState.winner = true;
                return false;
            }

            this.gameState.needsToBuild = true;
            this.gameState.needsToSelectWorker = false;

            return false;
        }

        this.gameState.error_message = "Can't move worker to that location.";
        return true;
    }

    handleWorkerSelection(position){
        let clickedTile = this.gameState.getTile(position);
        
        //there is no worker on the clicked tile
        if(clickedTile.worker === null){
            this.gameState.error_message = 'Selected a tile without a worker';
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
        } else {
            this.gameState.error_message = 'Select your worker';
        }
        return true;
    }

    handleBoardClick(position) {
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

                let buildable_positions = this.find_buildable_positions(position);
                this.gameState.highlightTiles(buildable_positions);
                

                return;   
            } else {
                if (this.handleWorkerSelection(position)) {
                    this.gameState.error_message = 'Worker can\'t move to that location';
                    return;
                } else {
                    return;
                }

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
                    this.gameState.clearHighlightedTiles();
                    this.newTurn();
                } else {
                    this.gameState.error_message = 'Build Position is unreachable';
                }

            } else {
                this.gameState.error_message = "Can't build on tiles that are already occupied";
            }
        }
       
    }


    handleSetup(position){
        let clickedTile = this.gameState.getTile(position);

        //Can't place a worker on top of another.
        if(clickedTile.worker !== null){
            this.gameState.error_message = 'Cannot place worker, tile is occupied.';
            return true;
        }
         
        //player 1 places their worker.
        if(this.player_1.workers.length < 2){
            clickedTile.worker = (this.player_1.placeWorker(position));
            if (this.player_1.workers.length === 2) {
                this.gameState.activePlayer = this.player_2;
            }
            return true;
        }

        //player 2 places their worker
        if(this.player_2.workers.length < 2){
            clickedTile.moveWorker(this.player_2.placeWorker(position));

            if(this.player_2.workers.length === 2){
                this.gameState.needsToSelectWorker = true;
                this.gameState.activePlayer=this.player_1;
                return false;
            }
                
            return true;
        }
    }
}
