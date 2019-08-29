import React from 'react';

export default class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayLevel: this.props.gameState.getTile(this.props.position).topLevel,
            worker: ''
        };
    }

    handleClick(){
        this.props.onClick(this.props.position);
        let workerValue = '';

         
        if( this.props.gameState.getTile(this.props.position).worker !==null){
            workerValue = this.props.gameState.getTile(this.props.position).worker.indicator;
            console.log("there is a worker on the tile now.");
        } 

        if(workerValue === ''){
            console.log("Clearing state.");
        }
        this.setState({displayLevel : this.props.gameState.getTile(this.props.position).topLevel, 
            worker: workerValue
        });


    }

    updateSelf(){
        this.setState({displayLevel : this.props.gameState.getTile(this.props.position).topLevel});
        if( this.props.gameState.getTile(this.props.position).worker !==null){
            this.setState({worker :this.props.gameState.getTile(this.props.position).worker.indicator});
        } else {
            this.setState({worker :''});
        }
    }
    
    //pros.value is a Vector2 of the board position
    render(){
        return (
            <button className="square" 
                onClick={() => this.handleClick()}
            >
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