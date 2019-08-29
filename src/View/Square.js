import React from 'react';
// eslint-disable-next-line no-unused-vars
import GameState from '../Model/GameState.js';

export default class Square extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({
            displayLevel: this.props.tileState.topLevel,
            worker: this.props.tileState.worker,
            gameState: this.props.gameState
        });
    }

    handleClick(){
        this.props.onClick(this.props.position);
        this.setState({displayLevel : this.props.tileState.topLevel});
        
        //if there is no worker, set state to the worker.
        if( this.props.tileState.worker !==null){
            this.setState({worker :this.props.tileState.worker.indicator});
        } else {
            this.setState({worker :''});
        }
        
        this.forceUpdate();

    }

    updateSelf(){
        this.setState({displayLevel : this.props.tileState.topLevel});
        if( this.props.tileState.worker !==null){
            this.setState({worker :this.props.tileState.worker.indicator});
        } else {
            this.setState({worker :''});
        }
    }
    
    //pros.value is a Vector2 of the board position
    render(){    
        this.state.gameState.logGameState();
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