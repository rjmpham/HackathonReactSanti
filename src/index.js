import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

const BOARD_SIZE = 5;

class Board extends React.Component {
  


  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(25).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    let status;
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />

        </div>
        <div className="game-info">
          <div>{status}</div>
          <button>Move</button>
          <button>Build</button>
          <button onClick={() => this.jumpTo(this.state.stepNumber - 1)}>Undo</button>
        </div>
        <div className="move-info">
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);