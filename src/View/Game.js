import React from 'react';
// eslint-disable-next-line no-unused-vars
import Board from './Board.js';
// eslint-disable-next-line no-unused-vars
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

    handleControlClick(i){
        if(i === CONTROLBUTTONS.NEWGAME){
            this.controller.newGame();

            this.setState({
                viewGameState: this.controller.gameState
            });
            this.winningJSX = null;
            this.updateState();
        }
        
        else if (i === CONTROLBUTTONS.PASS) {
            let is_player_1 = this.controller.gameState.activePlayer === this.controller.player_1;
            console.log('Player ' + (is_player_1 ? '1' : '2') + ' has decided to pass their turn.');
            this.controller.newTurn();
        }
    }

    updateState(){
        this.setState({viewGameState: this.controller.gameState});
    }

    render() {    
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
                    {this.winningJSX}
                </div>
            </div>
        );
    }
}