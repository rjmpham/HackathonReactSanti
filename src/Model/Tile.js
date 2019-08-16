import {FLOOR} from './Floor.js' 
import Vector2 from './Vector2.js'
export default class Tile {
    description = 'This is a tile!';
    topLevel = FLOOR.GROUND;
    capped = false;
    workerPresent = false;
    gridLocation;

    constructor(x,y){
        this.gridLocation = new Vector2(x,y);
    }

    moveWorker(){
        this.workerPresent = true;
    }

    removeWorker(){
        this.workerPresent = false;
    }

    //currently also the isMoveable
    isBuildable(){
        let output = true;
        if(this.capped||this.workerPresent){
            output = false;
        }
        return output;
    }

    buildFloor(){
        if((this.topLevel+1)===4){
            this.topLevel+=1;
            this.capped = true;
        } else {
            this.topLevel+=1;
        }
    }

    hasWorkerWon(){
        return this.workerPresent && this.topLevel === FLOOR.L_THREE;
    }

    //uncaping requires memory of previos top floor

    //overide floor can accept something and set topLevel for future changes.


}