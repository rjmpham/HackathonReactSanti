import React from 'react';

export default class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayLevel: this.props.tileState.topLevel,
            worker: ''
        };
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