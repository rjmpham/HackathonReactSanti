import {FLOOR} from './Floor.js' 
import Vector2 from './Vector2.js'
export default class Tile {
    description = 'This is a tile!';
    topLevel = FLOOR.GROUND;
    capped = false;
    worker = null;
    gridLocation;

    constructor(x,y){
        this.gridLocation = new Vector2(x,y);
    }

    moveWorker(worker){
        this.worker = worker
    }

    removeWorker(){
        this.worker = null;
    }

    //currently also the isMoveable
    isBuildable(){
        let output = true;
        if(this.capped||this.workerPresent != null){
            output = false;
        }
        return output;
    }

    //assumes that the build has been validated
    buildFloor(){
        if((this.topLevel+1)===4){
            this.topLevel = FLOOR.DOME;
            this.capped = true;
        } else {
            this.topLevel+=1;
        }
    }

    hasWorkerWon(){
        return this.worker === null && this.topLevel === FLOOR.L_THREE;
    }

    //uncaping requires memory of previos top floor

    //overide floor can accept something and set topLevel for future changes.


}