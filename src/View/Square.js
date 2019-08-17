import React from "react";

export default class Square extends React.Component{

    displayLevel = this.props.gameState.getTile(this.props.position).topLevel;

    handleClick(){
        this.props.onClick(this.props.position);
        this.displayLevel = this.props.gameState.getTile(this.props.position).topLevel;
    }

    //pros.value is a Vector2 of the board position
    render(props){
        return (
            <button className="square" onClick={() => this.handleClick()}>
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 
                        {this.displayLevel} 
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