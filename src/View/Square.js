import React from 'react';

export default class Square extends React.Component{
    constructor(props) {
        super(props)
    
        console.log(this.props.controller);
        this.state = {
            displayLevel: this.props.controller.getGameState().getTile(this.props.position).topLevel,
            worker: ''
        }
    }

    handleClick(){
        this.props.onClick(this.props.position);
        this.setState({displayLevel : this.props.controller.getGameState().getTile(this.props.position).topLevel});
        if( this.props.gameState.getTile(this.props.position).worker !==null){
            this.setState({worker :this.props.controller.getGameState().getTile(this.props.position).worker.getIndicator()});
        } else {
            console.log("Am I printing empty?");
            this.setState({worker :''});
        }
    }
    
    //pros.value is a Vector2 of the board position
    render(props){
        return (
            <button className="square" onClick={() => this.handleClick()}>
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 
                        {this.state.displayLevel} 
                    </div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> </div>
                </div>
      
                <div className= "playerRow">
                    {this.state.worker}
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