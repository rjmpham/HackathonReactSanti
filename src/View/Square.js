import React from "react";

export default class Square extends React.Component{

    //pros.value is a Vector2 of the board position
    render(){
        return (
            <button className="square" onClick={this.props.onClick(this.props.position)}>
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 
                        {this.props.gameState.getTile(this.props.value).topLevel} 
                    </div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> </div>
                </div>
      
                <div className= "playerRow">
                    {this.props.position.x},{this.props.position.y}
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