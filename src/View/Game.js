/* eslint-disable no-unused-vars */
import React from 'react';
import Board from './Board.js';
import ControlPanel from './ControlPanel.js';
import {CONTROLBUTTONS} from '../Model/ControlButtons.js'; 
import GameController from '../Controllers/GameController';


export default class Game extends React.Component {
    winningJSX = null;
    errorJSX = null;
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
        if(this.state.viewGameState.winner){
            this.winningJSX = <div className= "winner">Player {this.get_current_player()} wins!!! <span role='img' aria-label='medal'>🎖️</span></div>;
        } else {
            this.winningJSX = null;
        }

        if (this.state.viewGameState.error_message != null) {
            this.errorJSK = <p><b style={{color: '#b33939'}}><span role='img' aria-label='warning'>⚠️</span></b> {this.state.viewGameState.error_message}</p>;
            this.controller.gameState.error_message = null;
        } else {
            this.errorJSK = null;
        }

    }

    get_current_player() {
        return this.state.viewGameState.activePlayer.workerID;
    }

    get_turn_phase() {
        if (this.state.viewGameState.isInSetup) {
            return 'Setup ⚙️';
        } else if (this.state.viewGameState.needsToSelectWorker || this.state.viewGameState.workerNeedsToMove) {
            return 'Worker Movement 🧳';
        } else if (this.state.viewGameState.needsToBuild) {
            return 'Building 🔨';
        }
    }

    handleControlClick(i){
        if (i === CONTROLBUTTONS.NEWGAME){
            //we're just refreshing the page for new game atm
            document.location.reload(true);
        }
        
        else if (i === CONTROLBUTTONS.PASS) {
            this.controller.newTurn();
            this.updateState();
        }
    }

    updateState(){
        this.setState({viewGameState: this.controller.gameState});
    }

    render() {    
        let current_player = this.get_current_player();
        let turn_phase = this.get_turn_phase();
        return (
            <>
                <h1>Santorini in React <span role="img" aria-label="wave">🌊</span></h1>
                <h4>Created by Erik Biederstadt, Richard Pham, and David </h4>
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
                        <p>It is <b>Player {current_player}'s turn</b></p>
                        <p><b>Turn Phase:</b> {turn_phase}</p>
                        {this.errorJSK}
                        {this.winningJSX}
                    </div>
                </div>
            </>
        );
    }
}