// eslint-disable-next-line no-unused-vars
import React from 'react';
import {CONTROLBUTTONS} from '../Model/ControlButtons.js'; 


function ControlPannel(props){

    function handleClick(i){
        props.onClick(i);
    }
    

    return(
        <div>
            <button 
                className="menuButton" 
                onClick={() => handleClick(CONTROLBUTTONS.PASS)}
            > 
                Pass
            </button>
            
            <button 
                className="menuButton" 
                onClick={() => handleClick(CONTROLBUTTONS.NEWGAME)}
            > 
                New Game
            </button>
        </div>
    );
    
} export default ControlPannel;
