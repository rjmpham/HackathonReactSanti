import {FLOOR} from './Floor.js';
import Vector2 from './Vector2.js';

export default class Tile {
    description = 'This is a tile!';
    topLevel = FLOOR.GROUND;
    capped = false;
    worker = null;
    position;
    isHighlighted = false;

    constructor(x,y){
        this.position = new Vector2(x,y);
        this.description += this.position.toString();
    }

    moveWorker(worker){
        this.worker = worker;
        console.log('Worker is now ' + this.worker);
    }

    removeWorker(){
        this.worker = null;
    }

    //currently also the isMoveable
    isBuildable(){
        return (!this.capped) && (this.worker === null);
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

    getIndicator(){
        return this.worker.getIndicator();
    }

    reset(){
        this.topLevel = FLOOR.GROUND;
        this.capped = false;
        this.worker = null;
        this.isHighlighted = false;
    }



    //uncaping requires memory of previos top floor

    //overide floor can accept something and set topLevel for future changes.


}