import React from "react";

const BOARD_SIZE = 5;

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
          <div className= "buildRow">   
              <div className= "buildDisplay"> 1</div>
              <div className= "buildSpace"> </div>
              <div className= "buildDisplay"> 2</div>
          </div>
          <div className= "playerRow">
              {props.value}
          </div>
          <div className= "buildRow">  
              <div className= "buildDisplay"> 3</div>
              <div className= "buildSpace"> </div>
              <div className= "buildDisplay"> D</div>
          </div>
  
  
      </button>
    );
  }

export default class Board extends React.Component {


  renderSquare(i) {
      
    return (
      <Square 
        value = {i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  generateBoardRow(row_index){
    let squareJSX = [];
    for(let i =row_index*BOARD_SIZE; i < row_index*BOARD_SIZE + BOARD_SIZE; i++){
      squareJSX.push(this.renderSquare(i));
    }
    return squareJSX;
  }

  generateBoard(){
    let rowSJX = [];
  
    for(let i =0; i < BOARD_SIZE; i++){

      rowSJX.push(<div className='board-row'>
        {this.generateBoardRow(i)}
      </div>);
      
    }
    return rowSJX;
  }

  render() {
    let boardJSX = this.generateBoard();
    return (
      <div>
        {boardJSX}
      </div>
    );
  }
}