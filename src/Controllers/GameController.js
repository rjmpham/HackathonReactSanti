import GameState from './GameState';

export default class GameController{
	
    gameState = null;
    
	constructor(){
        this.newGame();
	}
	
    newGame(){
        this.gameState = new GameState(5); //creates a 5x5 board state.
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
        let playerIndex = this.gameState.playerList.indexOf(activePlayer);
        playerIndex = (playerIndex + 1)% this.gameState.playerList.length;
        activePlayer =this.gameState.playerList[playerIndex];

        //TODO: 
            //Updates the view, based on what the player is allowed to do.
    }
    
	
	
    
    gameOver(){
        
    }
    
   

    

    

	
}





