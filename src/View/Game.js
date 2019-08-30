import React from 'react';
import Board from './Board.js';
import ControlPanel from './ControlPanel.js';
import {CONTROLBUTTONS} from '../Model/ControlButtons.js'; 
import GameController from '../Controllers/GameController';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new GameController(this);

        this.state=({
            viewGameState: this.controller.gameState
        });
    }

    winningJSX = null;
    handleBoardClick(i){
        this.controller.handleBoardClick(i);
        this.setState({
            viewGameState: this.controller.gameState
        });
        if(this.state.viewGameState.winner === true){
            this.winningJSX = <div className= "winner">Player {this.state.viewGameState.activePlayer.workerID} wins!!!</div>;
        } else {
            this.winningJSX = null;
        }

    }

    // Checks who the current player is
    // returns "1" if player is the current player
    // returns "2" otherwise
    get_current_player() {
        return this.controller.gameState.activePlayer === this.controller.player_1 ? '1' : '2';
    }

    handleControlClick(i){
        if(i === CONTROLBUTTONS.NEWGAME){
            this.controller.newGame();

            this.setState({
                viewGameState: this.controller.gameState
            });
            this.winningJSX = null;
        }
        
        else if (i === CONTROLBUTTONS.PASS) {
            let current_player = this.get_current_player();
            console.log("Player " + current_player + " has decided to pass their turn.");
            this.controller.newTurn();
        }
    }

    updateState(){
        this.setState({viewGameState: this.controller.gameState});
    }

    render() {    
        let current_player = this.get_current_player();
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        ref ={this.boardElement} 
                        onClick={(i) => this.handleBoardClick(i)}
                        gameState={this.state.viewGameState}
                        
                    />
                </div>

                <div className="winner-panel">
                    <div className="control-panel">
                        <ControlPanel                    
                            onClick={(i) => this.handleControlClick(i)}
                            gameState={this.state.viewGameState}
                        />
                    </div>
                    <div>
                        <p>It is <b>Player {current_player}'s turn</b></p>
                    </div>
                    {this.winningJSX}
                </div>
            </div>
        );
    }
}