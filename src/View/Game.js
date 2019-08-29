import React from 'react';
// eslint-disable-next-line no-unused-vars
import Board from './Board.js';
// eslint-disable-next-line no-unused-vars
import ControlPanel from './ControlPanel.js';
// eslint-disable-next-line no-unused-vars
import GameState from '../Model/GameState.js';
import {CONTROLBUTTONS} from '../Model/ControlButtons.js'; 
import Controller from '../Controllers/GameController';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new Controller();
        
        
    }

    handleBoardClick(i){
        this.controller.handleBoardClick(i);
    }

    handleControlClick(i){
        if(i === CONTROLBUTTONS.NEWGAME){
            this.controller.newGame();
            this.boardElement.current.updateSquare();
        }
        //this.controller.handleControlClick(i);
    }

    render() {    
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        ref ={this.boardElement} 
                        onClick={(i) => this.handleBoardClick(i)}
                        gameState={this.controller.getGameState()}
                    />
                </div>
                <div className="control-panel">
                    <ControlPanel                    
                        onClick={(i) => this.handleControlClick(i)}
                        gameState={this.controller.getGameState()}
                    />
                </div>
            </div>
        );
    }
}