import Vector2 from './Vector2';

export default class Player{
    workers = []
    gameController = null;

    constructor(gameController){
        this.gameController == gameController;
    }

    //creates a new worker at the target position, but does not update the gameState.
    placeWorker(gender, position){
        this.workers.push(new Worker(gender, position));
    }

    //updates the workers position, but not the gameState
    moveWorker(worker, targetPosition){
        this.workers.find(x => x===worker).position = targetPosition;
    }

    //gets all valid moves as an array of Vector2s, of the valid moves for a given worker.
    getAllValidWorkerMoves(worker){
        let workerTile = this.gameController.gameState.getTile(worker.position);
        let localNine = this.gameController.gameState.getLocalNine(worker.position);
        localNine = localNine.filter(tile => tile.isBuildable()); //filter out all capped and worker filled tiles
        localNine = localNine.filter(tile => tile.topLevel <= workerTile.topLevel+1); //filter out all tiles that are too high
        
        return localNine.map(tile => tile.position);
    }

     //gets all valid build locations as an array of Vector2s, of the valid moves for a given worker.
    getAllValidBuildLocations(worker){
        let localNine = this.gameController.getWorkerLocalNine(worker.position);
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

