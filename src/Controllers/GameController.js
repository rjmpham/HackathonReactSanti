import GameState from '../Model/GameState';
import Player from './Player';
import Worker from "../Model/Worker";
import Vector2 from '../Model/Vector2';

export default class GameController{
	constructor(boardSize){
        this.gameState = new GameState(boardSize);
        this.players = [new Player(), new Player()]
    }

    newGame() {
        for (var i = 0; i < 4; i++) {
            let x = Math.round(Math.random() * 4);
            let y = Math.round(Math.random() * 4);
            this.placeWorker(null, new Vector2(x, y), this.players[i % 2]);
        }
    }

    placeWorker(gender, position, player) {
        player.workers.push(new Worker(gender, position));
        console.log(player.workers)
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
    
}





