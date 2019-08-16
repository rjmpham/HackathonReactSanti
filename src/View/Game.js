import React from "react";
import Board from "./Board.js"
import Controller from "../Controllers/GameController";

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.controller = new Controller(5);
    }
    render() {    
      return (
        <div className="game">
          <div className="game-board">
            <Board onClick={(i) => this.handleClick(i)}/>
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