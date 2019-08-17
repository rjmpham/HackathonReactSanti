import Player from './Player';
import Worker from "../Model/Worker";
import { nullLiteral } from '@babel/types';
import Vector2 from '../Model/Vector2';

export default class GameController{
    
    activePlayer = null;
    
    constructor(gameState){
        this.gameState = gameState;
        this.player_1 = new Player();
        this.player_2 = new Player();
        this.activePlayer = this.player_1;
    }

    placeWorker(position) {
        this.activePlayer.placeWorker(position);
    }
    
    //This is where the game loop should be!
    beginTurn(){

    }

    moveWorker(workerPosition, targetPosition){
        this.gameState.moveWorker(workerPosition, targetPosition);  //update the board state
        this.gameState.activePlayer.moveWorker(workerPosition, targetPosition); //update the worker state
        if(this.gameState.playerHasWon())
            this.gameOver();
    }

    buildFloor(targetPosition){
        this.gameState.buildFloor(targetPosition); //update the board state
    }


    endTurn(){

        //update the active player
        // let playerIndex = this.gameState.playerList.indexOf(activePlayer);
        // playerIndex = (playerIndex + 1)% this.gameState.playerList.length;
        // activePlayer =this.gameState.playerList[playerIndex];

        //TODO: 
        //Updates the view, based on what the player is allowed to do.
    }
    

    newGame(){
        this.buildFloor(new Vector2(0, 0));
        console.log(this.gameState.getTile(new Vector2(0, 0)).topLevel);
    }

    endGame(){
        console.log('Game over!');
    }
}





