import React from 'react';
import levelImg from './Level1.png';

export default class BuildingImg extends React.Component{
    
    //Vector 2 of position should be passed as a prop
    constructor(props){
        super(props);

        this.state = ({
            gameState: this.props.gameState
        });
    }


    render(){
        
        return (
     <img  style={{width: '50px', height: '50px' }} src={levelImg}/>  
        


        );
    }
}