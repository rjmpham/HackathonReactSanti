import Worker from '../Model/Worker.js';
// eslint-disable-next-line no-unused-vars
import Vector2 from '../Model/Vector2.js';
import Tile from '../Model/Tile.js';

export default class Player{
    workers = []
    moveDistance = 1;

    constructor(gameState){
        this.gameState = gameState;
    }

    //creates a new worker at the target position, but does not update the gameState.
    placeWorker(position){
        let newWorker = new Worker(position, this);
        this.workers.push(newWorker);
        console.log('Placed worker at ' + position);
        
        return newWorker;
    }

    //updates the workers position, but not the gameState (UNLESS THE PLAYER WON.)
    moveWorker(workerPosition, targetPosition){

        for(let i =0; i < this.workers.length; i++){
            let worker  = this.workers[i];
            if(worker.position.equals(workerPosition)){
                worker.position = targetPosition;
            }
        }
        if(this.gameState.getTile(workerPosition).hasWorkerWon())
            this.gameState.winner = this;
    }

    getWorkerAt(position){
        for(let i =0; i < this.workers.length; i++){
            let worker  = this.workers[i];
            if(worker.position.equals(position)){
                return worker;
            }
        }
    }

    //gets all valid moves as an array of Vector2s, of the valid moves for a given worker.
    getAllValidWorkerMoves(position){
        let workerTile = this.gameState.getTile(position);
        let localNine = this.gameState.getLocalNine(position);
        
        localNine = localNine.filter((tile) => {return tile.isBuildable();}); //filter out all capped and worker filled tiles
        localNine = localNine.filter((tile) => {return tile.topLevel <= workerTile.topLevel+1;}); //filter out all tiles that are too high
        // console.log('Available move tiles are: ');
        // localNine.forEach(x => console.log(x));
        
        let validPositions = [];
        for(let i =0; i < localNine.length; i++){
            validPositions.push(localNine[i].position);
        }
        return validPositions;
    }

    //gets all valid build locations as an array of Vector2s, of the valid moves for a given worker.
    getAllValidBuildLocations(worker){
        let localNine = this.gameState.getWorkerLocalNine(worker.position);
        
        localNine = localNine.filter((tile) => tile.isBuildable()); //filter out all capped and worker filled tiles
        return localNine.map(tile => tile.position);
    }

    //verifies that a given position is a valid move location for a given worker
    verifyMove(workerPosition, targetPosition){
        let validMoves = this.getAllValidWorkerMoves(workerPosition);
        validMoves.forEach(x => console.log(x));
        let moveValid = false;
        for(let i = 0; i < validMoves.length; i++){
            if(validMoves[i].equals(targetPosition)){
                console.log("The move is valid.");
                moveValid = true;
            }
                
        }
        return moveValid;
    }
    
    //verifies that a given position is a valid build location for a given worker
    verifyBuildAt(worker, targetPosition){
        return this.getAllValidBuildLocations(worker.position).includes(targetPosition);
    }

    hasWorkerAtPosition(position){
        let foundMatch = false;
        this.workers.forEach(x => {
            if(x.position.equals(position)){
                foundMatch = true;
            }
        });
        return foundMatch;
    }

    reset(){
        this.workers = [];
    }




}

