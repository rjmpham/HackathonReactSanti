import React from 'react';
// eslint-disable-next-line no-unused-vars
import GameState from '../Model/GameState.js';
import BuildingImg from './BuildingImg.jsx';


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

            <BuildingImg gamestate={this.state.gameState} position={this.props.position}>
                    
            </BuildingImg>
           
           
        );
    }
}


{/* <button className="square" 
onClick={() => this.handleClick()}
>




</button> */}
// <div className= "buildRow">   
//                         <div className= "buildDisplay"> 
//                             {tile.topLevel} 
//                         </div>
//                         <div className= "buildSpace"> </div>
//                         <div className= "buildDisplay"> </div>
//                     </div>

//                     <div className= "playerRow">
//                         {workerIndicator}
//                     </div>
//                     <div className= "buildRow">  
//                         <div className= "buildDisplay"> </div>
//                         <div className= "buildSpace"> </div>
//                         <div className= "buildDisplay"></div>
//                     </div>