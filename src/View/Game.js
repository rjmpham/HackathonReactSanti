import React from 'react';
// eslint-disable-next-line no-unused-vars
import Board from './Board.js';
// eslint-disable-next-line no-unused-vars
import ControlPanel from './ControlPanel.js';
// eslint-disable-next-line no-unused-vars
import GameState from '../Model/GameState.js';
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

    handleBoardClick(i){
        this.controller.handleBoardClick(i);
        this.setState({
            viewGameState: this.controller.gameState
        });

    }

    handleControlClick(i){
        if(i === CONTROLBUTTONS.NEWGAME){
            this.controller.newGame();
            this.setState({
                viewGameState: this.controller.gameState
            });
        }
        //this.controller.handleControlClick(i);
    }

    updateState(){
        console.log('Updating state.');
        this.setState({viewGameState: this.controller.gameState});
        //this.state.viewGameState.toString()   ;
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
                <div className="control-panel">
                    <ControlPanel                    
                        onClick={(i) => this.handleControlClick(i)}
                        gameState={this.state.viewGameState}
                    />
                </div>
            </div>
        );
    }
}