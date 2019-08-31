import React from 'react';
import Vector2 from '../Model/Vector2.js';
import Square from './Square.js';

const BOARD_SIZE = 5;

export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.squareElement = React.createRef();

        this.state=({
            viewGameState: this.props.gameState
        });
    }

    updateSquare(){
        this.squareElement.current.updateSelf();
    }

    // takes a vector and assigns that vector to a square, also assigns an onclick method
    renderSquare(i) {
        return (
            <Square
                ref = {this.squareElement}
                position = {i}
                tileState={this.state.viewGameState.boardState[i.x][i.y]}
                onClick={(i) => this.props.onClick(i)}
                gameState={this.state.viewGameState}
            />
        );
    }

    generateBoardRow(row_index){
        let squareJSX = [];
        for(let y = 0; y < BOARD_SIZE; y++){
            squareJSX.push(this.renderSquare(new Vector2(row_index,y)));
        }
        return squareJSX;
    }

    generateBoard(){
        let rowSJX = [];
  
        for(let i = 0; i < BOARD_SIZE; i++){
            rowSJX.push(
                <div className='board-row'>
                    {this.generateBoardRow(i)}
                </div>
            );
        }

        return rowSJX;
    }

    render() {
        return (
            <div>
                { this.generateBoard() }
            </div>
        );
    }
}