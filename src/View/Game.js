import React from "react";
import Board from "./Board.js";

export default class Game extends React.Component {

    render() {    
      return (
        <div className="game">
          <div className="game-board">
            <Board 

            />
  
          </div>
          <div className="game-info">
            <button>Move</button>
            <button>Build</button>
            <button>Undo</button>
          </div>
          <div className="move-info">
          </div>
        </div>
      );
    }
  }