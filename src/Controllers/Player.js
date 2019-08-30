import Worker from '../Model/Worker.js';

export default class Player{
    workers = [];
    moveDistance = 1;
    workerID = '';


    constructor(gameState, workerID,playerName){
        this.gameState = gameState;
        this.workerID = workerID;
        this.playerName = playerName;
    }

    //creates a new worker at the target position, but does not update the gameState.
    placeWorker(position){
        let newWorker = new Worker(position, this, this.workerID);
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

   

    //gets all valid moves as an array of Vector2s, of the valid moves for a given worker.
    getAllValidWorkerMoves(position){
        let workerTile = this.gameState.getTile(position);
        let localNine = this.gameState.getLocalNine(position);
        
        localNine = localNine.filter((tile) => {return tile.isBuildable();}); //filter out all capped and worker filled tiles
        localNine = localNine.filter((tile) => {return tile.topLevel <= workerTile.topLevel+1;}); //filter out all tiles that are too high
        
        let validPositions = [];
        for(let i =0; i < localNine.length; i++){
            validPositions.push(localNine[i].position);
        }
        return validPositions;
    }

    //verifies that a given position is a valid move location for a given worker
    verifyMove(workerPosition, targetPosition){
        let validMoves = this.getAllValidWorkerMoves(workerPosition);
        validMoves.forEach(x => console.log(x));
        let moveValid = false;
        for(let i = 0; i < validMoves.length; i++){
            if(validMoves[i].equals(targetPosition)){
                console.log('The move is valid.');
                moveValid = true;
            }
                
        }
        return moveValid;
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

