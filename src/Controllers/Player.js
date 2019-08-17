export default class Player{
    workers = []
    moveDistance = 1;

    //creates a new worker at the target position, but does not update the gameState.
    placeWorker(position){
        this.workers.push(new Worker(position));
    }

    //updates the workers position, but not the gameState (UNLESS THE PLAYER WON.)
    moveWorker(workerPosition, targetPosition){
        this.workers.find(x => x.position === workerPosition).position = targetPosition;
        if(this.gameState.getTile(workerPosition).hasWorkerWon())
            this.gameState.winner = this;
    }

    //gets all valid moves as an array of Vector2s, of the valid moves for a given worker.
    getAllValidWorkerMoves(worker){
        let workerTile = this.gameState.getTile(worker.position);
        let localNine = this.gameState.getLocalNine(worker.position);
        localNine = localNine.filter(tile => tile.isBuildable()); //filter out all capped and worker filled tiles
        localNine = localNine.filter(tile => tile.topLevel <= workerTile.topLevel+1); //filter out all tiles that are too high
        
        return localNine.map(tile => tile.position);
    }

     //gets all valid build locations as an array of Vector2s, of the valid moves for a given worker.
    getAllValidBuildLocations(worker){
        let localNine = this.gameState.getWorkerLocalNine(worker.position);
        localNine = localNine.filter(tile => tile.isBuildable()); //filter out all capped and worker filled tiles
        return localNine.map(tile => tile.position);
    }

    //verifies that a given position is a valid move location for a given worker
    verifyMove(worker, targetPosition){
        return this.getAllValidMoves(worker.position).includes(targetPosition);
	}
    
    //verifies that a given position is a valid build location for a given worker
	verifyBuildAt(worker, targetPosition){
		return this.getAllValidBuildLocations(worker.position).includes(targetPosition);
    }


}

