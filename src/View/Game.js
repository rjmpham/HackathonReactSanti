import React from "react";
import Board from "./Board.js"
import Controller from "../Controllers/GameController";
import GameState from "../Model/GameState.js";

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.gameState = new GameState(5);
      this.controller = new Controller(this.gameState);
    }

    render() {    
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                onClick={(i) => this.handleClick(i)}
                gameState={this.gameState}
            />
          </div>
          <div className="game-info">
            <button onClick={() => this.controller.placeWorker()}>New Game</button>
            {/* <button>Move</button>
            <button>Build</button>
            <button>Undo</button> */}
          </div>
          <div className="move-info">
          </div>
        </div>
      );
    }
  }