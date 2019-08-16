import React from "react";

export default class Square extends React.Component{

    handleClick(i){

    }

    //pros.value is a Vector2 of the board position
    render(){
        return (
            <button className="square" onClick={this.handleClick(this.props)}>
                <div className= "buildRow">   
                    <div className= "buildDisplay"> 1</div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> 2</div>
                </div>
      
                <div className= "playerRow">
                    {this.props.x}
                </div>
                <div className= "buildRow">  
                    <div className= "buildDisplay"> 3</div>
                    <div className= "buildSpace"> </div>
                    <div className= "buildDisplay"> D</div>
                </div>
        
        
            </button>
        );
    }
}