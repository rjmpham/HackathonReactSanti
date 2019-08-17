import React from "react";
import Board from "./Board.js"
import ControlPanel from "./ControlPanel.js"
import Controller from "../Controllers/GameController";
import GameState from "../Model/GameState.js";

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.controller = new Controller();
    }

    handleBoardClick(i){
        this.controller.handleBoardClick(i);
    }

    handleControlClick(i){
        this.controller.handleControlClick(i);
    }

    render() {    
      return (
        <div className="game">
          <div className="game-board">
                <Board 
                    onClick={(i) => this.handleBoardClick(i)}
                    gameState={this.controller.getGameState()}
                />
          </div>
          <div className="control-panel">
                {/*<ControlPanel                    
                    onClick={(i) => this.handleControlClick(i)}
                    gameState={this.gameState}
                />*/}
            <button onClick={() => this.controller.newGame()}>New Game</button>
            {/* <button>Move</button>
            <button>Build</button>
            <button>Undo</button>*/}
          </div>
        </div>
      );
    }
  }