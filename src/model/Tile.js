import {FLOOR} from './Floor.js/index.js' 
import Vector2 from './Vector2.js'
export default class Tile {
    description = 'This is a tile!';
    topLevel = FLOOR.GROUND;
    capped = false;
    playerPresent = false;
    gridLocation;

    constructor(x,y){
        this.gridLocation = new Vector2(x,y);
    }

    movePlayer(){
        this.playerPresent = true;
    }

    removePlayer(){
        this.isPlayerPresent = false;
    }

    //currently also the isMoveable
    isBuildable(){
        let output = true;
        if(this.capped||this.playerPresent){
            output = false;
        }
        return output;
    }

    buildFloor(){
        if((this.topLevel+1)===4){
            this.capped = true;
        } else {
            this.topLevel+=1;
        }
    }

    //uncaping requires memory of previos top floor

    //overide floor can accept something and set topLevel for future changes.


}