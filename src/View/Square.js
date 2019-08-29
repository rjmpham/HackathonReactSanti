import React from 'react';
import GameState from '../Model/GameState.js';

export default class Square extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({
            gameState: this.props.gameState
        });
    }

    handleClick(){
        this.props.onClick(this.props.position);        

    }

 
    
    //props.value is a Vector2 of the board position
    render(){
    
        //this.state.gameState.logGameState();
        let tile = this.state.gameState.boardState[this.props.position.x][this.props.position.y];
        let workerIndicator = (tile.worker == null) ? '' : tile.worker.indicator;
        return (
            <button className="square" 
                onClick={() => this.handleClick()}
            >
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 
                        {tile.topLevel} 
                    </div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> </div>
                </div>
      
                <div className= "playerRow">
                    {workerIndicator}
                </div>
                <div className= "buildRow">  
                    <div className= "buildDisplay"> </div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"></div>
                </div>
        
        
            </button>
        );
    }
}