import React from "react";

export default class Square extends React.Component{

    handleClick(i){

    }

    //pros.value is a Vector2 of the board position
    render(){
        return (
            <button className="square" onClick={this.handleClick(this.props)}>
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 
                        {this.props.gameState.getTile(this.props.position).topLevel} 
                    </div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> </div>
                </div>
      
                <div className= "playerRow">
                    {this.props.position.x}
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