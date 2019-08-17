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
        console.log("What is null?");
        console.log(this.props.gameState);
        console.log(this.props.position);
        console.log(this.props.gameState.getTile(this.props.position));
        this.setState({displayLevel : this.props.gameState.getTile(this.props.position).topLevel});
        if( this.props.gameState.getTile(this.props.position).worker !==null){
            this.setState({worker :this.props.gameState.getTile(this.props.position).worker.indicator});
        } else {
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