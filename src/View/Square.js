import React from 'react';

export default class Square extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            displayLevel: this.props.gameState.getTile(this.props.position).topLevel,
            worker: ''
        }
    }

    handleClick(){
        this.props.onClick(this.props.position);
        console.log("Do we have a worker present? " + this.props.gameState.getTile(this.props.position).worker);
        this.setState({displayLevel : this.props.gameState.getTile(this.props.position).topLevel});
        if( this.props.gameState.getTile(this.props.position).worker !==null){
            console.log("Am I printing W?" + this.props.gameState.getTile(this.props.position).worker.indicator);
            console.log("Worker object: " + this.props.gameState.getTile(this.props.position).getIndicator() );
            this.setState({worker :this.props.gameState.getTile(this.props.position).getIndicator()});
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