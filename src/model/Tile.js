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

    isCapped(){
        return this.capped;
    }
    
    isPlayerPresent(){
        return this.playerPresent;
    }

    buildFloor(){
        this.topLevel+=1;
        if(this.topLevel===4){
            this.capped = true;
        }
    }
}