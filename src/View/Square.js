import React from 'react';
// eslint-disable-next-line no-unused-vars
import GameState from '../Model/GameState.js';
import {FLOOR} from '../Model/Floor.js';


export default class Square extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({
            squareLevel: 'square0', 
            gameState: this.props.gameState,
        });
    }

    handleClick(){
        this.props.onClick(this.props.position); 
        let tile = this.state.gameState.boardState[this.props.position.x][this.props.position.y];
        
        if(tile.topLevel===FLOOR.GROUND){
            this.setState({
                squareLevel: 'square0', 
            });
        } else if(tile.topLevel===FLOOR.L_ONE){
            this.setState({
                squareLevel: 'square1', 
            });
        } else if(tile.topLevel===FLOOR.L_TWO){
            this.setState({
                squareLevel: 'square2', 
            });
        } else if(tile.topLevel===FLOOR.L_THREE){
            this.setState({
                squareLevel: 'square3', 
            });
        } else {
            this.setState({
                squareLevel: 'square4', 
            });
        }
    }
 
    
    render(){
        let tile = this.state.gameState.boardState[this.props.position.x][this.props.position.y];
        let workerIndicator = (tile.worker == null) ? '' : (tile.worker.indicator==1)? '🐺':'🐻';
        if (tile.is_highlighted) {
            this.setState({
                squareLevel: 'highlightedsquare',
            });
        }

        return (
            <button 
                // eslint-disable-next-line quotes
                className={this.state.squareLevel}
                onClick={() => this.handleClick()}
            >
                <div className= "playerRow">
                    {workerIndicator}
                </div>
            </button>
        );
    }
}